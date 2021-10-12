require('dotenv').config();
const db = require("../../models");
const { sign } = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
  post: (req, res) => {
    const {orders, userEmail, userPassword} = req.body;

    const pattern = /[<>"'()=\s]/;
    if(pattern.test(userEmail) || pattern.test(userPassword)){
      return res.status(400).send('특수문자 < > ( ) " \' = 과 공백은 불가능합니다');
    }
    if(userPassword.length < 8 || userPassword.length > 15){
      return res.status(400).send('비밀번호는 8자 이상 15자 이하로 입력해 주세요');
    }

    //req userEmail로  db 정보와 비교
    db.user.findAll({
      where: {
        userEmail: userEmail,
        kakaoId: null,
        googleId: null
      }
    })
    .then(async (data) => {
      if(data.length === 0){//해당하는 이메일이 없는 경우
        res.status(404).send('이메일이 존재하지 않습니다');
      }else{//해당하는 이메일 있는 경우
        let userInfoDB = data[0].dataValues;//db 유저 정보
        const checkPW = bcrypt.compareSync(userPassword, userInfoDB.userPassword);
        if(!checkPW){// 비밀번호가 일치하지 않는 경우
          res.status(400).send('비밀번호가 일치하지 않습니다');
        }else{// 비밀번호가 일치하는 경우
          delete userInfoDB.userPassword;
          //! jwt generate
          const token = sign(userInfoDB, process.env.ACCESS_SECRET,{
            expiresIn: "6h"
          });
          let resData = {
            ...userInfoDB,
            token: `jwt ${token}`
          }

          if(!(orders.sticks.length === 0 && orders.stands.length === 0)){//비로그인 상태로 장바구니 담은 경우
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
          //! resData 응답으로 주기
          res.status(200).json(resData);
        }
      }
    })
    .catch(e => {
      console.log(`async error ${e}`);
    })
  }
}