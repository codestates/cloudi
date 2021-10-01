import { useState, useEffect } from 'react';
import styled from 'styled-components';

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

const Img = styled.div`
  flex: 1;
  flex-shrink: 0;
  //background-color: #b7c58b;
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

const Text = styled.div`
  color: #dbdbdb;
  text-align: center;
  line-height: 30px;
`;

const IncenseSlider = ({
  data,
  clickHandler,
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
      const a = scope[item] / 2;
      return a;
    });
    setNum(dividedNum);
  }, [data]);
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

  const sliderClickHandler = (id) => {
    const data = {
      one: false,
      two: false,
      three: false,
      four: false
    };
    if (click[id] === true) {
      setClick({ ...data, [id]: false });
      setClickCount(0);
    } else {
      setClick({ ...data, [id]: true });
      setClickCount(1);
      clickHandler(id);
    }
  };

  return (
    <SliderContainer onClick={() => sliderClickHandler(data.id)}>
      <Img img={data.url} />
      <TextContainer>
        <Text>{data.stickName}</Text>
        <Text>{data.title}</Text>
        <Text>{data.stickPrice} KRW</Text>
        {SCOPE_DATA.map((el, idx) => {
          return (
            <Text key={el}>
              {el}: {num && changeToStr(num[idx])}
            </Text>
          );
        })}
        <CheckImg click={click[data.id] && '/images/check.png'} />
      </TextContainer>
    </SliderContainer>
  );
};

export default IncenseSlider;
