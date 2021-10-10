import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Delete from './Delete';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { userinfoSelector } from '../app/modules/hooks';

const MyinfoContainer = styled.div`
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  pointer-events: ${(props) => (props.visible ? 'initial' : 'none')};
  font-family: 'Roboto', sans-serif;
  z-index: 9999;
  position: fixed;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  top: 0;
  background-color: rgba(0, 0, 0, 0.4);
  animation: 0.2s ease-in-out myinfo;
  @keyframes myinfo {
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

const MyinfoContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 450px;
  height: 540px;
  padding-top: 70px;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2), 0 6px 6px rgba(0, 0, 0, 0.25);
  border-radius: 0.8rem;
  transition: all 0.2s ease;
  @media screen and (max-width: 468px) {
    width: 360px;
    height: 430px;
    padding-top: 30px;
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
  margin-top: 18px;
  width: 140px;
  height: 32px;
  @media screen and (max-width: 468px) {
    width: 100px;
    padding-left: 0px;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  margin-top: 10px;
  width: 275px;
  justify-content: space-between;
  @media screen and (max-width: 468px) {
    align-items: center;
    width: 220px;
  }
`;

const InputTitle = styled.div`
  margin-top: ${(props) => props.margin || 27}px;
  text-align: center;
  color: rgba(0, 0, 0, 0.5);
  font-size: 15px;
`;

const MyinfoTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 14%;
  background-color: rgba(0, 0, 0, 0.15);
  font-size: 25px;
  top: 0%;
  border-top-left-radius: 0.8rem;
  border-top-right-radius: 0.8rem;
  color: rgba(255, 255, 255, 0.8);
`;

const MyinfoBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: ${(props) => props.color};
  margin-top: 15px;
  top: 25px;
  width: 290px;
  height: 40px;
  color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
  @media screen and (max-width: 468px) {
    width: 180px;
    height: 30px;
    top: 0px;
  }
`;

const DescMessage = styled.div`
  position: absolute;
  font-size: 12px;
  bottom: 220px;
  right: 150px;
  color: #787878;
  @media screen and (max-width: 468px) {
    bottom: 155px;
    right: 70px;
  }
`;

const Test = styled.div`
  position: absolute;
  font-size: 17px;
  color: rgba(0, 0, 0, 0.9);
  bottom: 340px;
  right: 25px;
  @media screen and (max-width: 468px) {
    bottom: 280px;
    right: 0px;
  }
`;

const ProfileData = styled.div`
  width: 137px;
  margin-top: 27px;
  font-size: 17px;
  color: rgba(0, 0, 0, 0.9);
  @media screen and (max-width: 468px) {
    width: 103px;
    font-size: 15px;
  }
`;

const ErrMessage = styled.div`
  font-size: 15px;
  position: relative;
  left: 10px;
  top: 20px;
  text-align: center;
  color: ${(props) => (props.color ? '#4383d1' : '#ff0000')};
  @media screen and (max-width: 468px) {
    top: 10px;
    font-size: 11px;
  }
`;

const Myinfo = ({ visible, setVisible }) => {
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [emailSecond, setEmailSecond] = useState('');
  const [email, setEmail] = useState(null);
  const [clearColor, setClearColor] = useState(0);
  const { userinfo } = useSelector(userinfoSelector);
  const [newUserInfo, setNewUserInfo] = useState({
    currPassword: '',
    newPassword: '',
    newPasswordMatch: ''
  });
  useEffect(() => {
    const { newPassword } = newUserInfo;
    if (newPassword.length === 17) {
      setNewUserInfo({ ...newUserInfo, newPassword: newPassword.slice(0, -1) });
    } else if (newPassword.length === 16) {
      setErrorMessage('비밀번호는 8자 이상 15자 이하로 입력해 주세요');
    }
  }, [newUserInfo.newPassword]);

  useEffect(() => {
    const { userEmail } = userinfo;
    if (userEmail?.length > 25) {
      const newEmail = userEmail.slice(0, 23);
      const newEmailTwo = userEmail.slice(23, userEmail.length);
      setEmail(newEmail);
      setEmailSecond(newEmailTwo);
    } else {
      setEmailSecond('');
      setEmail(userEmail);
    }
  }, [userinfo.userEmail]);

  const MSG = '비밀번호는 8~15자로 입력해 주세요';
  const handleInputValue = (key) => (e) => {
    if (key === 'currPassword') {
      setNewUserInfo({ ...newUserInfo, [key]: e.target.value });
      setErrorMessage('');
    } else if (
      key === 'newPasswordMatch' &&
      newUserInfo.newPassword !== e.target.value
    ) {
      setNewUserInfo({ ...newUserInfo, [key]: e.target.value });
      setClearColor(0);
      setErrorMessage('신규 비밀번호가 일치하지 않습니다');
    } else {
      setNewUserInfo({ ...newUserInfo, [key]: e.target.value });
      setErrorMessage('');
    }
  };

  const onClickHandler = (key) => () => {
    if (key === 'Change') {
      if (
        !newUserInfo.currPassword ||
        !newUserInfo.newPassword ||
        !newUserInfo.newPasswordMatch
      ) {
        setErrorMessage('모든 항목을 기입해주세요');
      } else if (newUserInfo.newPassword.length < 8) {
        setErrorMessage('비밀번호는 8자 이상 15자 이하로 입력해 주세요');
      } else {
        const { currPassword, newPassword } = newUserInfo;
        axios({
          method: 'PUT',
          url: 'https://www.cloudi.shop/user',
          data: { userPassword: currPassword, newPassword },
          headers: {
            Authorization: userinfo.token
          }
        })
          .then(() => {
            setClearColor(1);
            setErrorMessage('비밀번호 변경이 완료되었습니다');
          })
          .catch((err) => {
            if (err.response.status === 400) {
              setClearColor(0);
              setErrorMessage(err.response.data);
              console.log(err);
            } else if (err.response.status === 401) {
              setClearColor(0);
              setErrorMessage('다시 로그인 해주세요');
              console.log(err);
            }
          });
      }
    } else if (key === 'Delete') {
      setVisible(false);
      setDeleteOpen(true);
      setNewUserInfo({
        currPassword: '',
        newPassword: '',
        newPasswordMatch: ''
      });
      setErrorMessage('');
    }
  };

  const closeModalHandler = () => {
    setVisible(false);
    setNewUserInfo({
      currPassword: '',
      newPassword: '',
      newPasswordMatch: ''
    });
    setErrorMessage('');
  };
  return (
    <>
      <MyinfoContainer visible={visible}>
        <MyinfoContent>
          <MyinfoTitle>MY INFO</MyinfoTitle>
          <CloseBtn onClick={closeModalHandler}>&times;</CloseBtn>
          <ProfileContainer>
            <InputTitle>User name</InputTitle>
            <ProfileData>{userinfo.userName}</ProfileData>
          </ProfileContainer>
          <ProfileContainer>
            <InputTitle>User email</InputTitle>
            <ProfileData>{email ? email : userinfo.userEmail}</ProfileData>
            <Test>{emailSecond}</Test>
          </ProfileContainer>
          <ProfileContainer>
            <InputTitle>Password</InputTitle>
            <InputBox
              className='input'
              type='password'
              maxLength={16}
              value={newUserInfo.currPassword}
              onChange={handleInputValue('currPassword')}
              placeholder='Password'
            />
          </ProfileContainer>
          <ProfileContainer>
            <InputTitle>New Password</InputTitle>
            <InputBox
              className='input'
              type='password'
              maxLength={16}
              value={newUserInfo.newPassword}
              onChange={handleInputValue('newPassword')}
              placeholder='New Password'
            />
            <DescMessage>{MSG}</DescMessage>
          </ProfileContainer>
          <ProfileContainer>
            <InputTitle margin={21}>
              Confirm
              <p />
              New Password
            </InputTitle>
            <InputBox
              className='input'
              type='password'
              maxLength={16}
              value={newUserInfo.newPasswordMatch}
              onChange={handleInputValue('newPasswordMatch')}
              placeholder='New Password'
            />
          </ProfileContainer>
          <ErrMessage color={clearColor}>{errorMessage}</ErrMessage>
          <MyinfoBtn color='#b7c58b' onClick={onClickHandler('Change')}>
            Change
          </MyinfoBtn>
          <MyinfoBtn color='#a0a0a8' onClick={onClickHandler('Delete')}>
            Delete User
          </MyinfoBtn>
        </MyinfoContent>
      </MyinfoContainer>
      <Delete visible={deleteOpen} setVisible={setDeleteOpen} />
    </>
  );
};

export default Myinfo;
