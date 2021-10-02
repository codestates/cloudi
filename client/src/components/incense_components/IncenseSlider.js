import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CONSTANT_DATA } from './incenseItem';

const SliderContainer = styled.div`
  width: 100%;
  height: 350px;
  flex-shrink: 0;
  display: flex;
  cursor: pointer;
`;

const CheckImg = styled.div`
  background-image: url(${(props) => props.click || '/images/blank.png'});
  background-size: contain;
  background-repeat: no-repeat;
  width: 30px;
  height: 30px;
  position: relative;
  left: 238px;
  bottom: 280px;
  @media screen and (max-width: 768px) {
    left: 128px;
    bottom: 280px;
  }
`;

const IncenseImg = styled.div`
  flex: 1;
  flex-shrink: 0;
  background-image: url(${(props) => props.img});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const TextContainer = styled.div`
  flex: 1;
  flex-shrink: 0;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const IncenseData = styled.div`
  color: #dbdbdb;
  text-align: center;
  line-height: 30px;
`;

const IncenseSlider = ({
  data,
  setStickData,
  clickCount,
  setClickCount,
  click,
  setClick
}) => {
  const [scope] = useState(data.stickScope);
  const [num, setNum] = useState(null);
  const RATE = [1, 2, 3, 4, 5];
  const SCOPE_DATA = ['citrus', 'green', 'fruity', 'fresh', 'floral'];

  useEffect(() => {
    const dividedNum = SCOPE_DATA.map((item) => {
      return scope[item] / 2;
    });
    setNum(dividedNum);
  }, [data]); // eslint-disable-line

  useEffect(() => {
    if (clickCount === 0) {
      setClick(CONSTANT_DATA);
    }
  }, [clickCount]); // eslint-disable-line

  const changeToStr = (score) => {
    const circles = [];
    const isHalf = score % 1 !== 0;
    const parsedNum = Math.ceil(score);
    RATE.forEach((el) => {
      if (parsedNum >= el) {
        if (el === parsedNum && isHalf) {
          circles.push('◐');
        } else {
          circles.push('●');
        }
      } else {
        circles.push('○');
      }
    });
    return circles.join('');
  };

  const sliderClickHandler = (el) => {
    if (click[el.stickId] === true) {
      setClick({ ...CONSTANT_DATA, [el.stickId]: false });
      setClickCount(0);
    } else {
      setClick({ ...CONSTANT_DATA, [el.stickId]: true });
      setClickCount(1);
      setStickData(el);
    }
  };

  return (
    <SliderContainer onClick={() => sliderClickHandler(data)}>
      <IncenseImg img={data.stickImage} />
      <TextContainer>
        <IncenseData>{data.stickName}</IncenseData>
        <IncenseData>{data.stickDesc}</IncenseData>
        <IncenseData>{data.stickPrice} KRW</IncenseData>
        {SCOPE_DATA.map((el, idx) => {
          return (
            <IncenseData key={el}>
              {el}: {num && changeToStr(num[idx])}
            </IncenseData>
          );
        })}
        <CheckImg click={click[data.stickId] && '/images/check.png'} />
      </TextContainer>
    </SliderContainer>
  );
};

export default IncenseSlider;
