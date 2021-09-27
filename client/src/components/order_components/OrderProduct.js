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
  margin-bottom: 50px;
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

const ShoppingBasket = styled.section`
  display: flex;
  @media screen and (max-width: 1023px) {
    flex-direction: column;
  }
`;

const ProductContainer = styled.div`
  flex: 5;
  flex-direction: column;
`;

const ShippingFeeContainer = styled.div`
  margin: 10px 0;
  flex: 1;
  text-align: center;
  display:table;
  @media screen and (max-width: 1023px) {
    margin-top: 0;
    margin-bottom: 25px;
  }
`;

const Fee = styled.div`
  display:table-cell;
  vertical-align:middle;
  @media screen and (max-width: 1023px) {
    display: block;
  }
`;

const ShippingFeeDesc = styled.p`
  margin-top: 10px;
  color: red;
`;

const ShippingContainer = styled.div`
  display: none;
  text-align: left;
  border-top: 2px solid;
  @media screen and (max-width: 1023px) {
    display: block;
  }
`;

const Shipping = styled.p`
  margin: 10px 0 0 20px;
  font-weight: bold;
`;

const SingleStick = styled.article`
  display: flex;
  width: 100%;
  height: 200px;
  border-top: 2px solid;
`;

const SingleStand = styled(SingleStick)`
`;

const ContainerOne = styled.div`
  flex: 1;
  background-color: blue;
`;

const ContainerTwo = styled.p`
  flex: 2;
  background-color: yellow;
`;

const props = {
  sticks: [
    {
      id: 2,
      stickName: '귤피',
      stickPrice: 2000,
      stickQuantity: 2,
      createdAt: '2019-04-28T19:01:07.660Z'
    }
  ],
  stands: [
    {
      id: 3,
      standPlate: 'ceramic',
      standHolder: 'pinoccio',
      standText: 'min guk lee',
      standPrice: 37000,
      standQuantity: 1,
      createdAt: '2019-04-28T19:01:07.660Z'
    }
  ]
};

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
      <ShoppingBasket>
        <ProductContainer>
          <SingleStick>
            <ContainerOne/>
            <ContainerTwo />
            <ContainerOne />
            <ContainerOne />
          </SingleStick>
          <SingleStand />
        </ProductContainer>
        <ShippingFeeContainer>
          <ShippingContainer>
            <Shipping>
              배송비
            </Shipping>
          </ShippingContainer>
          <Fee>
            3,000 원
            <ShippingFeeDesc>
              50,000원 이상 구매시 무료
            </ShippingFeeDesc>
          </Fee>
        </ShippingFeeContainer>
      </ShoppingBasket>
      <ProductCal>
        <CalDesc>상품 합계</CalDesc>
        <Price>57,000 원</Price>
      </ProductCal>
      <ShippingFeeCal>
        <FeeDesc>배송비</FeeDesc>
        <Price>0 원</Price>
      </ShippingFeeCal>
      <PriceSumContainer>
        <SumDesc>
          합 계
        </SumDesc>
        <Sum>
          57,000 원
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
