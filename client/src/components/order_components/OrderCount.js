import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { sticksSelector, standsSelector } from '../../app/modules/hooks';

const OrderCountContainer = styled.section`
  width: 100%;
  margin-top: 20px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  @media screen and (max-width: 1024px) {
    text-align: center;
    height: 100px;
    line-height: 100px;
  };
`;

const OrderNumber = styled.h2`
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 10px;
  @media screen and (max-width: 1024px) {
    margin: 0 auto;
    width: 90%;
    font-size: 25px;
    letter-spacing: 7px;
    border-bottom: ${props => props.totalLength
      ? '2px solid'
: 'none'
    };
  }
`;

const OrderCount = () => {
  const stick = useSelector(sticksSelector);
  const stand = useSelector(standsSelector);

  const totalStand = stand.stands.length;
  const totalStick = stick.sticks.length;
  const totalLength = totalStick + totalStand;

  return (
    <OrderCountContainer>
      <OrderNumber totalLength={totalLength}>
        ORDER{totalLength !== 0 ? '(' + totalLength + ')' : null}
      </OrderNumber>
    </OrderCountContainer>
  );
};

export default OrderCount;
