import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const SignupContainer = styled.div`
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  pointer-events: ${(props) => (props.visible ? 'initial' : 'none')};
  z-index: 999;
  font-family: 'Roboto', sans-serif;
  height: 100%;
  width: 100%;
  top: 0;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  justify-content: center;
  align-items: center;
  animation: 0.2s ease-in-out signup;
  @keyframes signup {
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

const SignupContent = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 450px;
  height: 440px;
  padding-top: 70px;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2), 0 6px 6px rgba(0, 0, 0, 0.25);
  border-radius: 0.8rem;
  transition: all 0.2s ease;
  @media screen and (max-width: 468px) {
    width: 400px;
  }
`;

const CloseBtn = styled.div`
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
  padding-left: 10px;
  margin-top: 15px;
  width: 150px;
  height: 32px;
`;

const InputContainer = styled.div`
  margin-top: 10px;
  display: flex;
  width: 64%;
  justify-content: space-between;
`;

const InputTitle = styled.div`
  color: rgba(0, 0, 0, 0.5);
  font-size: 15px;
  margin-top: ${(props) => props.margin || 27}px;
  text-align: center;
`;

const SignupTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
  background-color: rgba(0, 0, 0, 0.15);
  color: rgba(255, 255, 255, 0.8);
  font-size: 25px;
  position: absolute;
  top: 0%;
  border-top-left-radius: 0.8rem;
  border-top-right-radius: 0.8rem;
`;

const DescMessage = styled.div`
  position: absolute;
  font-size: 12px;
  color: #787878;
  bottom: 180px;
  right: 80px;
`;

const SignupBtn = styled.div`
  font-size: 18px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #b7c58b;
  position: relative;
  margin-top: 15px;
  top: 25px;
  width: 290px;
  height: 40px;
  cursor: pointer;
  :hover {
    opacity: 0.9;
  }
  @media screen and (max-width: 468px) {
    width: 240px;
  }
`;

const ErrMessage = styled.div`
  font-size: 15px;
  position: absolute;
  left: ${(props) => props.left}px;
  bottom: ${(props) => props.bottom || 110}px;
  color: red;
  @media screen and (max-width: 468px) {
    left: ${(props) => props.left - 40}px;
  }
`;

const USER_INFO = {
  userName: '',
  userEmail: '',
  userPassword: '',
  confirmPassword: ''
};

const Signup = ({ visible, setVisible, setClearOpen }) => {
  const [userInfo, setUserInfo] = useState(USER_INFO);
  const [errorMessage, setErrorMessage] = useState('');
  const [nameMessage, setNameMessage] = useState('');

  useEffect(() => {
    const { userName, userPassword } = userInfo;
    if (userName.length === 9) {
      setUserInfo({ ...userInfo, userName: userName.slice(0, -1) });
    } else if (userName.length === 8) {
      setNameMessage('???????????? ?????? 7????????????');
    } else if (userPassword.length === 16) {
      setErrorMessage('??????????????? 8??? ?????? 15??? ????????? ????????? ?????????');
    } else {
      setNameMessage('');
    }
  }, [userInfo.userName, userInfo.userPassword]);

  const handleInputValue = (key) => (e) => {
    setUserInfo({ ...userInfo, [key]: e.target.value });
    setErrorMessage('');
  };

  const submitHandler = () => {
    // ???????????? ?????? ?????? ??????
    const pattern = /[<>"'()=\s]/;
    const { userName, userEmail, userPassword, confirmPassword } = userInfo;

    if (!userEmail || !userName || !userPassword || !confirmPassword) {
      setErrorMessage('?????? ????????? ??????????????????');
    } else if (
      pattern.test(userEmail) ||
      pattern.test(userName) ||
      pattern.test(userPassword) ||
      pattern.test(confirmPassword)
    ) {
      setErrorMessage('???????????? < > ( ) " \' = ??? ????????? ??????????????????');
    } else if (userPassword !== confirmPassword) {
      setErrorMessage('????????? ??????????????? ???????????? ????????????');
    } else if (
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/.test(
        userEmail
      ) === false
    ) {
      setErrorMessage('????????? ????????? ??????????????????');
    } else if (userPassword.length < 8) {
      setErrorMessage('??????????????? 8??? ?????? 15??? ????????? ????????? ?????????');
    } else if (userName.length > 7) {
      setNameMessage('???????????? ?????? 7????????????');
    } else if (userEmail.length > 45) {
      setErrorMessage('???????????? 45??? ????????? ????????? ?????????');
    } else {
      axios({
        method: 'POST',
        url: 'https://www.cloudi.shop/user/signup',
        data: { userName, userEmail, userPassword }
      })
        .then(() => {
          setVisible(false);
          setClearOpen(true);
          setUserInfo(USER_INFO);
        })
        .catch((err) => {
          if (err.response.data) {
            setErrorMessage(err.response.data);
          } else {
            console.log(err);
          }
        });
    }
  };

  const closeModalHandler = () => {
    setVisible(false);
    setUserInfo(USER_INFO);
    setErrorMessage('');
  };

  return (
    <SignupContainer visible={visible}>
      <SignupContent>
        <SignupTitle>SIGN UP</SignupTitle>
        <CloseBtn onClick={closeModalHandler}>&times;</CloseBtn>
        <InputContainer>
          <InputTitle>User name</InputTitle>
          <InputBox
            type='text'
            value={userInfo.userName}
            maxLength={8}
            onChange={handleInputValue('userName')}
            placeholder='User name'
          />
        </InputContainer>
        <ErrMessage left='220' bottom='295'>
          {nameMessage}
        </ErrMessage>
        <InputContainer>
          <InputTitle>User email</InputTitle>
          <InputBox
            type='email'
            value={userInfo.userEmail}
            maxLength={46}
            onChange={handleInputValue('userEmail')}
            placeholder='User email'
          />
        </InputContainer>
        <InputContainer>
          <InputTitle>Password</InputTitle>
          <InputBox
            type='password'
            value={userInfo.userPassword}
            maxLength={16}
            onChange={handleInputValue('userPassword')}
            placeholder='Password'
          />
        </InputContainer>
        <DescMessage>??????????????? 8~15?????? ????????? ?????????</DescMessage>
        <InputContainer>
          <InputTitle margin={21}>
            Confirm
            <p /> Password
          </InputTitle>
          <InputBox
            type='password'
            value={userInfo.confirmPassword}
            maxLength={16}
            onChange={handleInputValue('confirmPassword')}
            placeholder='Confirm Password'
          />
        </InputContainer>
        <ErrMessage>{errorMessage}</ErrMessage>
        <SignupBtn type='submit' onClick={submitHandler}>
          SUBMIT
        </SignupBtn>
      </SignupContent>
    </SignupContainer>
  );
};

export default Signup;
