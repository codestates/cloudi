const db = require('../models');
const axios = require("axios");

module.exports = {
  get: (req, res) => {
    db.stick.findAll()
    .then(data => {
      let resData = [];
      for(let i = 0; i < data.length; i++){
        let tmp = data[i].dataValues;
        tmp.stickImage = data[i].dataValues.stickImage.toString();
        resData.push(tmp);
      }
      res.status(200).json(resData);
    })
  },
  post: (req, res) => {
    const {userId, stickId} = req.body;
    // console.log(userId, stickId);
    db.user_stick.create({
      userId: userId,
      stickId: stickId
    })
    .then(data => {
      // console.log(data.dataValues)
      let resData = data.dataValues;
      delete resData.userId;
      resData.stickQuantity = 1;
      db.stick.findAll({
        where: {
          id: data.dataValues.stickId
        }
      })
      .then(data1 => {
        const stickData = data1[0].dataValues;
        resData.stickName = stickData.stickName;
        resData.stickDesc = stickData.stickDesc;
        resData.stickPrice = stickData.stickPrice;
        resData.stickImage = stickData.stickImage.toString();
        //! 응답 전송
        res.status(200).json(resData);
      })
    })
  }
}