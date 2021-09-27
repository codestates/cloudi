import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const boxFade = keyframes`
  0% {
      opacity: 1;
      transform: translateX(-100px);
    }
    100% {
      opacity: 0;
      transform: translateX(-200px);
    }
`;

const QuizFirstContainer = styled.div`
  animation-duration: 0.18s;
  animation-timing-function: ease-out;
  animation-name: ${(props) => props.animation && boxFade};
  animation-fill-mode: forwards;
  display: flex;
  align-items: center;
  height: 100%;
`;

const QuizFirstContent = styled.div`
  margin: 15px;
  background-image: url(${(props) => props.url});
  background-size: contain;
  background-repeat: no-repeat;
  width: 130px;
  height: 140px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    margin: 5px;
    width: 100px;
    height: 110px;
  }
`;

const QuizPageFirst = ({
  visible,
  image,
  quizImageHandler,
  setImageClick,
  animation
}) => {
  const SEASON = ['spring', 'summer', 'fall', 'winter'];
  const [localVisible, setLocalVisible] = useState(visible);
  const [animate, setAnimate] = useState(animation);

  useEffect(() => {
    if (!visible) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 250);
    }
    setLocalVisible(visible);
  }, [visible]);

  const imageClickHandler = (season) => {
    quizImageHandler(season);
    setImageClick(true);
  };

  return !animate && !localVisible
    ? null
    : (
      <QuizFirstContainer visible={visible} animation={animate}>
        {SEASON.map((el) => {
          return (
            <QuizFirstContent
              key={el}
              url={image[el]}
              onClick={() => imageClickHandler(el)}
            />
          );
        })}
      </QuizFirstContainer>
      );
};

export default QuizPageFirst;
