require('dotenv').config();
const db = require("../../models")
const qs = require('qs');
const axios = require("axios");

const clientID = process.env.GOOGLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

let redirectUri;
if(process.env.NODE_ENV === 'production'){
  redirectUri = 'https://cloudi.shop';
}else{
  redirectUri = 'http://localhost:3000';
}

module.exports = {
  post: (req, res) => {
    const code = decodeURIComponent(req.body.code);//! 구글 인가 코드는 decode 필요
    const orders = req.body.orders;// 비로그인 상태에서 장바구니 정보
    // console.log(code)

    axios({
      method: 'post',
      url: 'https://oauth2.googleapis.com/token',
      data: qs.stringify({
        client_id: clientID,
        client_secret: clientSecret,
        code: code,
        redirect_uri: redirectUri,
        grant_type: 'authorization_code'
      }),
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    })
    .then(data => {
      // console.log(data.data)
      const token = data.data.access_token;
      // console.log(token)

      axios({
        method: 'get',
        url: `https://www.googleapis.com/oauth2/v2/userinfo`,
        headers: {
          'authorization': `Bearer ${token}`,
        }
      })
      .then(data1 => {// 토큰으로 사용자 정보 받아옴
        //data1.data 유저정보
        // console.log(data1.data)
        let userInfo = data1.data;
        // console.log(typeof userInfo.id)

        db.user.findOrCreate({
          where: { googleId : userInfo.id},
          defaults: {
            kakaoId: null,
            googleId: userInfo.id,
            isAdmin: false,
            userEmail: userInfo.email,
            userPassword: null,
            userName: userInfo.name
          }
        })
        .then(async ([data2, created]) => {
          let userInfoDB = data2.dataValues;
          delete userInfoDB.userPassword;
          let resData = {
            ...userInfoDB,
            token: `google ${token}`
          }
          // let allStick = await db.stick.findAll()

          if(created){//! 신규 가입자
            if(orders !== null){//비회원 상태로 장바구니 존재하는 경우
              let tmpOrders = {
                sticks: [],
                stands: []
              }
              //stick 주문 정보 저장
              for(let i = 0; i < orders.sticks.length; i++){
                await db.user_stick.create({
                  userId: userInfoDB.id,
                  stickId: orders.sticks[i].stickId,
                  stickQuantity: orders.sticks[i].stickQuantity
                });
              }
              //stand 주문 정보 저장
              for(let i = 0; i < orders.stands.length; i++){
                await db.stand.create({
                  userId: userInfoDB.id,
                  standQuantity: orders.stands[i].standQuantity,
                  standPrice: orders.stands[i].standPrice,
                  standImage: orders.stands[i].standImage,
                  standPlate: orders.stands[i].standPlate,
                  standHolder: orders.stands[i].standHolder,
                  standText: orders.stands[i].standText,
                });
              }

              await db.user.findAll({
                where: {
                  id: userInfoDB.id
                },
                include: [
                  {
                    model: db.user_stick,
                    include: [
                      {
                        model: db.stick
                      }
                    ]
                  }
                ]
              })
              .then(data => {
                for(let i = 0; i < data[0].dataValues.user_sticks.length; i++){
                  let tmp = {};
                  tmp.id = data[0].dataValues.user_sticks[i].dataValues.id;
                  tmp.stickId = data[0].dataValues.user_sticks[i].dataValues.stickId;
                  tmp.stickName = data[0].dataValues.user_sticks[i].dataValues.stick.dataValues.stickName;
                  tmp.stickPrice = data[0].dataValues.user_sticks[i].dataValues.stick.dataValues.stickPrice;
                  tmp.stickQuantity = data[0].dataValues.user_sticks[i].dataValues.stickQuantity;
                  tmp.stickImage = data[0].dataValues.user_sticks[i].dataValues.stick.dataValues.stickImage.toString(); //buffer to base64
                  tmp.createdAt = data[0].dataValues.user_sticks[i].dataValues.createdAt;
                  tmp.updatedAt = data[0].dataValues.user_sticks[i].dataValues.updatedAt;
                  tmpOrders.sticks.push(tmp);
                }
              })

              await db.user.findAll({
                where: {
                  id: userInfoDB.id
                },
                include: [
                  {
                    model: db.stand
                  }
                ]
              })
              .then(data => {
                for(let i = 0; i < data[0].dataValues.stands.length; i++){
                  let tmp = data[0].dataValues.stands[i].dataValues;
                  let base = tmp.standImage.toString();
                  tmp.standImage = base;
                  delete tmp.userId;
                  tmpOrders.stands.push(tmp);
                }
              })
              // orders 정보 담기
              resData.orders = tmpOrders;


            }else{//비회원 상태로 장바구니 없는 경우
              let tmpOrders = {
                sticks: [],
                stands: []
              }
              resData.orders = tmpOrders;

            }
          }else{//! 기존 가입자
            if(orders !== null){//비로그인 상태로 장바구니 담은 경우
              let tmpOrders = {
                sticks: [],
                stands: []
              }
              //기존 장바구니 정보 비우기
              await db.user_stick.destroy({
                where: {
                  userId: userInfoDB.id
                }
              })
              await db.stand.destroy({
                where: {
                  userId: userInfoDB.id
                }
              })

              //stick 주문 정보 저장
              for(let i = 0; i < orders.sticks.length; i++){
                await db.user_stick.create({
                  userId: userInfoDB.id,
                  stickId: orders.sticks[i].stickId,
                  stickQuantity: orders.sticks[i].stickQuantity
                });
              }
              //stand 주문 정보 저장
              for(let i = 0; i < orders.stands.length; i++){
                await db.stand.create({
                  userId: userInfoDB.id,
                  standQuantity: orders.stands[i].standQuantity,
                  standPrice: orders.stands[i].standPrice,
                  standImage: orders.stands[i].standImage,
                  standPlate: orders.stands[i].standPlate,
                  standHolder: orders.stands[i].standHolder,
                  standText: orders.stands[i].standText,
                });
              }

              await db.user.findAll({
                where: {
                  id: userInfoDB.id
                },
                include: [
                  {
                    model: db.user_stick,
                    include: [
                      {
                        model: db.stick
                      }
                    ]
                  }
                ]
              })
              .then(data => {
                for(let i = 0; i < data[0].dataValues.user_sticks.length; i++){
                  let tmp = {};
                  tmp.id = data[0].dataValues.user_sticks[i].dataValues.id;
                  tmp.stickId = data[0].dataValues.user_sticks[i].dataValues.stickId;
                  tmp.stickName = data[0].dataValues.user_sticks[i].dataValues.stick.dataValues.stickName;
                  tmp.stickPrice = data[0].dataValues.user_sticks[i].dataValues.stick.dataValues.stickPrice;
                  tmp.stickQuantity = data[0].dataValues.user_sticks[i].dataValues.stickQuantity;
                  tmp.stickImage = data[0].dataValues.user_sticks[i].dataValues.stick.dataValues.stickImage.toString();
                  tmp.createdAt = data[0].dataValues.user_sticks[i].dataValues.createdAt;
                  tmp.updatedAt = data[0].dataValues.user_sticks[i].dataValues.updatedAt;
                  tmpOrders.sticks.push(tmp);
                }
              })

              await db.user.findAll({
                where: {
                  id: userInfoDB.id
                },
                include: [
                  {
                    model: db.stand
                  }
                ]
              })
              .then(data => {
                for(let i = 0; i < data[0].dataValues.stands.length; i++){
                  let tmp = data[0].dataValues.stands[i].dataValues;
                  let base = tmp.standImage.toString();
                  tmp.standImage = base;
                  delete tmp.userId;
                  tmpOrders.stands.push(tmp);
                }
              })
              // orders 정보 담기
              resData.orders = tmpOrders;

            }else{//비로그인 상태로 장바구니 담지 않은 경우
              let tmpOrders = {
                sticks: [],
                stands: []
              }

              await db.user.findAll({
                where: {
                  id: userInfoDB.id
                },
                include: [
                  {
                    model: db.user_stick,
                    include: [
                      {
                        model: db.stick
                      }
                    ]
                  }
                ]
              })
              .then(data => {
                for(let i = 0; i < data[0].dataValues.user_sticks.length; i++){
                  let tmp = {};
                  tmp.id = data[0].dataValues.user_sticks[i].dataValues.id;
                  tmp.stickId = data[0].dataValues.user_sticks[i].dataValues.stickId;
                  tmp.stickName = data[0].dataValues.user_sticks[i].dataValues.stick.dataValues.stickName;
                  tmp.stickPrice = data[0].dataValues.user_sticks[i].dataValues.stick.dataValues.stickPrice;
                  tmp.stickQuantity = data[0].dataValues.user_sticks[i].dataValues.stickQuantity;
                  tmp.stickImage = data[0].dataValues.user_sticks[i].dataValues.stick.dataValues.stickImage.toString();
                  tmp.createdAt = data[0].dataValues.user_sticks[i].dataValues.createdAt;
                  tmp.updatedAt = data[0].dataValues.user_sticks[i].dataValues.updatedAt;
                  tmpOrders.sticks.push(tmp);
                }
              })

              await db.user.findAll({
                where: {
                  id: userInfoDB.id
                },
                include: [
                  {
                    model: db.stand
                  }
                ]
              })
              .then(data => {
                for(let i = 0; i < data[0].dataValues.stands.length; i++){
                  let tmp = data[0].dataValues.stands[i].dataValues;
                  let base = tmp.standImage.toString();
                  tmp.standImage = base;
                  delete tmp.userId;
                  tmpOrders.stands.push(tmp);
                }
              })
              // orders 정보 담기
              resData.orders = tmpOrders;
            }
          }
          //! resData 응답으로 주기
          res.status(200).json(resData);
        })
        .catch(e => {
          console.log(`async error ${e}`)
        })
      })
      .catch(e => {
        console.log(`유저 정보 받기 에러 ${e}`)
        // console.log(e)
        // res.send(e)
      })
    })
    .catch(e => {
      console.log(`유효하지 않은 코드 ${e}`)
      console.log(e)
      res.status(404).send('유효하지 않은 코드입니다')
    })
  }
}