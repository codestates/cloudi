import { useState } from 'react';
import styled from 'styled-components';
import Myinfo from './Myinfo';
import Signup from './Signup';

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

const Login = ({ visible, setVisible }) => {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [myinfoModalVisible, setMyinfoModalVisible] = useState(false);
  const [signupModalVisible, setSignupModalVisible] = useState(false);

  const loginClickHandler = () => {
    setErrorMessage('아이디 또는 비밀번호가 잘못 입력 되었습니다');
    // 로그인버튼
  };

  const loginInfoHandler = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
    setErrorMessage('');
  };

  const myinfoHandler = () => {
    setVisible(false);
    setMyinfoModalVisible(true);
  };

  const signupHandler = () => {
    setVisible(false);
    setSignupModalVisible(true);
  };

  return (
    <>
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
          <SocialLoginBtn color='#f7e600' onClick={myinfoHandler}>
            <SocialImage src='/images/kakao.png' alt='소셜로그인 이미지' />
            카카오 로그인
          </SocialLoginBtn>
          <SocialLoginBtn color='#e6e6e6' onClick={signupHandler}>
            <SocialImage src='/images/google.png' alt='소셜로그인 이미지' />
            구글 로그인
          </SocialLoginBtn>
        </LoginContent>
      </LoginContainer>
      <Myinfo
        myinfoModalVisible={myinfoModalVisible}
        setMyinfoModalVisible={setMyinfoModalVisible}
      />
      <Signup
        signupModalVisible={signupModalVisible}
        setSignupModalVisible={setSignupModalVisible}
      />
    </>
  );
};

export default Login;
