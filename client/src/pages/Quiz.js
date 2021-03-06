import { useState } from 'react';
import styled from 'styled-components';
import QuizPageFirst from '../components/quiz_components/QuizPageFirst';
import QuizPageSecond from '../components/quiz_components/QuizPageSecond';
import QuizPageThird from '../components/quiz_components/QuizPageThird';
import QuizPageFourth from '../components/quiz_components/QuizPageFourth';
import QuizPageResult from '../components/quiz_components/QuizPageResult';
import { SEQUENCE } from '../components/quiz_components/quizItem';
import axios from 'axios';

const QuizContainer = styled.div`
  font-family: 'Roboto', sans-serif;
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
  @media screen and (max-height: 680px) {
    height: 700px;
  }
`;

const QuizHeadline = styled.div`
  display: ${(props) => (props.visible ? 'none' : 'auto')};
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
  display: ${(props) => (props.visible ? 'none' : 'flex')};
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
  display: ${(props) => (props.visible ? 'none' : 'auto')};
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
  @media screen and (max-width: 768px) {
    margin-top: 0px;
  }
`;

const ContentWrapper = styled.div`
  display: ${(props) => (props.visible ? 'none' : 'auto')};
  height: 200px;
  justify-content: center;
  align-items: center;
`;

const Quiz = () => {
  const [visible, setVisible] = useState(SEQUENCE);
  const [sequence, setSequence] = useState(SEQUENCE);
  const [imageClick, setImageClick] = useState(false);
  const [resultVisible, setResultVisible] = useState(0);
  const [quizBtn, setQuizBtn] = useState('CONTINUE');
  const [loadingOpen, setLoadingOpen] = useState(0);
  const [resultData, setResultData] = useState(null);
  const [title, setTitle] = useState('???????????? ????????? ??????????????????');
  const [answer, setAnswer] = useState({
    firstScore: 0,
    secondScore: 0,
    thirdScore: 0,
    fourthScore: 0
  });
  const progress = ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'];
  
  const submitBtnHandler = () => {
    setLoadingOpen(1);
    const num =
      answer.firstScore +
      answer.secondScore +
      answer.thirdScore +
      answer.fourthScore +
      6;

    setVisible({
      ...visible,
      fourthPage: false
    });
    setTitle('');
    setResultVisible(true);
    axios({
      method: 'GET',
      url: `https://www.cloudi.shop/incense`
    })
      .then((res) => {
        const DATA = res.data.filter((el) => el.stickGrade === num);
        setResultData(...DATA);
        setTimeout(() => {
          setLoadingOpen(0);
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
      });
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
          setTitle('????????? ?????? 3????????? ???????????????');
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
          setTitle('?????? ??????????????? ?????? ?????????..');
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
          setTitle('????????? ????????? ???????????????');
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
      <QuizHeadline visible={resultVisible}>INCENSE QUIZ</QuizHeadline>
      <SequenceContainer visible={resultVisible}>
        {progress.map((el) => {
          return <SequenceBox key={el} progress={sequence[el]} />;
        })}
      </SequenceContainer>
      <QuizTitle>{title}</QuizTitle>

      <ContentWrapper visible={resultVisible}>
        <QuizPageFirst
          visible={visible.firstPage}
          setImageClick={setImageClick}
          answer={answer}
          setAnswer={setAnswer}
        />
        <QuizPageSecond
          firstPageVisible={visible.firstPage}
          visible={visible.secondPage}
          setImageClick={setImageClick}
          answer={answer}
          setAnswer={setAnswer}
        />
        <QuizPageThird
          firstPageVisible={visible.firstPage}
          visible={visible.thirdPage}
          setImageClick={setImageClick}
          answer={answer}
          setAnswer={setAnswer}
        />
        <QuizPageFourth
          visible={visible.fourthPage}
          setImageClick={setImageClick}
          answer={answer}
          setAnswer={setAnswer}
        />
      </ContentWrapper>
      <ContinueBox
        click={imageClick}
        onClick={continueBtnHandler}
        quizBtn={quizBtn}
        visible={resultVisible}
      >
        {quizBtn}
      </ContinueBox>
      <QuizPageResult
        resultVisible={resultVisible}
        resultData={resultData}
        loadingOpen={loadingOpen}
      />
    </QuizContainer>
  );
};

export default Quiz;
