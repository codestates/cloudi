import { useState } from 'react';
import styled from 'styled-components';
import Delete from './Delete';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { standsSelector, sticksSelector, userinfoSelector } from '../app/modules/hooks';


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
  height: 530px;
  padding-top: 70px;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2), 0 6px 6px rgba(0, 0, 0, 0.25);
  border-radius: 0.8rem;
  transition: all 0.2s ease;
  @media screen and (max-width: 468px) {
    width: 360px;
    height: 410px;
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
  width: 13rem;
  font-size: 15px;
  position: absolute;
  bottom: 140px;
  left: 130px;
  text-align: center;
  color: ${(props) => (props.color ? '#1c1a1a' : '#ff0000')};
`;

const URL = 'http://localhost:8000';

const Myinfo = ({ visible, setVisible }) => {
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [clearColor, setClearColor] = useState(0);
  const dispatch = useDispatch();
  const stick = useSelector(sticksSelector);
  const stand = useSelector(standsSelector);
  const { userinfo } = useSelector(userinfoSelector);

  const [userInfo] = useState({
    userName: 'Cloudi',
    userEmail: 'abcabcabcabc@naver.com'
  });
  const [newUserInfo, setNewUserInfo] = useState({
    currPassword: '',
    newPassword: '',
    newPasswordMatch: ''
  });

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
      } else {
        const { currPassword, newPassword } = newUserInfo;
        axios({
          method: 'PUT',
          url: URL + '/user',
          data: { userPassword: currPassword, newPassword },
          headers: {
            Authorization: userinfo.token
          }
        })
          .then((res) => {
            setClearColor(1);
            setErrorMessage('비밀번호 변경이 완료되었습니다');
          })
          .catch((err) => {
            if (err.response.status === 400) {
              // 비번다름
              setClearColor(0);
              setErrorMessage(err.response.data);
              // * 소셜로그인
              // * 비번 다름
            } else if (err.response.status === 401) {
              // 토큰 유효 x
              setClearColor(0);
              setErrorMessage('다시 로그인 해주세요');
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
            <ProfileData>{userInfo.userName}</ProfileData>
          </ProfileContainer>
          <ProfileContainer>
            <InputTitle>User email</InputTitle>
            <ProfileData>{userInfo.userEmail}</ProfileData>
          </ProfileContainer>
          <ProfileContainer>
            <InputTitle>Password</InputTitle>
            <InputBox
              className='input'
              type='password'
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
              value={newUserInfo.newPassword}
              onChange={handleInputValue('newPassword')}
              placeholder='New Password'
            />
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
              value={newUserInfo.newPasswordMatch}
              onChange={handleInputValue('newPasswordMatch')}
              placeholder='New Password'
            />
            <ErrMessage color={clearColor}>{errorMessage}</ErrMessage>
          </ProfileContainer>
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
