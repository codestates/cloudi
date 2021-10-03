const db = require("../models")
const qs = require('qs');
const axios = require("axios");

//! create user

// db.user.create({
//   id: 5,
//   userEmail: undefined,
//   userPassword: '1234',
//   userName: '상국'
// })
// .then(data => {
//   console.log(data)
// })

//! update user

// db.user.update({
//   googleId: '106477660792720416229'
// },{
//     where: {
//       id: 4
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
//     id: 5
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
//     code: '4FNKuJrn1y7BodzmIIwUVaoyIoOnmohJdHzRAKKhl-aNo5wSVF-wbG9WwefUGysLJZehugo9cxgAAAF8Pvt6zQ'
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