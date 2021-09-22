import React from 'react';
import styled from 'styled-components';
import OrderCount from '../components/order_components/OrderCount';
import OrderProduct from '../components/order_components/OrderProduct';

const OrderContainer = styled.main`
  padding-top: 95px;
  background-color: rgb(242, 242, 242);
  @media screen and (max-width: 1023px) {
    padding-top: 64px;
  };
`;

const Order = () => {
  return (
    <>
      <OrderContainer>
        <OrderCount />
        <OrderProduct />
      </OrderContainer>
    </>
  );
};

export default Order;
