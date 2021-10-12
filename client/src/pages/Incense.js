import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import IncenseSlider from '../components/incense_components/IncenseSlider';
import LoadingIndicator from '../components/LoadingIndicator';
import { useSelector, useDispatch } from 'react-redux';
import { insertStick } from '../app/modules/stick';
import { sticksSelector, userinfoSelector } from '../app/modules/hooks';
import Cart from '../modals/Cart';
import axios from 'axios';

const IncenseWrapper = styled.div`
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
  background-color: rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(15px);
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
  background-color: ${(props) => (props.count ? '#b7c58b' : '#636363')};
  font-family: 'Roboto';
  padding: 20px;
  opacity: 0.7;
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 25px;
  pointer-events: ${(props) => (props.count ? 'auto' : 'none')};
  cursor: pointer;
  :hover {
    opacity: 1;
  }
  @media screen and (max-width: 768px) {
    position: relative;
    bottom: 90px;
  }
`;

const Sequence = styled.div`
  color: #999999;
  display: flex;
  justify-content: end;
  position: fixed;
  left: 535px;
  top: 10px;
  @media screen and (max-width: 768px) {
    left: 330px;
  }
`;

const TOTAL_SLIDES = 12;

const Incense = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const [cartModalOpen, setCartModalOpen] = useState(0);
  const [inCartItem, setInCartItem] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [stickData, setStickData] = useState(null);
  const [incenseData, setIncenseData] = useState(null);
  const [click, setClick] = useState({
    one: false,
    two: false,
    three: false,
    four: false
  });
  const dispatch = useDispatch();
  const { userinfo } = useSelector(userinfoSelector);
  const stick = useSelector(sticksSelector);
  const slideRef = useRef(null);

  useEffect(() => {
    axios({
      method: 'GET',
      url: `https://www.cloudi.shop/incense`
    })
      .then((res) => {
        setIncenseData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
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
    if (incenseData) {
      slideRef.current.style.transition = 'all 0.5s ease-in-out';
      slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
    }
  }, [currentSlide]);

  const clickHandler = () => {
    const stickCount =
      stick.sticks.filter((el) => el.stickId === stickData.id).length === 0;

    const newStick = {
      id: 1,
      stickId: stickData.id,
      stickName: stickData.stickName,
      stickImage: stickData.stickImage
    };

    if (stickCount) {
      if (userinfo.token) {
        setClickCount(0);
        setInCartItem(0);
        setCartModalOpen(1);
        axios({
          method: 'POST',
          url: `https://www.cloudi.shop/incense`,
          data: { stickId: stickData.id, userId: userinfo.id }
        })
          .then((res) => {
            dispatch(insertStick({ ...newStick, id: res.data.id }));
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        setInCartItem(0);
        setCartModalOpen(1);
        if (stick.sticks.length !== 0) {
          newStick.id = stick.sticks[stick.sticks.length - 1].id + 1;
        }
        dispatch(insertStick(newStick));
        setClickCount(0);
      }
    } else {
      setCartModalOpen(1);
      setInCartItem(1);
      setClickCount(0);
    }
  };

  return (
    <>
      <IncenseWrapper>
        {isLoading ? (
          <LoadingIndicator text={'Incense 불러오는 중...'} />
        ) : (
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
            </IncenseContent>
            <SliderBtnLeft onClick={prevSlide} />
            <SliderBtnRight onClick={nextSlide} />
            <CartBtn count={clickCount} onClick={clickHandler}>
              Add to cart
            </CartBtn>
          </IncenseContainer>
        )}
        <Cloud />
      </IncenseWrapper>
      <Cart
        visible={cartModalOpen}
        setVisible={setCartModalOpen}
        inCartItem={inCartItem}
      />
    </>
  );
};

export default Incense;
