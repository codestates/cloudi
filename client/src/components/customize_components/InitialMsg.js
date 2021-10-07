import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import MainButton from './MainButton';

const StyledInitialMsg = styled.section`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -45%);

  background: rgba(255, 255, 255, 0.4);
  color: #141414;
  width: 600px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 60px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  h2 {
    font-weight: bold;
    font-size: 1.7rem;
    margin-top: 50px;
    margin-bottom: 20px;
  }
  div {
    margin: 2px;
  }
  img {
    width: 500px;
    height: 350px;
  }

  @media screen and (max-height: 800px) {
    width: auto;
    img {
      width: 350px;
      height: 240px;
    }
  };
`;

const InitialMsg = ({ selectedOps, curStage = 'main' }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <StyledInitialMsg>
          <img src='/images/incensestands.png' alt='incensestand' />
          <h2>나만의 인센스 스탠드 만들기</h2>
          <div>취향에 딱 맞는 인센스를 고르셨나요?</div>
          <div>나만의 특별한 스탠드도 제작해 보세요!</div>
        </StyledInitialMsg>
      </motion.div>
      <MainButton
        selectedOps={selectedOps}
        curStage={curStage}
      />
    </>
  );
};

export default InitialMsg;
