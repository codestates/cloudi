import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import IncenseSlider from '../components/incense_components/IncenseSlider';

const Wrapper = styled.div`
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
  padding: 20px;
  background-color: ${(props) => (props.count === 1 ? '#b7c58b' : 'white')};
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

const TOTAL_SLIDES = 3;
const Incense = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [clickCount, setClickCount] = useState(0);

  const [click, setClick] = useState({
    one: false,
    two: false,
    three: false,
    four: false
  });
  const slideRef = useRef(null);
  const data = [
    {
      id: 'one',
      title: 'Sad Romance Incense',
      url: '/images/incense_2.png',
      stickName: '세이지',
      stickPrice: 2000,
      stickScope: {
        citrus: 2,
        green: 10,
        fruity: 5,
        fresh: 7,
        floral: 5
      }
    },
    {
      id: 'two',
      title: 'Lorem ipsum Incense',
      url: '/images/incense_0.png',
      stickName: '오크모스',
      stickPrice: 2000,
      stickScope: {
        citrus: 4,
        green: 6,
        fruity: 7,
        fresh: 5,
        floral: 5
      }
    },
    {
      id: 'three',
      title: 'On the beach Insence',
      url: '/images/incense_1.png',
      stickName: '새벽',
      stickPrice: 2000,
      stickScope: {
        citrus: 3,
        green: 10,
        fruity: 6,
        fresh: 5,
        floral: 3
      }
    },
    {
      id: 'four',
      title: 'Hi Ho Hu',
      url: '/images/incense_3.png',
      stickName: '시라민스',
      stickPrice: 2000,
      stickScope: {
        citrus: 7,
        green: 4,
        fruity: 2,
        fresh: 2,
        floral: 5
      }
    }
  ];
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

  const clickHandler = (id) => {
    // * id를 얻어서 cart add btn 누를때 사용
  };
  return (
    <Wrapper>
      <IncenseContainer>
        <IncenseContent>
          <Sequence>{currentSlide + 1}/4</Sequence>
          <SliderBox ref={slideRef}>
            {data.map((el) => {
              return (
                <IncenseSlider
                  key={el.id}
                  data={el}
                  clickHandler={clickHandler}
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
      <Cloud />
    </Wrapper>
  );
};

export default Incense;
