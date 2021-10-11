const db = require("../../models");
const bcrypt = require('bcrypt');

module.exports = {
  post: (req, res) => {
    const {userName, userEmail, userPassword} = req.body;

    const pattern = /[<>"'()=\s]/;
    if(pattern.test(userName) || pattern.test(userEmail) || pattern.test(userPassword)){
      return res.status(400).send('특수문자 < > ( ) " \' = 과 공백은 불가능합니다');
    }
    if(userPassword.length < 8 || userPassword.length > 15){
      return res.status(400).send('비밀번호는 8자 이상 15자 이하로 입력해 주세요');
    }

    db.user.findAll({
      where: {
        userEmail: userEmail
      }
    })
    .then(data => {
      if(data.length === 0){//중복 이메일 없을 경우
        const hashPassword = bcrypt.hashSync(userPassword, 10);
        db.user.create({
          userName: userName,
          userEmail: userEmail,
          userPassword: hashPassword
        })
        .then(data1 => {
          db.user.findAll({
            where: {
              id: data1.id
            }
          })
          .then(data2 => {
            let userInfoDB = data2[0].dataValues;
            delete userInfoDB.userPassword;
            res.status(200).json(userInfoDB);
          })
        })
      }else{//이미 가입한 이메일
        res.status(400).send('이미 존재하는 이메일입니다')
      }
    })
  }
}