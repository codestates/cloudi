import React from 'react';
import styled from 'styled-components';
import MainButton from './MainButton';

const StyledInitialMsg = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #F2F2F2;
  border: none;
  padding-top: 0px;
  padding-bottom: 30px;
  margin: 40px;
  h2 {
    font-size: 1.7rem;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  div {
    margin: 2px;
  }
  width: 50vmax;
`;

const InitialMsg = () => {
  return (
    <>
      <StyledInitialMsg>
        <img src='/images/incensestands.png' alt='incensestand' width='370' height='250' />
        <h2>나만의 인센스 스탠드 만들기</h2>
        <div>취향에 딱 맞는 인센스를 고르셨나요?</div>
        <div>나만의 특별한 스탠드도 제작해 보세요!</div>
      </StyledInitialMsg>
      <MainButton curStage='' />
    </>
  );
};

export default InitialMsg;
