import React from 'react';
import styled from 'styled-components';

const OrderCountContainer = styled.section`
  width: 100%;
  height: 120px;
  margin-top: 20px;
  line-height: 120px;
  text-align: center;
  @media screen and (max-width: 1023px) {
  };
`;

const OrderNumber = styled.h2`
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 10px;
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
