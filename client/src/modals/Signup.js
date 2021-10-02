import { useState, useEffect } from 'react';
import styled from 'styled-components';

const SignupContainer = styled.div`
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  font-family: 'Roboto', sans-serif;
  height: 100%;
  width: 100%;
  top: 0;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  justify-content: center;
  align-items: center;
  pointer-events: ${(props) => (props.visible ? 'initial' : 'none')};
  z-index: 999;
  @media screen and (max-height: 700px) {
    height: 700px;
  }
`;

const SignupContent = styled.div`
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
  position: absolute;
  top: 0%;
  border-top-left-radius: 0.8rem;
  border-top-right-radius: 0.8rem;
  color: rgba(255, 255, 255, 0.9);
`;

const SignupText = styled.div`
  font-size: 25px;
  color: rgba(255, 255, 255, 0.8);
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
    opacity: 0.8;
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
`;

const Signup = ({ visible, setVisible }) => {
  const [userInfo, setUserInfo] = useState({
    userName: '',
    userEmail: '',
    userPassword: '',
    confirmPassword: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [nameMessage, setNameMessage] = useState('');

  useEffect(() => {
    if (userInfo.userName.length === 9) {
      setUserInfo({ ...userInfo, userName: userInfo.userName.slice(0, -1) });
    } else if (userInfo.userName.length === 8) {
      setNameMessage('글자수는 최대 7자입니다');
    } else {
      setNameMessage('');
    }
  }, [userInfo.userName]);

  const handleInputValue = (key) => (e) => {
    setUserInfo({ ...userInfo, [key]: e.target.value });
  };
  const submitHandler = () => {
    if (
      !userInfo.userEmail ||
      !userInfo.userName ||
      !userInfo.userPassword ||
      !userInfo.confirmPassword
    ) {
      setErrorMessage('모든 항목을 기입해주세요');
      return;
    } else if (userInfo.userPassword !== userInfo.confirmPassword) {
      setErrorMessage('입력한 비밀번호와 일치하지 않습니다');
      return;
    }
    setVisible(false);
    setErrorMessage('');
  };

  const closeModalHandler = () => {
    setVisible(false);
    setUserInfo({
      userName: '',
      userEmail: '',
      userPassword: '',
      confirmPassword: ''
    });
    setErrorMessage('');
    setUserInfo({
      userName: '',
      userEmail: '',
      userPassword: '',
      confirmPassword: ''
    });
  };

  return (
    <SignupContainer visible={visible}>
      <SignupContent>
        <SignupTitle>
          <SignupText>SIGN UP</SignupText>
          <CloseBtn onClick={closeModalHandler}>&times;</CloseBtn>
        </SignupTitle>
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
            onChange={handleInputValue('userEmail')}
            placeholder='User email'
          />
        </InputContainer>
        <InputContainer>
          <InputTitle>Password</InputTitle>
          <InputBox
            type='password'
            value={userInfo.userPassword}
            onChange={handleInputValue('userPassword')}
            placeholder='Password'
          />
        </InputContainer>
        <InputContainer>
          <InputTitle margin={21}>
            Confirm
            <p /> Password
          </InputTitle>
          <InputBox
            type='password'
            value={userInfo.confirmPassword}
            onChange={handleInputValue('confirmPassword')}
            placeholder='confirmPassword'
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
