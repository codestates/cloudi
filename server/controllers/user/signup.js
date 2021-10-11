const db = require("../../models");

module.exports = {
  post: (req, res) => {
    db.user.findAll({
      where: {
        userEmail: req.body.userEmail
      }
    })
    .then(data => {
      if(data.length === 0){//중복 이메일 없을 경우
        db.user.create(req.body)
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