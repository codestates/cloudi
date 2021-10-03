require('dotenv').config();
const db = require('../models');
const axios = require("axios");
const { verify } = require('jsonwebtoken');

const secret = process.env.ACCESS_SECRET;

module.exports = {
  get: (req, res) => {
    const token = req.headers.authorization;
    // console.log(token)
    let jwt;
    let kakao;
    let google;
    if(token.split(' ')[0] === 'jwt'){
      jwt = token.split(' ')[1];
    }else if(token.split(' ')[0] === 'kakao'){
      kakao = token.split(' ')[1];
    }else{
      google = token.split(' ')[1];
    }

    if(!!jwt){//jwt 토큰인 경우
      // console.log(jwt)
      let jwtData;
      try {
        jwtData = verify(jwt, secret);
      } catch (err) {
        if(err){
        return res.status(400).send('유효하지 않은 토큰입니다')
        }
      }
      // console.log(jwtData)
      db.user.findAll({
        where: {
          id: jwtData.id
        }
      })
      .then(async (data) => {
        let userInfoDB = data[0].dataValues
        delete userInfoDB.userPassword;
        let resData = {
          ...userInfoDB,
        }
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
        resData.orders = tmpOrders;
        //! 응답 전송
        res.status(200).json(resData);
      })
    }else if(!!kakao){//kakao 토큰인 경우
      axios({
        method: 'get',
        url: 'https://kapi.kakao.com/v2/user/me',
        headers: {
          'authorization': `Bearer ${kakao}`,
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        }
      })
      .then(data => {
        let userInfo = data.data;

        db.user.findAll({
          where: {
            kakaoId: userInfo.id
          }
        })
        .then(async (data1) => {
          let userInfoDB = data1[0].dataValues
          delete userInfoDB.userPassword;
          let resData = {
            ...userInfoDB,
          }
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
          resData.orders = tmpOrders;
          //! 응답 전송
          res.status(200).json(resData);
        })
      })
      .catch(e => {
        console.log(`kakao token error ${e}`)
        return res.status(400).send('유효하지 않은 토큰입니다')
      })
    }else{//google 토큰인 경우
      axios({
        method: 'get',
        url: `https://www.googleapis.com/oauth2/v2/userinfo`,
        headers: {
          'authorization': `Bearer ${google}`,
        }
      })
      .then(data => {
        let userInfo = data.data;
        // console.log(userInfo)

        db.user.findAll({
          where: {
            googleId: userInfo.id
          }
        })
        .then(async (data1) => {
          let userInfoDB = data1[0].dataValues
          delete userInfoDB.userPassword;
          let resData = {
            ...userInfoDB,
          }
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
          resData.orders = tmpOrders;
          //! 응답 전송
          res.status(200).json(resData);
        })
      })
      .catch(e => {
        console.log(`google token error ${e}`)
        return res.status(400).send('유효하지 않은 토큰입니다')
      })
    }
  }
}