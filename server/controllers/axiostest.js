const db = require("../models")
const qs = require('qs');
const axios = require("axios");

//! create user

// db.user.create({
//   id: 5,
//   userEmail: 'skshim',
//   userPassword: '1234',
//   userName: '상국'
// })
// .then(data => {
//   console.log(data)
// })

//! update user

// db.user.update({
//   userName: '상국2'
// },{
//     where: {
//       id: 5
//     }
// })
// .then(data => {
//   console.log(data)
// })

//! find all users

// db.user.findAll().then(data => {
//   console.log(data[0].dataValues)
// })

//! join M : N find query

// db.user.findAll({
//   where: {
//     id: 1
//   },
//   include: [
//     {
//       model: db.user_stick,
//       include: [
//         {
//           model: db.stick,
//         }
//       ]
//     }
//   ]
// })
// .then(data => {
//   console.log(data[0].dataValues.user_sticks[0].dataValues.stick.dataValues)
// })

//! join 1:M

// db.user.findAll({
//   where: {
//     id: 1
//   },
//   include: [
//     {
//       model: db.stand
//     }
//   ]
// })
// .then(data => {
//   console.log(data[0].dataValues.stands[0].dataValues)
// })

//! delete user

// db.user.destroy({
//   where: {
//     id: 7
//   }
// })
// .then(data => {
//   console.log(data)
// })

//! kakao test
// axios({
//   method: 'post',
//   url: 'http://localhost:5000/user/kakao',
//   data: {
//     orders: null,
//     code: 'sqtsDUMwdztwyUtPQJzuKBFnENMQpcJlA9_SzUthPke-S4IVXjcSb1d0Ud3_REr7zkjPcAopyNkAAAF8PQcOvA'
//   }
// })
// .then(data => {
//   console.log(data.data)
// })

//! user update
// db.user.update({
//   kakaoId: 1932264960
// },{
//   where: {
//     id: 4
//   }
// })
// .then(data => {
//   console.log(data)
// })