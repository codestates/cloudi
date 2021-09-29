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

const Test1 = styled.div`
  height: 260px;
`;

const Container = styled.div`
  background-color: white;
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

const TOTAL_SLIDES = 2;
const Incense = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const data = [
    {
      id: 'one',
      title: 'Sad Romance Incense',
      url: '/images/product.png',
      stickName: '세이지',
      stickPrice: 2000
    },
    {
      id: 'two',
      title: 'Lorem ipsum Incense',
      url: '/images/product.png',
      stickName: '오크모스',
      stickPrice: 2000
    },
    {
      id: 'three',
      title: 'On the beach Insence',
      url: '/images/product.png',
      stickName: '새벽',
      stickPrice: 2000
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

  return (
    <Wrapper>
      <Test1>
        <Container>
          {currentSlide}
          <SliderBox ref={slideRef}>
            {data.map((el) => {
              return (
                <IncenseSlider
                  img={el.url}
                  key={el.id}
                  title={el.title}
                  name={el.stickName}
                  price={el.stickPrice}
                />
              );
            })}
          </SliderBox>
        </Container>
        <SliderBtnLeft onClick={prevSlide} />
        <SliderBtnRight onClick={nextSlide} />
      </Test1>
    </Wrapper>
  );
};

export default Incense;
