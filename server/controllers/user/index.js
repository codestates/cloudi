require('dotenv').config();
const db = require('../../models');
const axios = require("axios");
const { verify } = require('jsonwebtoken');

const secret = process.env.ACCESS_SECRET;

module.exports = {
  put: (req, res) => {
    const token = req.headers.authorization;
    if(token.split(' ')[0] !== 'jwt'){//jwt가 아닌 경우
      return res.status(400).send('소셜로그인 회원은 이용할 수 없습니다');
    }
    let jwt = token.split(' ')[1];
    let jwtData;
    try {
      jwtData = verify(jwt, secret);
    } catch (err) {
      if(err){
      return res.status(401).send('유효하지 않은 토큰입니다')
      }
    }
    db.user.findAll({
      where: {
        id: jwtData.id
      }
    })
    .then(data => {
      let userInfo = data[0].dataValues;
      if(userInfo.userPassword !== req.body.userPassword){//비밀번호 불일치
        res.status(400).send('기존 비밀번호가 일치하지 않습니다');
      }else{//비밀번호 일치
        db.user.update({
          userPassword: req.body.newPassword
        },{
          where: {
            id: userInfo.id
          }
        })
        .then(data1 => {
          let resData = userInfo;
          delete resData.userPassword;
          res.status(200).json(resData);
        })
      }
    })
  },
  delete: (req, res) => {

  }
}