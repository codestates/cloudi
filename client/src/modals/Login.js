import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';
import { insertUserinfo } from '../app/modules/userinfo';
import { standsSelector, sticksSelector } from '../app/modules/hooks';

const LoginContainer = styled.div`
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  pointer-events: ${(props) => (props.visible ? 'initial' : 'none')};
  font-family: 'Roboto', sans-serif;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  justify-content: center;
  align-items: center;
  top: 0;
  z-index: 9999;
  animation: 0.2s ease-in-out login;
  @keyframes login {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media screen and (max-height: 700px) {
    height: 700px;
  }
`;

const LoginContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 28rem;
  height: 400px;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2), 0 6px 6px rgba(0, 0, 0, 0.25);
  border-radius: 0.8rem;
  @media screen and (max-width: 468px) {
    width: 400px;
  }
`;

const CloseModal = styled.div`
  font-size: 30px;
  color: rgba(0, 0, 0, 0.7);
  position: absolute;
  border-radius: 15px;
  top: 5px;
  right: 15px;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;

const InputBox = styled.input`
  margin-top: 18px;
  width: 200px;
  height: 32px;
  @media screen and (max-width: 468px) {
    width: 160px;
  }
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 280px;
`;

const InputTitle = styled.div`
  color: rgba(0, 0, 0, 0.5);
  font-size: 15px;
  margin-top: 27px;
`;

const LoginTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: rgba(0, 0, 0, 0.15);
  color: rgba(255, 255, 255, 0.8);
  font-size: 25px;
  width: 100%;
  height: 16%;
  border-top-left-radius: 0.8rem;
  border-top-right-radius: 0.8rem;
`;

const LoginBtn = styled.button`
  font-size: 15px;
  margin-top: 30px;
  background-color: #b7c58b;
  border: none;
  width: 290px;
  height: 40px;
  cursor: pointer;
  :hover {
    opacity: 0.9;
  }
`;

const BorderBottom = styled.div`
  display: flex;
  flex-basis: 100%;
  align-items: center;
  color: rgba(0, 0, 0, 0.35);
  font-size: 12px;
  position: absolute;
  top: 248px;
  width: 320px;
  ::before,
  ::after {
    content: '';
    flex-grow: 1;
    background: rgba(0, 0, 0, 0.35);
    height: 1px;
    font-size: 0px;
    line-height: 0px;
    margin: 0px 16px;
  }
  @media screen and (max-width: 310px) {
    top: 255px;
  }
`;

const SocialLoginBtn = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color};
  position: relative;
  margin-top: 15px;
  top: 25px;
  width: 290px;
  height: 40px;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

const SocialImage = styled.img`
  position: absolute;
  left: 20px;
  width: 15px;
  height: 18px;
`;

const ErrMessage = styled.div`
  position: absolute;
  font-size: 15px;
  top: 175px;
  color: red;
`;

const URL = 'http://localhost:8000';

const Login = ({ visible, setVisible }) => {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const stick = useSelector(sticksSelector);
  const stand = useSelector(standsSelector);
  // const { userinfo } = useSelector(userinfoSelector);

  // console.log('인센스 ->', stick);
  // console.log('홀더 ->', stand.stands);
  // console.log('리덕스 유저인포(loginModal) ->', userinfo);
  const orders = { ...stick, ...stand };
  // console.log('orders 데이터  ->', orders);

  const loginClickHandler = () => {
    // 로그인버튼
    const { email, password } = loginInfo;
    axios({
      method: 'POST',
      url: `${URL}/user/login`,
      data: { orders, userEmail: email, userPassword: password }
    })
      .then((res) => {
        console.log('일반로그인성공 -->', res.data);
        // ? res.data.orders -> 객체 // 키 stands, sticks
        dispatch(
          insertUserinfo({
            id: res.data.id,
            kakaoId: res.data.kakaoId,
            googleId: res.data.googldId,
            isAdmin: res.data.isAdmin,
            userEmail: res.data.userEmail,
            userName: res.data.userName,
            token: res.data.token
          })
        );
        setVisible(false);
        // ! 장바구니에 넣기
      })
      .catch((err) => {
        setErrorMessage('아이디 또는 비밀번호가 잘못 입력 되었습니다');
        console.log('에러', err);
      });

    // 장바구니 받으면 dispatch로 보내야함
    // sticks -> sticks / / stand -> stand
  };

  const loginInfoHandler = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
    setErrorMessage('');
  };

  const kakaoLoginHandler = () => {
    window.location.assign(
      'https://kauth.kakao.com/oauth/authorize?client_id=6bea04e98d9b7654b9f9c4090d3350cd&redirect_uri=http://localhost:3000&response_type=code'
    );
  };

  const googleLoginHandler = () => {
    const CLIENT_ID =
      '489580139925-kej0e09kiqes22usrhcivb5f5krrhlte.apps.googleusercontent.com';
    const REDIRECT_URI = 'http://localhost:3000';
    const SCOPE =
      'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email';
    window.location.assign(
      `https://accounts.google.com/o/oauth2/v2/auth?scope=${SCOPE}&response_type=code&redirect_uri=${REDIRECT_URI}&client_id=${CLIENT_ID}`
    );
  };

  return (
    <LoginContainer visible={visible}>
      <LoginContent>
        <LoginTitle>LOG IN</LoginTitle>
        <CloseModal onClick={() => setVisible(false)}>&times;</CloseModal>
        <InputContainer>
          <InputTitle>User email</InputTitle>
          <InputBox
            className='input'
            type='email'
            value={loginInfo.email}
            onChange={loginInfoHandler('email')}
            placeholder='Email'
          />
        </InputContainer>
        <InputContainer>
          <InputTitle>Password</InputTitle>
          <InputBox
            className='input'
            type='password'
            value={loginInfo.password}
            placeholder='Password'
            onChange={loginInfoHandler('password')}
          />
        </InputContainer>
        <ErrMessage>{errorMessage}</ErrMessage>
        <LoginBtn onClick={loginClickHandler}>로그인</LoginBtn>
        <BorderBottom>또는</BorderBottom>
        <SocialLoginBtn color='#f7e600' onClick={kakaoLoginHandler}>
          <SocialImage src='/images/kakao.png' alt='소셜로그인 이미지' />
          카카오 로그인
        </SocialLoginBtn>
        <SocialLoginBtn color='#e6e6e6' onClick={googleLoginHandler}>
          <SocialImage src='/images/google.png' alt='소셜로그인 이미지' />
          구글 로그인
        </SocialLoginBtn>
      </LoginContent>
    </LoginContainer>
  );
};

export default Login;
