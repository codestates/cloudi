import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import IncenseSlider from '../components/incense_components/IncenseSlider';
import { useSelector, useDispatch } from 'react-redux';
import { insertStick } from '../app/modules/stick';
import { sticksSelector } from '../app/modules/hooks';
import Cart from '../modals/Cart';
import axios from 'axios';

const IncenseWrapper = styled.div`
  font-family: 'Roboto', sans-serif;
  background-image: url('/images/room.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: 0.8s ease-in-out IncensePage;
  @keyframes IncensePage {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media screen and (max-height: 500px) {
    height: 500px;
  }
`;

const Cloud = styled.div`
  overflow: hidden;
  width: 8000px;
  height: 100%;
  background-image: url('/images/cloud3.png');
  background-size: 6000px;
  position: fixed;
  right: 20px;
  top: 0;
  bottom: 0;
  z-index: 1;
  animation: incense 300s linear infinite;
  @keyframes incense {
    from {
      -webkit-transform: translate3d(0px, 0px, 0px);
    }
    to {
      -webkit-transform: translate3d(6000px, 0px, 0px);
    }
  }
`;

const IncenseContainer = styled.div`
  height: 260px;
  z-index: 3;
`;

const IncenseContent = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  width: 600px;
  height: 385px;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    width: 400px;
  }
`;

const SliderBox = styled.div`
  display: flex;
  width: 100%;
`;

const SliderBtnLeft = styled.div`
  width: 50px;
  height: 50px;
  background-image: url('/images/arrow_left.png');
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  right: 70px;
  top: -220px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    right: 5px;
    top: -220px;
  }
`;

const SliderBtnRight = styled.div`
  width: 50px;
  height: 50px;
  background-image: url('/images/arrow_right.png');
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  left: 612px;
  top: -270px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    left: 355px;
  }
`;

const CartBtn = styled.div`
  background-color: ${(props) => (props.count === 1 ? '#b7c58b' : 'white')};
  padding: 20px;
  opacity: 0.6;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 25px;
  pointer-events: ${(props) => (props.count === 1 ? 'auto' : 'none')};
  cursor: pointer;
  :hover {
    opacity: 1;
  }
`;

const Sequence = styled.div`
  color: #dbdbdb;
  display: flex;
  justify-content: end;
  position: relative;
  right: 35px;
  top: 23px;
  @media screen and (max-width: 768px) {
    right: 45px;
  }
`;

const CartModal = styled.div`
  display: ${props => props.visible ? 'flex' : 'none'};
  position: fixed;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 40px;
  left: 30%;
  top: 30%;
  transform: translate(-200%, -250%);
  z-index: 3;
  background-color: white;
  opacity: 0.7;
  color: rgba(0, 0, 0, 0.5);
  animation: 2.5s ease-in-out cartModal;
  @keyframes cartModal {
    0% {
      opacity: 0;
      left: 30%;
    }
    50% {
      opacity: 1;
      left: 67%;
    }
    100% {
      opacity: 0.5;
      left: 30%;
    }
  }
  @media screen and (max-width: 768px) {
    right: 400px;
    width: 120px;
  }
`;

const TOTAL_SLIDES = 12;

const URL = 'http://localhost:8000';

const Incense = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const [cartModalOpen, setCartModalOpen] = useState(0);
  const [stickData, setStickData] = useState(null);
  const [incenseData, setIncenseData] = useState(null);
  const [click, setClick] = useState({
    one: false,
    two: false,
    three: false,
    four: false
  });
  const dispatch = useDispatch();
  const stick = useSelector(sticksSelector);
  const slideRef = useRef(null);
  useEffect(() => {
    axios({
      method: 'GET',
      url: `${URL}/incense`
    })
      .then((res) => {
        // *로딩인디케이터
        console.log('인센스성공 ->', res.data);
        setIncenseData(res.data);
      })
      .catch((err) => {
        console.log('인센스실패 ->', err);
      });
  }, []);
  const data = incenseData;

  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);
  // console.log('장바구니 stickId ->', stick.sticks);

  const clickHandler = () => {
    // * Add to cart
    const stickCount =
      stick.sticks.filter((el) => el.stickId === stickData.id).length === 0;

    if (stickCount) {
      setCartModalOpen(1);
      dispatch(
        insertStick({
          stickId: stickData.id,
          stickName: stickData.stickName,
          stickImage: stickData.stickImage
        })
      );
      setClickCount(0);
      setTimeout(()=>{setCartModalOpen(0)}, 2000);
    } else {
      alert('이미 담겼는데?'); // eslint-disable-line
      setClickCount(0);
    }
  };
  return (
    <>
    <IncenseWrapper>
      <IncenseContainer>
        <IncenseContent>
          <Sequence>{currentSlide + 1}/13</Sequence>
          <SliderBox ref={slideRef}>
            {data?.map((el) => {
              return (
                <IncenseSlider
                  key={el.id.toString()}
                  data={el}
                  setStickData={setStickData}
                  clickCount={clickCount}
                  setClickCount={setClickCount}
                  click={click}
                  setClick={setClick}
                />
              );
            })}
          </SliderBox>
          <CartModal visible={cartModalOpen}>장바구니에 상품이 담겼습니다</CartModal>
        </IncenseContent>
        <SliderBtnLeft onClick={prevSlide} />
        <SliderBtnRight onClick={nextSlide} />
        <CartBtn count={clickCount} onClick={clickHandler}>
          Add to cart
        </CartBtn>
      </IncenseContainer>
      <Cloud />
    </IncenseWrapper>
    <Cart />
    </>
  );
};

export default Incense;
