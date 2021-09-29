import { useState } from 'react';
import styled from 'styled-components';
import QuizPageFirst from '../components/quiz_components/QuizPageFirst';
import QuizPageSecond from '../components/quiz_components/QuizPageSecond';
import QuizPageThird from '../components/quiz_components/QuizPageThird';
import QuizPageFourth from '../components/quiz_components/QuizPageFourth';
import QuizPageResult from '../components/quiz_components/QuizPageResult';
import { SEQUENCE } from '../components/quiz_components/quizItem';

const QuizContainer = styled.div`
  //padding-top: 95px;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  animation: 0.8s ease-in-out loadEffect;
  @keyframes loadEffect {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media screen and (max-height: 830px) {
    height: 850px;
  }
`;

const QuizHeadline = styled.div`
  display: ${(props) => (props.visible === 'A' ? 'none' : 'auto')};
  color: #92929c;
  font-size: 0.9rem;
  margin-bottom: 20px;
`;

const QuizTitle = styled.div`
  margin: 100px 0 40px 0;
  font-size: 1.3rem;
  color: #787887;
`;

const SequenceContainer = styled.div`
  display: ${(props) => (props.visible === 'A' ? 'none' : 'flex')};
  flex-direction: row;
  justify-content: space-around;
`;

const SequenceBox = styled.div`
  margin: 5px;
  width: 150px;
  height: 10px;
  background-color: ${(props) => (props.progress ? '#b7c58b' : '#787887')};
  @media screen and (max-width: 768px) {
    width: 70px;
    height: 8px;
  }
`;

const ContinueBox = styled.div`
  display: ${(props) => (props.visible === 'A' ? 'none' : 'auto')};
  color: white;
  background-color: ${(props) => (props.click ? '#b7c58b' : '#787887')};
  width: 8rem;
  padding: 12px;
  text-align: center;
  margin-top: 100px;
  ${({ quizBtn }) => {
    return quizBtn === 'SUBMIT'
      ? `position: relative;
  top: 150px;`
      : null;
  }};
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.05), 0 6px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  pointer-events: ${(props) => (props.click ? 'auto' : 'none')};
  :hover {
    cursor: pointer;
    background-color: #97a371;
  }
`;

const ContentWrapper = styled.div`
  display: ${(props) => (props.visible === 'A' ? 'none' : 'auto')};
  height: 200px;
  justify-content: center;
  align-items: center;
`;

const Quiz = () => {
  const [visible, setVisible] = useState(SEQUENCE);
  const [sequence, setSequence] = useState(SEQUENCE);
  const [imageClick, setImageClick] = useState(false);
  const [resultVisible, setResultVisible] = useState(false);
  const [quizBtn, setQuizBtn] = useState('CONTINUE');
  const [title, setTitle] = useState('좋아하는 계절을 선택해주세요');
  const progress = ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'];

  const submitBtnHandler = () => {
    setVisible({
      ...visible,
      fourthPage: false
    });
    setTitle('');
    setResultVisible(true);
  };

  const continueBtnHandler = () => {
    switch (true) {
      case visible.firstPage:
        setVisible({
          ...visible,
          firstPage: false
        });
        setTimeout(() => {
          setVisible({
            ...visible,
            firstPage: false,
            secondPage: true
          });
          setSequence({ ...sequence, secondPage: true });
          setImageClick(false);
          setTitle('오늘의 기분 3가지를 골라주세요');
        }, 250);
        break;

      case visible.secondPage:
        setVisible({
          ...visible,
          secondPage: false
        });
        setTimeout(() => {
          setVisible({
            ...visible,
            secondPage: false,
            thirdPage: true
          });
          setSequence({ ...sequence, thirdPage: true });
          setImageClick(false);
          setTitle('내가 생각하기에 나의 성향은..');
        }, 250);
        break;

      case visible.thirdPage:
        setVisible({
          ...visible,
          thirdPage: false
        });
        setTimeout(() => {
          setVisible({
            ...visible,
            thirdPage: false,
            fourthPage: true
          });
          setSequence({ ...sequence, fourthPage: true });
          setImageClick(false);
          setTitle('오늘의 날씨를 골라주세요');
          setQuizBtn('SUBMIT');
        }, 250);
        break;

      case visible.fourthPage:
        submitBtnHandler();
        break;

      default:
        break;
    }
  };

  return (
    <QuizContainer>
      <QuizHeadline visible={resultVisible && 'A'}>INCENSE QUIZ</QuizHeadline>
      <SequenceContainer visible={resultVisible && 'A'}>
        {progress.map((el) => {
          return <SequenceBox key={el} progress={sequence[el]} />;
        })}
      </SequenceContainer>
      <QuizTitle>{title}</QuizTitle>

      <ContentWrapper visible={resultVisible && 'A'}>
        <QuizPageFirst
          visible={visible.firstPage}
          setImageClick={setImageClick}
        />
        <QuizPageSecond
          firstPageVisible={visible.firstPage}
          visible={visible.secondPage}
          setImageClick={setImageClick}
        />
        <QuizPageThird
          secondPageVisible={visible.firstPage}
          visible={visible.thirdPage}
          setImageClick={setImageClick}
        />
        <QuizPageFourth
          visible={visible.fourthPage}
          setImageClick={setImageClick}
        />
      </ContentWrapper>
      <ContinueBox
        click={imageClick}
        onClick={continueBtnHandler}
        quizBtn={quizBtn}
        visible={resultVisible && 'A'}
      >
        {quizBtn}
      </ContinueBox>
      <QuizPageResult resultVisible={resultVisible} />
    </QuizContainer>
  );
};

export default Quiz;
