import styled from 'styled-components';
import { useState } from 'react';

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
  border-top-left-radius: 0.8rem;
  border-top-right-radius: 0.8rem;
  color: rgba(255, 255, 255, 0.9);
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

const Delete = ({ visible, setDeleteModalVisible }) => {
  const [InputCheck, setInputCheck] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputValue = (e) => {
    setInputCheck(e.target.value);
    if (e.target.value === '') {
      setErrorMessage('');
    }
  };

  const handleCloseModal = () => {
    setDeleteModalVisible(false);
    setErrorMessage('');
    setInputCheck('');
  };

  const checkDeleteValue = () => {
    if (InputCheck === '회원탈퇴') {
      setDeleteModalVisible(false);
      setInputCheck('');
      setErrorMessage('');
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
