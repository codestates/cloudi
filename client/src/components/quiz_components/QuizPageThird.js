import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const boxFadeOut = keyframes`
  0% {
      opacity: 1;
      transform: translateX(-100px);
    }
    100% {
      opacity: 0;
      transform: translateX(-200px);
    }
`;

const boxFadeIn = keyframes`
  0% {
      opacity: 0;
      transform: translateX(30px);
    }
    50% {
      opacity: 0.5;
      transform: translateX(-30px);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
`;

const QuizThirdContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation-duration: 0.3s;
  animation-timing-function: ease-out;
  animation-name: ${(props) =>
    props.animation === 'boxFadeIn' ? boxFadeIn : boxFadeOut};
  animation-fill-mode: forwards;
`;

const Image = styled.div`
  margin-bottom: 15px;
  width: 220px;
  height: 200px;
  background-image: url(${(props) => props.url});
  background-size: contain;
  background-repeat: no-repeat;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 500px;
`;

const BtnContent = styled.div`
  padding: 13px;
  border: 2px solid;
  border-color: ${(props) => (props.color === 'A' ? '#f09490' : '#787887')};
  cursor: pointer;
  :hover {
    border-color: #f09490;
  }
`;

const QuizPageThird = ({
  visible,
  setImageClick,
  secondPageVisible,
  answer,
  setAnswer
}) => {
  const [localVisible, setLocalVisible] = useState(visible);
  const [animateType, setAnimateType] = useState('boxFadeIn');
  const [endAnimateTime, setEndAnimateTime] = useState(false);
  const [image, setImage] = useState('/images/prs.png');
  const [color, setColor] = useState({
    image_A: false,
    image_B: false
  });
  useEffect(() => {
    if (!visible && !secondPageVisible) {
      setAnimateType('boxFadeOut');
      setEndAnimateTime(true);
      setTimeout(() => setEndAnimateTime(false), 250);
    }
    setLocalVisible(visible);
  }, [visible]);

  const btnClickHanlder = (key) => {
    if (key === 'B') {
      setImage('/images/prsB.png');
      setColor({
        image_A: false,
        image_B: true
      });
      setAnswer({ ...answer, thirdScore: 1 });
    } else {
      setImage('/images/prsA.png');
      setColor({
        image_A: true,
        image_B: false
      });
      setAnswer({ ...answer, thirdScore: -1 });
    }
    setImageClick(true);
  };

  return !endAnimateTime && !localVisible
    ? null
    : (
      <QuizThirdContainer animation={animateType}>
        <Image url={image} />
        <BtnContainer>
          <BtnContent color={color.image_A ? 'A' : 'B'} onClick={btnClickHanlder}>
            감성적인 편이다
          </BtnContent>
          <BtnContent
            color={color.image_B ? 'A' : 'B'}
            onClick={() => btnClickHanlder('B')}
          >
            이성적인 편이다
          </BtnContent>
        </BtnContainer>
      </QuizThirdContainer>
      );
};

export default QuizPageThird;
