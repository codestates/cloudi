import React, { useState } from 'react';
import styled from 'styled-components';
import Construction from '../../modals/Construction';

const OrderProductContainer = styled.section`
  padding: 0 5vw;
`;

const ProductExplanation = styled.article`
  display: flex;
  margin-top: 80px;
  width: 100%;
  height: 50px;
  line-height: 50px;
  border-bottom: 2px solid;
  @media screen and (max-width: 1023px) {
    display: none;
  };
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
  margin-top: 90px;
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

const ProductCal = styled.article`
  display: flex;
  width: 100%;
  height: 80px;
  line-height: 80px;
  border-top: 2px solid;
`;

const CalDesc = styled.div`
  flex: 5;
  text-align: right;
  font-weight: bold;
  @media screen and (max-width: 1023px) {
    flex: 1;
    text-align: left;
    margin-left: 20px;
  };
`;

const Price = styled.div`
  flex: 1;
  text-align: center;
  @media screen and (max-width: 1023px) {
    text-align: right;
    margin-right: 20px;
  };
`;

const ShippingFeeCal = styled(ProductCal)`
  margin-left: auto;
  width: 50%;
  margin-top: 0;
  border-top: none;
  border-bottom: 2px solid;
  @media screen and (max-width: 1023px) {
    width: 100%;
  };
`;

const FeeDesc = styled(CalDesc)`
  flex: 2;
  padding-right: 12px;
`;

const PriceSumContainer = styled(ProductCal)`
  border-top: none;
`;

const SumDesc = styled(CalDesc)`
  font-family: 'Roboto', sans-serif;
  font-size: 17px;
  padding-right: 14px;
`;

const Sum = styled(Price)`
  font-size: 17px;
  font-weight: bold;
`;

const OrderProduct = () => {
  const [modal, setModal] = useState(0);

  const handleModal = () => {
    setModal(prevState => {
      if (prevState === 1) {
        return 0;
      } else {
        return 1;
      }
    });
  };

  return (
    <OrderProductContainer>
      <ProductExplanation>
        <ProductInfo>상품 정보</ProductInfo>
        <ProductDesc>수량</ProductDesc>
        <ProductDesc>가격</ProductDesc>
        <ProductDesc>배송비</ProductDesc>
      </ProductExplanation>
      장바구니에 상품이 없습니다.
      <ProductCal>
        <CalDesc>상품 합계</CalDesc>
        <Price>57,000원</Price>
      </ProductCal>
      <ShippingFeeCal>
        <FeeDesc>배송비</FeeDesc>
        <Price>0원</Price>
      </ShippingFeeCal>
      <PriceSumContainer>
        <SumDesc>
          합 계
        </SumDesc>
        <Sum>
          57,000원
        </Sum>
      </PriceSumContainer>
      <ButtonContainer>
        <Button onClick={handleModal}>ORDER</Button>
      </ButtonContainer>
      <Construction modal={modal} handleModal={handleModal} />
    </OrderProductContainer>
  );
};

export default OrderProduct;
