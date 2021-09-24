import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { QUIZ_LIST } from './quizList';

const SecondContainer = styled.div`
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  flex-direction: column;
  flex-flow: wrap;
  justify-content: center;
  width: ${(props) => props.width}px;
  animation: 0.7s ease-in-out second;
  @keyframes second {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media screen and (max-width: 1023px) {
  }
`;

const DoneMessage = styled.div``;

const BtnContent = styled.div`
  width: ${(props) => props.width || '130'}px;
  color: ${(props) => (props.disable ? '#a9a9ab' : '#3e3e4d')};
  background-color: ${(props) => (props.color ? '#b7c58b' : 'white')};
  text-align: center;
  padding: 10px;
  margin: 5px;
  border: 1.5px solid;
  border-color: ${(props) => (props.disable ? '#a9a9ab' : '#787887')};
  :hover {
    border-color: ${(props) => (props.disable ? '#787887' : '#b7c58b')};
  }
  @media screen and (max-width: 1023px) {
  }
`;

const QuizPageSecond = ({ visible }) => {
  const [btnDisable, setBtnDisable] = useState(false);
  const [doneMessage, setDoneMessage] = useState('');
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
  const clickCount = Object.values(activeBtn).filter(
    (el) => el === true
  ).length;

  useEffect(() => {
    // * 유즈이펙트 // true가 몇개인지 알아야함.
    if (clickCount === 3) {
      setBtnDisable(true);
    } else {
      setBtnDisable(false);
    }
  }, [activeBtn]);

  const clickHandler = (text) => {
    // *  버튼 클릭하면 실행되는 함수.

    // const clickCount = Object.values(activeBtn).filter(
    //   (el) => el === true
    // ).length;

    if (clickCount === 3) {
      if (activeBtn[text]) {
        setActiveBtn({ ...activeBtn, [text]: !activeBtn[text] });
      } else {
        return null;
      }
    } else {
      setActiveBtn({ ...activeBtn, [text]: !activeBtn[text] });
    }
  };

  return (
    <>
      {QUIZ_LIST.map((el) => {
        return (
          <SecondContainer
            key={el.width.toString()}
            width={el.width}
            visible={visible}
          >
            {el.btn.map((item) => {
              return (
                <BtnContent
                  key={item.text.toString()}
                  disable={btnDisable && !activeBtn[item.id]}
                  color={activeBtn[item.id]}
                  width={item.width}
                  onClick={() => clickHandler(item.id)}
                >
                  {item.text}
                </BtnContent>
              );
            })}
          </SecondContainer>
        );
      })}
      <DoneMessage>{doneMessage}</DoneMessage>
    </>
  );
};

export default QuizPageSecond;
