import React from 'react';
import styled from 'styled-components';
import MainButton from './MainButton';

const StyledInitialMsg = styled.section`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -45%);
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 60px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  h2 {
    font-size: 1.7rem;
    margin-top: 50px;
    margin-bottom: 20px;
  }
  div {
    margin: 2px;
  }
  width: 600px;
`;

const InitialMsg = ({ selectedOps, curStage = 'main' }) => {
  return (
    <>
      <StyledInitialMsg>
        <img src='/images/incensestands.png' alt='incensestand' width='500' height='350' />
        <h2>나만의 인센스 스탠드 만들기</h2>
        <div>취향에 딱 맞는 인센스를 고르셨나요?</div>
        <div>나만의 특별한 스탠드도 제작해 보세요!</div>
      </StyledInitialMsg>
      <MainButton
        selectedOps={selectedOps}
        curStage={curStage}
      />
    </>
  );
};

export default InitialMsg;
