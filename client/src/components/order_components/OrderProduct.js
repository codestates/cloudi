import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { increaseStandQuantity, decreaseStandQuantity, removeStand } from '../../app/modules/stand';
import { increaseStickQuantity, decreaseStickQuantity, removeStick } from '../../app/modules/stick';
import { standsSelector, sticksSelector } from '../../app/modules/hooks';
import Construction from '../../modals/Construction';

import EmptyProduct from './EmtpyProduct';

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
  @media screen and (max-width: 1023px) {
    width: 100%;
  }
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
  padding-right: 14px;
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
  border-top: 1px solid;
  @media screen and (max-width: 1023px) {
    flex-direction: column;
    height: auto;
  }
`;

const SingleStand = styled(SingleStick)`
`;

const ContainerOne = styled.div`
  flex: 1;
  line-height: 200px;
  text-align: center;
  @media screen and (max-width: 1023px) {
    line-height: 50px;
    text-align: left;
  }
`;

const ContainerTwo = styled.div`
  flex: 1.5;
  @media screen and (max-width: 1023px) {
    font-weight: bold;
  }
`;

const ContainerPicture = styled(ContainerTwo)`
  line-height: 200px;
  text-align: center;
`;

const StickImg = styled.img`
  height: 150px;
  vertical-align: middle;
`;

const StandImg = styled.img`
  height: 180px;
  @media screen and (max-width: 1023px) {
    height: 160px;
  }
`;

const SingleDesc = styled.p`
  margin-top: 80px;
`;

const Delete = styled.p`
  margin-top: 15px;
  display: inline-block;
  font-weight: bold;
  cursor: pointer;
  @media screen and (max-width: 1023px) {
    display: none;
  }
`;

const MobileDesc = styled.article`
  margin-top: 20px;
  display: none;
  font-weight: bold;
  @media screen and (max-width: 1023px) {
    display: block;
  }
`;

const MyProduct = styled.span`
  display: inline-block;
`;

const DeleteX = styled.img`
  height: 16px;
  float: right;
  cursor: pointer;
`;

const QuantityContainer = styled.button`
  height: 30px;
  width: 30px;
  border: 1px solid;
  background-color: white;
  display: inline-block;
  @media screen and (max-width: 1023px) {
    margin-top: 20px;
  }
`;

const QuantityButton = styled(QuantityContainer)`
  cursor: pointer;
  :hover {
    background-color: rgb(0, 0, 0, 0.1);
  }
`;

const OrderProduct = () => {
  const [modal, setModal] = useState(0);
  const stand = useSelector(standsSelector);
  const stick = useSelector(sticksSelector);
  const dispatch = useDispatch();

  const totalStandPrice = stand.stands.reduce((acc, cur) => acc + cur.standPrice * cur.standQuantity, 0);
  const totalStickPrice = stick.sticks.reduce((acc, cur) => acc + cur.stickPrice * cur.stickQuantity, 0);
  const totalPrice = totalStandPrice + totalStickPrice;

  const money = (int) => int.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

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
      {totalPrice === 0
        ? <EmptyProduct />
        : <>
          <ProductExplanation>
            <ProductInfo>&emsp;&emsp;상품 정보</ProductInfo>
            <ProductDesc>수량</ProductDesc>
            <ProductDesc>가격</ProductDesc>
            <ProductDesc>배송금액</ProductDesc>
          </ProductExplanation>
          <ShoppingBasket>
            <ProductContainer>
              {stick.sticks.map((stick, idx) => {
                return (
                  <SingleStick key={stick.id}>
                    <MobileDesc>
                      <MyProduct>My Incense</MyProduct>
                      <DeleteX src='/images/modalX.png' onClick={() => { dispatch(removeStick(stick.id)); }} />
                    </MobileDesc>
                    <ContainerPicture>
                      <StickImg src={stick.stickImage} />
                    </ContainerPicture>
                    <ContainerTwo>
                      <SingleDesc>
                        INCENSE STICKS / {stick.stickName} / 12"
                      </SingleDesc>
                      <Delete onClick={() => { dispatch(removeStick(stick.id)); }}>삭제하기</Delete>
                    </ContainerTwo>
                    <ContainerOne>
                      <QuantityButton onClick={() => { dispatch(decreaseStickQuantity(stick.id)); }}>-</QuantityButton>
                      <QuantityContainer>{stick.stickQuantity}</QuantityContainer>
                      <QuantityButton onClick={() => { dispatch(increaseStickQuantity(stick.id)); }}>+</QuantityButton>
                    </ContainerOne>
                    <ContainerOne>
                      {money(stick.stickPrice)}원
                    </ContainerOne>
                  </SingleStick>
                );
              })}
              {stand.stands.map((stand, idx) => {
                return (
                  <SingleStand key={stand.id}>
                    <MobileDesc>
                      <MyProduct>My Holder</MyProduct>
                      <DeleteX src='/images/modalX.png' onClick={() => { dispatch(removeStand(stand.id)); }} />
                    </MobileDesc>
                    <ContainerPicture>
                      <StandImg src={stand.standImage} />
                    </ContainerPicture>
                    <ContainerTwo>
                      <SingleDesc>
                        {stand.standPlate} / {stand.standHolder} / {stand.standText}
                      </SingleDesc>
                      <Delete onClick={() => { dispatch(removeStand(stand.id)); }}>삭제하기</Delete>
                    </ContainerTwo>
                    <ContainerOne>
                      <QuantityButton onClick={() => { dispatch(decreaseStandQuantity(stand.id)); }}>-</QuantityButton>
                      <QuantityContainer>{stand.standQuantity}</QuantityContainer>
                      <QuantityButton onClick={() => { dispatch(increaseStandQuantity(stand.id)); }}>+</QuantityButton>
                    </ContainerOne>
                    <ContainerOne>
                      {money(stand.standPrice)}원
                    </ContainerOne>
                  </SingleStand>
                );
              })}
            </ProductContainer>
            <ShippingFeeContainer>
              <ShippingContainer>
                <Shipping>
                  배송금액
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
            <Price>{money(totalPrice)} 원</Price>
          </ProductCal>
          <ShippingFeeCal>
            <FeeDesc>배송비</FeeDesc>
            <Price>{money(totalPrice >= 50000 ? 0 : 3000)} 원</Price>
          </ShippingFeeCal>
          <PriceSumContainer>
            <SumDesc>
              합 계
            </SumDesc>
            <Sum>{money(totalPrice >= 50000 ? totalPrice : totalPrice + 3000)} 원</Sum>
          </PriceSumContainer>
          <ButtonContainer>
            <Button onClick={handleModal}>ORDER</Button>
          </ButtonContainer>
          <Construction modal={modal} handleModal={handleModal} />
        </>/*eslint-disable-line*/}
    </OrderProductContainer>
  );
};

export default OrderProduct;
