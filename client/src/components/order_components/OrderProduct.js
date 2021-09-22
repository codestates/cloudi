import React from 'react';
import styled from 'styled-components';

const OrderProductContainer = styled.section`
  padding: 0 2.5vw;
`;

const ProductExplanation = styled.article`
  display: flex;
  margin-top: 80px;
  width: 100%;
  height: 50px;
  line-height: 50px;
  border-bottom: 2px solid;
`;

const ProductInfo = styled.div`
  flex: 3;
  padding-left: 20px;
  font-weight: bold;
`;

const ProductDesc = styled.div`
  flex: 1;
  font-weight: bold;
  text-align: center;
`;

const ButtonContainer = styled.div`
  text-align: center;
`;

const Button = styled.button`
  margin-top: 30px;
  font-size: 20px;
  padding: 10px 30px;
  color: white;
  background-color: rgb(105, 149, 94);
  :hover {
    cursor: pointer;
    color: white;
    box-shadow: 1px 1px 1px black;
  };
  :active {
    box-shadow: inset 5px 5px 5px rgb(70, 110, 75);
  };
`;

const OrderProduct = () => {
  return (
    <OrderProductContainer>
      <ProductExplanation>
        <ProductInfo>상품 정보</ProductInfo>
        <ProductDesc>수량</ProductDesc>
        <ProductDesc>가격</ProductDesc>
        <ProductDesc>배송비</ProductDesc>
      </ProductExplanation>
      <ButtonContainer>
        <Button>ORDER</Button>
      </ButtonContainer>
    </OrderProductContainer>
  );
};

export default OrderProduct;
