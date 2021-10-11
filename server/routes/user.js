const userController = require('../controllers/user/index');
const googleController = require('../controllers/user/google');
const kakaoController = require('../controllers/user/kakao');
const loginController = require('../controllers/user/login');
const signupController = require('../controllers/user/signup');

const express = require('express');
const router = express.Router();

// 수정 put /user
router.put('/', userController.put);

// 탈퇴 delete /user
router.delete('/', userController.delete);

// google 로그인 & 가입 post /user/google
router.post('/google', googleController.post);

// kakao 로그인 & 가입 post /user/kakao
router.post('/kakao', kakaoController.post);

// 로그인 post /user/login
router.post('/login', loginController.post);

// 회원가입 post /user/signup
router.post('/signup', signupController.post);

module.exports = router;