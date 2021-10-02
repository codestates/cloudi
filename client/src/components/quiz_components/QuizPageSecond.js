import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { QUIZ_LIST } from './quizItem';

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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-flow: wrap;
  justify-content: center;
  width: ${(props) => props.width}px;

  animation-duration: 0.3s;
  animation-timing-function: ease-out;
  animation-name: ${(props) =>
    props.animation === 'boxFadeIn' ? boxFadeIn : boxFadeOut};
  animation-fill-mode: forwards;
`;

const BtnContent = styled.div`
  width: ${(props) => props.width || '130'}px;
  color: ${(props) => (props.disable ? '#a9a9ab' : '#3e3e4d')};
  background-color: ${(props) => props.color};
  text-align: center;
  padding: 10px;
  margin: 5px;
  border: 1.5px solid;
  border-color: ${(props) => (props.disable ? '#a9a9ab' : '#787887')};
  :hover {
    border-color: ${(props) => (props.disable ? '#787887' : '#b7c58b')};
    cursor: pointer;
  }
  @media screen and (max-width: 1023px) {
  }
`;

const QuizPageSecond = ({
  visible,
  setImageClick,
  firstPageVisible,
  answer,
  setAnswer
}) => {
  const [btnDisable, setBtnDisable] = useState(false);
  const [activeBtn, setActiveBtn] = useState({
    joy: false,
    anger: false,
    surprise: false,
    happiness: false,
    fear: false,
    aversion: false,
    love: false,
    loneliness: false,
    worry: false,
    sadness: false,
    ecstasy: false,
    comfort: false
  });
  const [localVisible, setLocalVisible] = useState(visible);
  const [animateType, setAnimateType] = useState('boxFadeIn');
  const [endAnimateTime, setEndAnimateTime] = useState(false);
  const clickCount = Object.values(activeBtn).filter(
    (el) => el === true
  ).length;

  useEffect(() => {
    if (clickCount === 3) {
      setBtnDisable(true);
      setImageClick(true);
    } else {
      setBtnDisable(false);
      setImageClick(false);
    }
  }, [activeBtn]);

  const clickHandler = (text, score) => {
    if (clickCount === 3) {
      if (activeBtn[text]) {
        setActiveBtn({ ...activeBtn, [text]: !activeBtn[text] });
        setAnswer({ ...answer, secondScore: answer.secondScore - score });
      }
    } else {
      activeBtn[text]
        ? setAnswer({ ...answer, secondScore: answer.secondScore - score })
        : setAnswer({ ...answer, secondScore: answer.secondScore + score });
      setActiveBtn({ ...activeBtn, [text]: !activeBtn[text] });
    }
  };
  useEffect(() => {
    if (!visible && !firstPageVisible) {
      setAnimateType('boxFadeOut');
      setEndAnimateTime(true);
      setTimeout(() => setEndAnimateTime(false), 250);
    }
    setLocalVisible(visible);
  }, [visible]);

  return !endAnimateTime && !localVisible
    ? null
    : (
      <Wrapper>
        {QUIZ_LIST.map((el) => {
          return (
            <SecondContainer
              key={el.width.toString()}
              width={el.width}
              visible={visible}
              animation={animateType}
            >
              {el.btn.map((item) => {
                return (
                  <BtnContent
                    key={item.text.toString()}
                    disable={btnDisable && !activeBtn[item.id]}
                    color={activeBtn[item.id] ? '#b7c58b' : '#ffffff'}
                    width={item.width}
                    onClick={() => clickHandler(item.id, item.score)}
                  >
                    {item.text}
                  </BtnContent>
                );
              })}
            </SecondContainer>
          );
        })}
      </Wrapper>
      );
};

export default QuizPageSecond;
