import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { increaseStandQuantity, decreaseStandQuantity, removeStand } from '../../app/modules/stand';
import { increaseStickQuantity, decreaseStickQuantity, removeStick } from '../../app/modules/stick';
import { standsSelector, sticksSelector, userinfoSelector } from '../../app/modules/hooks';
import Construction from '../../modals/Construction';
import Login from '../../modals/Login';

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
  @media screen and (max-width: 1024px) {
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

const Input = styled.button`
  width: 12rem;
  padding: 12px;
  font-size: 20px;
  color: white;
  border: none;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.05), 0 6px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  background-color: #b7c58b;
  margin: 90px 0 40px 0;
  :hover {
    cursor: pointer;
    background-color: #97a371;
  };
  @media screen and (max-width: 1024px) {
    margin-top: 30px;
    width: 100%;
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
  @media screen and (max-width: 1024px) {
    flex: 1;
    text-align: left;
    margin-left: 20px;
  };
`;

const Price = styled.div`
  flex: 1;
  text-align: center;
  @media screen and (max-width: 1024px) {
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
  @media screen and (max-width: 1024px) {
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
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

const ProductContainer = styled.div`
  flex: 5;
  flex-direction: column;
`;

const ShippingFeeContainer = styled.div`
  flex: 1;
  text-align: center;
  display:table;
  @media screen and (max-width: 1024px) {
    margin-top: 0;
    margin-bottom: 25px;
  }
`;

const Fee = styled.section`
  display:table-cell;
  vertical-align:middle;
  border-top: 2px solid;
  @media screen and (max-width: 1024px) {
    display: block;
    border-top: none;
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
  @media screen and (max-width: 1024px) {
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
  @media screen and (max-width: 1024px) {
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
  @media screen and (max-width: 1024px) {
    line-height: 50px;
    text-align: left;
  }
`;

const ContainerTwo = styled.div`
  flex: 1.5;
  @media screen and (max-width: 1024px) {
    font-weight: bold;
  }
`;

const ContainerPicture = styled(ContainerTwo)`
  line-height: 200px;
  text-align: center;
`;

const StickImg = styled.img`
  height: 190px;
`;

const StandImg = styled.img`
  height: 180px;
  @media screen and (max-width: 1024px) {
    height: 160px;
  }
`;

const SingleDesc = styled.p`
  margin-top: 80px;
  @media screen and (max-width: 1024px) {
    margin-top: 0;
  }
`;

const Delete = styled.p`
  margin-top: 15px;
  display: inline-block;
  font-weight: bold;
  cursor: pointer;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const MobileDesc = styled.article`
  margin-top: 20px;
  display: none;
  font-weight: bold;
  @media screen and (max-width: 1024px) {
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
  @media screen and (max-width: 1024px) {
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
  const [loginModal, setLoginModal] = useState(false);

  const dispatch = useDispatch();
  const stick = useSelector(sticksSelector);
  const stand = useSelector(standsSelector);
  const { userinfo } = useSelector(userinfoSelector);

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

  const URL = 'https://www.cloudi.shop';

  const handleLoginModal = () => {
    setLoginModal(prevState => {
      return !prevState;
    });
  };

  const handleStickDelete = (stick) => {
    dispatch(removeStick(stick.id));
    axios({
      method: 'DELETE',
      url: `${URL}/order?stickOrderId=${stick.id}`
    }).catch(err => console.log(err));
  };

  const handleDecreaseStickQuantity = (stick) => {
    dispatch(decreaseStickQuantity(stick.id));
    axios({
      method: 'PUT',
      url: `${URL}/order`,
      data: {
        stickQuantity: stick.stickQuantity - 1,
        stickOrderId: stick.id
      }
    }).catch(err => console.log(err));
  };

  const handleIncreaseStickQuantity = (stick) => {
    dispatch(increaseStickQuantity(stick.id));
    axios({
      method: 'PUT',
      url: `${URL}/order`,
      data: {
        stickQuantity: stick.stickQuantity + 1,
        stickOrderId: stick.id
      }
    }).catch(err => console.log(err));
  };

  const handleStandDelete = (stand) => {
    dispatch(removeStand(stand.id));
    axios({
      method: 'DELETE',
      url: `${URL}/order?standOrderId=${stand.id}`
    }).catch(err => console.log(err));
  };

  const handleDecreaseStandQuantity = (stand) => {
    dispatch(decreaseStandQuantity(stand.id));
    axios({
      method: 'PUT',
      url: `${URL}/order`,
      data: {
        standQuantity: stand.standQuantity - 1,
        standOrderId: stand.id
      }
    }).catch(err => console.log(err));
  };

  const handleIncreaseStandQuantity = (stand) => {
    dispatch(increaseStandQuantity(stand.id));
    axios({
      method: 'PUT',
      url: `${URL}/order`,
      data: {
        standQuantity: stand.standQuantity + 1,
        standOrderId: stand.id
      }
    }).catch(err => console.log(err));
  };

  return (
    <>
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
                        <DeleteX src='/images/modalX.png' onClick={() => { handleStickDelete(stick); }} />
                      </MobileDesc>
                      <ContainerPicture>
                        <StickImg src={stick.stickImage} />
                      </ContainerPicture>
                      <ContainerTwo>
                        <SingleDesc>
                          INCENSE STICKS / {stick.stickName} / 12"
                        </SingleDesc>
                        <Delete onClick={() => { handleStickDelete(stick); }}>삭제하기</Delete>
                      </ContainerTwo>
                      <ContainerOne>
                        <QuantityButton onClick={() => { handleDecreaseStickQuantity(stick); }}>-</QuantityButton>
                        <QuantityContainer>{stick.stickQuantity}</QuantityContainer>
                        <QuantityButton onClick={() => { handleIncreaseStickQuantity(stick); }}>+</QuantityButton>
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
                        <DeleteX src='/images/modalX.png' onClick={() => { handleStandDelete(stand); }} />
                      </MobileDesc>
                      <ContainerPicture>
                        <StandImg src={stand.standImage} />
                      </ContainerPicture>
                      <ContainerTwo>
                        <SingleDesc>
                          {stand.standPlate} / {stand.standHolder} / {stand.standText}
                        </SingleDesc>
                        <Delete onClick={() => { handleStandDelete(stand); }}>삭제하기</Delete>
                      </ContainerTwo>
                      <ContainerOne>
                        <QuantityButton onClick={() => { handleDecreaseStandQuantity(stand); }}>-</QuantityButton>
                        <QuantityContainer>{stand.standQuantity}</QuantityContainer>
                        <QuantityButton onClick={() => { handleIncreaseStandQuantity(stand); }}>+</QuantityButton>
                      </ContainerOne>
                      <ContainerOne>
                        {money(stand.standPrice)} 원
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
              {userinfo.token === '' ? <Input onClick={handleLoginModal}>ORDER</Input> : <Input onClick={handleModal}>ORDER</Input>}
            </ButtonContainer>
        </>}
      </OrderProductContainer>
      {userinfo.token === '' ? <Login visible={loginModal} setVisible={setLoginModal} /> : <Construction modal={modal} handleModal={handleModal} />}
    </>
  );
};

export default OrderProduct;
