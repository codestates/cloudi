import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const CartContainer = styled.div`
  display: ${props => props.visible ? 'flex' : 'none'};
  font-family: 'Roboto', sans-serif;
  justify-content: center;
  align-items: center;
  top: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.4);
  animation: 0.8s ease-in-out loginCart;
  @keyframes loginCart {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media screen and (max-height: 768px) {
    height: 750px;
  }
`;

const CartContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2), 0 6px 6px rgba(0, 0, 0, 0.25);
  border-radius: 0.8rem;
  width: 350px;
  height: 280px;
  @media screen and (max-width: 510px) {
    width: 350px;
  }
`;

const CartText = styled.div`
  font-size: ${props => props.size || 20} px;
  height: 40px;
  margin-top: 20px;
`;

const CartBtn = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.7);
  text-decoration: none;
  margin-top: 10px;
  width: 130px;
  height: 40px;
  cursor: pointer;
  transition: background 0.15s ease-in-out;
  :hover {
    background-color: rgba(0, 0, 0, 0.9);
  }
`;

const CloseBtn = styled.div`
  font-size: 35px;
  color: rgba(0, 0, 0, 0.7);
  position: absolute;
  border-radius: 15px;
  top: 5px;
  right: 15px;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;

const CloudiImg = styled.div`
  background-image: url(${props => props.img ? '/images/cartImgWarr.png' : '/images/cartImg.png'});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 100%;
  height: 60px;
`;

const Cart = ({ visible, setVisible, inCartItem }) => {
  return (
    <CartContainer visible={visible} onClick={() => setVisible(false)}>
      <CartContent>
        <CloseBtn onClick={() => setVisible(false)}>&times;</CloseBtn>
        <CloudiImg img={inCartItem} />
        <CartText size='30'>
          {inCartItem
            ? '장바구니에 이미 존재하는 상품입니다'
            : '장바구니에 상품이 담겼습니다'}
        </CartText>
        <CartBtn to='/order'>장바구니 보기</CartBtn>
      </CartContent>
    </CartContainer>
  );
};

export default Cart;
