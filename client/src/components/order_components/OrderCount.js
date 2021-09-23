import React from 'react';
import styled from 'styled-components';

const OrderCountContainer = styled.section`
  width: 100%;
  margin-top: 20px;
  height: 120px;
  line-height: 120px;
  text-align: center;
  @media screen and (max-width: 1023px) {
    text-align: center;
    height: 100px;
    line-height: 100px;
  };
`;

const OrderNumber = styled.h2`
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 10px;
  @media screen and (max-width: 1023px) {
    margin: 0 auto;
    width: 95%;
    font-size: 25px;
    letter-spacing: 7px;
    border-bottom: 2px solid;
  }
`;

const OrderCount = () => {
  return (
    <OrderCountContainer>
      <OrderNumber>
        ORDER (2)
      </OrderNumber>
    </OrderCountContainer>
  );
};

export default OrderCount;
