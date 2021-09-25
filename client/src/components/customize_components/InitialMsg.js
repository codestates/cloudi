import React from 'react';
import styled from 'styled-components';

const StyledInitialMsg = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba();
  h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
  border: 2px blue solid;
  width: 50%;
  height: 50%;
  @media screen and (max-width: 1023px) {

  }
`;

const InitialMsg = () => {
  return (
    <StyledInitialMsg>
      <h2>나만의 인센스 스탠드 만들기</h2>
      <div>취향에 딱 맞는 인센스를 고르셨나요?</div>
      <div>나만의 특별한 스탠드도 제작해 보세요!</div>
    </StyledInitialMsg>
  );
};

export default InitialMsg;
