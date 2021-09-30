import { useState } from 'react';
import styled from 'styled-components';
import MyinfoModal from './MyinfoModal';
import SignupModal from './SignUpModal';
import google from '../components/image/google.png';
import kakao from '../components/image/kakao.png';

const ModalContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  display: ${(props) => (props.visible ? 'auto' : 'none')};
  pointer-events: ${(props) => (props.visible ? 'initial' : 'none')};
  z-index: 9999;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 28rem;
  height: 22rem;
  padding-top: 70px;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2), 0 6px 6px rgba(0, 0, 0, 0.25);
  border-radius: 0.8rem;
`;

const CloseModal = styled.div`
  font-size: 30px;
  color: rgba(0, 0, 0, 0.7);
  margin: 9px 0 0 25rem;
  position: absolute;
  border-radius: 50%;
  top: 0;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;

const InputBox = styled.input`
  margin-top: 18px;
  width: 200px;
  height: 32px;
`;

const InputContainer = styled.div`
  display: flex;
  width: 64%;
  justify-content: space-between;
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
  width: 100%;
  height: 16%;
  background-color: rgba(0, 0, 0, 0.15);
  position: absolute;
  top: 0%;
  border-top-left-radius: 0.8rem;
  border-top-right-radius: 0.8rem;
  color: rgba(255, 255, 255, 0.9);
`;

const LoginText = styled.div`
  font-size: 25px;
  color: rgba(255, 255, 255, 0.8);
`;

const LoginBtn = styled.button`
  margin-top: 20px;
  background-color: #b7c58b;
  text-decoration: none;
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
  margin-top: 40%;
  width: 69.5%;
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
`;

const SocialLoginBtn = styled.div`
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

const LoginModal = ({ visible, setVisible }) => {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
  });
  const [myinfoModalVisible, setMyinfoModalVisible] = useState(false);
  const [signupModalVisible, setSignupModalVisible] = useState(false);
  const handleLogin = () => {};
  const loginInfoHandler = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
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
      <ModalContainer visible={visible}>
        <ModalContent>
          <LoginTitle>
            <LoginText>LOG IN</LoginText>
          </LoginTitle>
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
          <LoginBtn onClick={handleLogin}>로그인</LoginBtn>
          <BorderBottom> 또는</BorderBottom>
          <SocialLoginBtn color='#f7e600' onClick={myinfoHandler}>
            <SocialImage src={kakao} alt='소셜로그인 이미지' />
            카카오 로그인
          </SocialLoginBtn>
          <SocialLoginBtn color='#e6e6e6' onClick={signupHandler}>
            <SocialImage src={google} alt='소셜로그인 이미지' />
            구글 로그인
          </SocialLoginBtn>
        </ModalContent>
      </ModalContainer>
      <MyinfoModal
        myinfoModalVisible={myinfoModalVisible}
        setMyinfoModalVisible={setMyinfoModalVisible}
      />
      <SignupModal
        signupModalVisible={signupModalVisible}
        setSignupModalVisible={setSignupModalVisible}
      />
    </>
  );
};

export default LoginModal;
