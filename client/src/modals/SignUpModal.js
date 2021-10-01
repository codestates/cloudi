import { useState } from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div`
  display: ${(props) => (props.visible ? 'flex' : 'none')};
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

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 28rem;
  height: 25rem;
  padding-top: 70px;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2), 0 6px 6px rgba(0, 0, 0, 0.25);
  border-radius: 0.8rem;
  transition: all 0.2s ease;
  @media screen and (max-width: 460px) {
    width: 400px;
  }
`;

const CloseModal = styled.div`
  font-size: 30px;
  color: rgba(0, 0, 0, 0.7);
  margin: 9px 0 0 400px;
  position: absolute;
  border-radius: 50%;
  top: 0;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
  @media screen and (max-width: 460px) {
    margin-left: 350px;
  }
`;

const InputBox = styled.input`
  padding-left: 10px;
  margin-top: 18px;
  width: 140px;
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
  height: 14%;
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
`;

const ErrMessage = styled.div`
  width: 20rem;
  font-size: 15px;
  position: absolute;
  bottom: 7rem;
  color: red;
`;

const SignUpModal = ({ signupModalVisible, setSignupModalVisible }) => {
  const [UserInfo, setUserInfo] = useState({
    user_name: '',
    user_email: '',
    password: '',
    confirmPassword: ''
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputValue = (key) => (e) => {
    if (key === 'user_name') {
      setUserInfo({ ...UserInfo, [key]: e.target.value });
    } else if (
      key === 'confirmPassword' &&
      UserInfo.password !== e.target.value
    ) {
      setUserInfo({ ...UserInfo, [key]: e.target.value });
      setErrorMessage('입력한 비밀번호와 일치하지 않습니다');
    } else {
      setUserInfo({ ...UserInfo, [key]: e.target.value });
      setErrorMessage('');
    }
  };
  const onClickHandler = () => {
    setSignupModalVisible(false);
  };

  const closeModalHandler = () => {
    setSignupModalVisible(false);
    setUserInfo({
      user_name: '',
      user_email: '',
      password: '',
      confirmPassword: ''
    });
    setErrorMessage('');
  };

  return (
    <ModalContainer visible={signupModalVisible}>
      <ModalContent>
        <SignupTitle>
          <SignupText>SIGN UP</SignupText>
        </SignupTitle>
        <CloseModal onClick={closeModalHandler}>&times;</CloseModal>
        <InputContainer>
          <InputTitle>User name</InputTitle>
          <InputBox
            type='text'
            value={UserInfo.user_name}
            onChange={handleInputValue('user_name')}
            placeholder='User name'
          />
        </InputContainer>
        <InputContainer>
          <InputTitle>User email</InputTitle>
          <InputBox
            type='email'
            value={UserInfo.user_email}
            onChange={handleInputValue('user_email')}
            placeholder='User email'
          />
        </InputContainer>
        <InputContainer>
          <InputTitle>Password</InputTitle>
          <InputBox
            type='password'
            value={UserInfo.password}
            onChange={handleInputValue('password')}
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
            value={UserInfo.confirmPassword}
            onChange={handleInputValue('confirmPassword')}
            placeholder='confirmPassword'
          />
          <ErrMessage>{errorMessage}</ErrMessage>
        </InputContainer>
        <SignupBtn type='submit' onClick={onClickHandler}>
          SUBMIT
        </SignupBtn>
      </ModalContent>
    </ModalContainer>
  );
};

export default SignUpModal;
