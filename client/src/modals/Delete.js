import styled from 'styled-components';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { userinfoSelector } from '../app/modules/hooks';
import { removeUserinfo } from '../app/modules/userinfo';

const DeleteContainer = styled.div`
  display: ${(props) => (props.isvisible ? 'flex' : 'none')};
  font-family: 'Roboto', sans-serif;
  justify-content: center;
  align-items: center;
  top: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.4);
  @media screen and (max-height: 550px) {
    height: 550px;
  }
`;

const DeleteBack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2), 0 6px 6px rgba(0, 0, 0, 0.25);
  border-radius: 0.8rem;
  width: 500px;
  height: 350px;
  @media screen and (max-width: 510px) {
    width: 350px;
  }
`;

const DeleteTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  width: 100%;
  height: 25%;
  background-color: rgba(0, 0, 0, 0.15);
  color: rgba(255, 255, 255, 0.8);
  border-top-left-radius: 0.8rem;
  border-top-right-radius: 0.8rem;
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

const DeleteText = styled.div`
  margin: 2.5rem;
  color: rgba(0, 0, 0, 0.8);
  font-size: 1.4rem;
  text-align: center;
  width: 100%;
  height: 20px;
`;

const InputBox = styled.input`
  flex: 60%;
  padding-left: 10px;
  margin: 1.9rem 0 0 0.5rem;
  height: 2.3rem;
`;

const DeleteBtn = styled.button`
  flex: 20%;
  margin: 2rem 0 0 3rem;
  height: 35px;
  color: white;
  background-color: rgba(150, 0, 0, 0.6);
  border: none;
  cursor: grab;
  :hover {
    background-color: rgba(120, 0, 0, 0.6);
  }
`;

const ErrMessage = styled.div`
  position: absolute;
  margin: 5rem 0 0 0.5rem;
  width: 20rem;
  font-size: 16px;
  color: red;
`;

const InputContainer = styled.div`
  display: flex;
  width: 75%;
  justify-content: space-between;
`;

const BorderBottom = styled.div`
  width: 73%;
  height: 10px;
  border-bottom: 2px solid black;
`;

const URL = 'http://localhost:8000';

const Delete = ({ visible, setVisible }) => {
  const [InputCheck, setInputCheck] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();
  const { userinfo } = useSelector(userinfoSelector);
  // console.log('딜리트에서 가져오는 유저인포 ->', userinfo);

  const handleInputValue = (e) => {
    setInputCheck(e.target.value);
    if (e.target.value === '') {
      setErrorMessage('');
    }
  };

  const handleCloseModal = () => {
    setVisible(false);
    setErrorMessage('');
    setInputCheck('');
  };

  const checkDeleteValue = () => {
    if (InputCheck === '회원탈퇴') {
      axios({
        method: 'DELETE',
        url: `${URL}/user`,
        headers: { Authorization: userinfo.token }
      })
        .then((res) => {
          console.log('딜리트 성공 -> ', res);
        })
        .catch((err) => {
          console.log('딜리트 실패 ->', err);
        });

      setVisible(false);
      setInputCheck('');
      setErrorMessage('');
      alert('회원탈퇴가 완료되었습니다');
      history.push('/');
      dispatch(removeUserinfo());
      // * 딜리트 리덕스 스테이트 변경
    } else {
      setErrorMessage('`회원탈퇴` 입력을 다시 확인해주세요');
    }
  };

  return (
    <DeleteContainer isvisible={visible}>
      <DeleteBack>
        <DeleteTitle>DELETE USER</DeleteTitle>
        <CloseBtn onClick={handleCloseModal}>&times;</CloseBtn>
        <DeleteText>
          회원 탈퇴를 원하시면 <p />
          아래에 '회원탈퇴'를 입력해 주세요
        </DeleteText>
        <BorderBottom />
        <InputContainer>
          <InputBox
            type='text'
            name='deleteInputBox'
            value={InputCheck}
            onChange={(e) => handleInputValue(e)}
            placeholder='회원탈퇴'
          />
          <ErrMessage>{errorMessage}</ErrMessage>
          <DeleteBtn onClick={checkDeleteValue}>회원탈퇴</DeleteBtn>
        </InputContainer>
      </DeleteBack>
    </DeleteContainer>
  );
};

export default Delete;
