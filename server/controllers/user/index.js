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
        return res.status(401).send('유효하지 않은 토큰입니다')
        }
      }
      // console.log(jwtData)
      db.user.destroy({
        where: {
          id: jwtData.id
        }
      })
      .then(data => {
        if(data === 1){//성공적으로 회원 삭제
          res.status(200).send('회원탈퇴가 완료되었습니다');
        }else{
          res.status(404).send('해당하는 회원이 없습니다');
        }
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
        .then(data1 => {
          let userInfoDB = data1[0].dataValues
          db.user.destroy({
            where: {
              id: userInfoDB.id
            }
          })
          .then(data2 => {
            if(data2 === 1){//성공적으로 회원 삭제
              res.status(200).send('회원탈퇴가 완료되었습니다');
            }else{
              res.status(404).send('해당하는 회원이 없습니다');
            }
          })        
        })
      })
      .catch(e => {
        console.log(`kakao token error ${e}`)
        return res.status(401).send('유효하지 않은 토큰입니다')
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
        .then(data1 => {
          let userInfoDB = data1[0].dataValues
          
          db.user.destroy({
            where: {
              id: userInfoDB.id
            }
          })
          .then(data2 => {
            if(data2 === 1){//성공적으로 회원 삭제
              res.status(200).send('회원탈퇴가 완료되었습니다');
            }else{
              res.status(404).send('해당하는 회원이 없습니다');
            }
          })
        })
      })
      .catch(e => {
        console.log(`google token error ${e}`)
        return res.status(401).send('유효하지 않은 토큰입니다')
      })
    }
  }
}