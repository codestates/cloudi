require('dotenv').config();
const db = require("../models")
const qs = require('qs');
const axios = require("axios");
const { sign, verify } = require('jsonwebtoken');
const bcrypt = require('bcrypt');

//! create user

// db.user.create({
//   userName: '상국',
//   userEmail: 'skshim2002@gmail.com'
// })
// .then(data => {
//   console.log(data)
// })

//! update user

// db.user.update({
//   googleId: '106477660792720416229'
// },{
//     where: {
//       id: 10
//     }
// })
// .then(data => {
//   console.log(data)
// })

//! find all users

// db.user.findAll({
//   where: {
//     userEmail: 'skshim2002@gmail.com',
//     googleId: null,
//     kakaoId: null
//   }
// })
// .then(data => {
//   console.log(data.length)
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
//     id: 6
//   }
// })
// .then(data => {
//   console.log(data, typeof data)
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

//! jwt sign

// let data = {
//   "id": 9,
//   "kakaoId": null,
//   "googleId": null,
//   "isAdmin": false,
//   "userEmail": "won-bin@gmail.com",
//   "userName": "원빈",
//   "createdAt": "2021-10-02T15:16:51.000Z",
//   "updatedAt": "2021-10-02T15:16:51.000Z"
// }
// const token = sign(data, '0712',{
//   expiresIn: "2h"
// });
// console.log(token)

//! jwt verify

// let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwia2FrYW9JZCI6bnVsbCwiZ29vZ2xlSWQiOm51bGwsImlzQWRtaW4iOmZhbHNlLCJ1c2VyRW1haWwiOiJ3b24tYmluQGdtYWlsLmNvbSIsInVzZXJOYW1lIjoi7JuQ67mIIiwiY3JlYXRlZEF0IjoiMjAyMS0xMC0wMlQxNToxNjo1MS4wMDBaIiwidXBkYXRlZEF0IjoiMjAyMS0xMC0wMlQxNToxNjo1MS4wMDBaIiwiaWF0IjoxNjMzMjI4NjUzLCJleHAiOjE2MzMyMzU4NTN9.gYD2-qzi51deNgOD-AzagJQdxuQkRTwNUxGFXl7KFf4'
// try {
//   let info = verify(token, '1111');
//   console.log(info)
// } catch (err){
//   // console.log(err)
//   if(err){
//     console.log('ddd')
//   }
// }

//! bcrypt
// let a;
// console.log(a);
// bcrypt.hash('1234', 10, (err, hash) => {
//   // console.log(hash);
//   a = hash;
// })
// console.log(a)

// bcrypt.compare('12345', '$2b$10$bhgMcax/7f2IJunJEtaPceXKikougbYj1P4qHknaCUEtajveGH92u', (err, result) => {
//   if(err){
//     console.log(err);
//   }else{
//     console.log(result);
//   }
// });

// let a;
// console.log(a);
// a = bcrypt.hashSync('12341234', 10) // sync
// console.log(typeof a,a)

// const same = bcrypt.compareSync('1234', '$2b$10$dAewVoibVXihdcyRjQI5meTjf8YK6HQ.8Fu.CCQSq74rUnMT5YwSm') // sync
// console.log(same)