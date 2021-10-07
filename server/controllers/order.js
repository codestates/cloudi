const db = require('../models');
const axios = require("axios");

module.exports = {
  put: (req, res) => {
    const {stickOrderId, standOrderId, stickQuantity, standQuantity} = req.body;
    if(!!stickOrderId && !!stickQuantity){//인센스 수량 변경
      db.user_stick.update({
        stickQuantity: stickQuantity
      },{
        where: {
          id: stickOrderId
        }
      })
      .then(data => {
        db.user_stick.findAll({
          where: {
            id: stickOrderId
          }
        })
        .then(data1 => {
          let resData = data1[0].dataValues;
          delete resData.userId;
          //! 응답 전송
          res.status(200).json(resData);
        })
      })
    }else if(!!standOrderId && !!standQuantity){//스탠드 수량 변경
      db.stand.update({
        standQuantity: standQuantity
      },{
        where: {
          id: standOrderId
        }
      })
      .then(data => {
        db.stand.findAll({
          where: {
            id: standOrderId
          }
        })
        .then(data1 => {
          let resData = data1[0].dataValues;
          delete resData.userId;
          delete resData.standPrice;
          delete resData.standImage;
          delete resData.standPlate;
          delete resData.standHolder;
          delete resData.standText;
          //! 응답 전송
          res.status(200).json(resData);
        })
      })
    }else{//잘못된 요청
      res.status(400).send('잘못된 요청입니다');
    }
  },
  delete: (req, res) => {
    const {stickOrderId, standOrderId} = req.query;
    // console.log(userId, stickOrderId, standOrderId);
    if(!!stickOrderId){//인센스 장바구니 삭제
      db.user_stick.destroy({
        where: {
          id: stickOrderId
        }
      })
      .then(data => {
        res.status(200).send('장바구니에서 삭제되었습니다');
      })
    }else if(!!standOrderId){//스탠드 장바구니 삭제
      db.stand.destroy({
        where: {
          id: standOrderId
        }
      })
      .then(data => {
        res.status(200).send('장바구니에서 삭제되었습니다');
      })
    }else{//잘못된 요청
      res.status(400).send('잘못된 요청입니다');
    }
  }
}