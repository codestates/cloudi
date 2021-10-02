import { useState } from 'react';
import styled from 'styled-components';
import Delete from './Delete';

const MyinfoContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  justify-content: center;
  align-items: center;
  top: 0;
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  pointer-events: ${(props) => (props.visible ? 'initial' : 'none')};
  z-index: 9999;
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
  margin-top: 10px;
  display: flex;
  width: 64%;
  justify-content: space-between;
  @media screen and (max-width: 468px) {
    margin-top: 5px;
    width: 55%;
  }
`;

const InputTitle = styled.div`
  color: rgba(0, 0, 0, 0.5);
  font-size: 15px;
  margin-top: ${(props) => props.margin || 27}px;
  text-align: center;
`;

const MyinfoTitle = styled.div`
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

const MyinfoText = styled.div`
  font-size: 25px;
  color: rgba(255, 255, 255, 0.8);
`;

const MyinfoChangeBtn = styled.div`
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
  color: rgb(0, 0, 0);
  @media screen and (max-width: 468px) {
    width: 103px;
    font-size: 15px;
  }
`;

const ErrMessage = styled.div`
  width: 20rem;
  font-size: 15px;
  position: absolute;
  bottom: 8rem;
  color: red;
`;

const Myinfo = ({ myinfoModalVisible, setMyinfoModalVisible }) => {
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [userInfo] = useState({
    userName: 'Cloudi',
    userEmail: 'aaa00@naver.com'
  });
  const [newUserInfo, setNewUserInfo] = useState({
    currPassword: '',
    newPassword: '',
    newPasswordMatch: ''
  });

  const handleInputValue = (key) => (e) => {
    if (key === 'currPassword') {
      setNewUserInfo({ ...newUserInfo, [key]: e.target.value });
    } else if (
      key === 'newPasswordMatch' &&
      newUserInfo.newPassword !== e.target.value
    ) {
      setNewUserInfo({ ...newUserInfo, [key]: e.target.value });
      setErrorMessage('신규 비밀번호가 일치하지 않습니다');
    } else {
      setNewUserInfo({ ...newUserInfo, [key]: e.target.value });
      setErrorMessage('');
    }
  };
  const onClickHandler = (key) => () => {
    setMyinfoModalVisible(false);
    if (key === 'Change') {
      console.log('change');
    } else if (key === 'Delete') {
      setDeleteModalVisible(true);
    }
    setNewUserInfo({
      currPassword: '',
      newPassword: '',
      newPasswordMatch: ''
    });
    setErrorMessage('');
  };
  const closeModalHandler = () => {
    setMyinfoModalVisible(false);
    setNewUserInfo({
      currPassword: '',
      newPassword: '',
      newPasswordMatch: ''
    });
    setErrorMessage('');
  };
  return (
    <>
      <MyinfoContainer visible={myinfoModalVisible}>
        <MyinfoContent>
          <MyinfoTitle>
            <MyinfoText>MY INFO</MyinfoText>
          </MyinfoTitle>
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
            <ErrMessage>{errorMessage}</ErrMessage>
          </ProfileContainer>
          <MyinfoChangeBtn color='#b7c58b' onClick={onClickHandler('Change')}>
            Change
          </MyinfoChangeBtn>
          <MyinfoChangeBtn color='#a0a0a8' onClick={onClickHandler('Delete')}>
            Delete User
          </MyinfoChangeBtn>
        </MyinfoContent>
      </MyinfoContainer>
      <Delete
        visible={deleteModalVisible}
        setDeleteModalVisible={setDeleteModalVisible}
      />
    </>
  );
};

export default Myinfo;
