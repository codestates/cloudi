import { useState } from 'react';
import styled from 'styled-components';
import QuizPageFirst from '../components/quiz_components/QuizPageFirst';
import QuizPageSecond from '../components/quiz_components/QuizPageSecond';
import QuizPageThird from '../components/quiz_components/QuizPageThird';
import { QUIZ_IMAGE as IMAGE } from '../components/quiz_components/quizItem';

const QuizContainer = styled.div`
  //padding-top: 95px;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  animation: 0.8s ease-in-out second;
  @keyframes second {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media screen and (max-height: 768px) {
    height: 800px;
  }
`;

const QuizHeadline = styled.div`
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
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const SequenceBox = styled.div`
  margin: 5px;
  width: 150px;
  height: 10px;
  background-color: #b7c58b;
`;

const ContinueBox = styled.div`
  color: white;
  background-color: ${(props) => (props.click ? '#b7c58b' : '#787887')};
  width: 8rem;
  padding: 12px;
  text-align: center;
  margin-top: 100px;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.05), 0 6px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  pointer-events: ${(props) => (props.click ? 'auto' : 'none')};
  :hover {
    cursor: pointer;
    background-color: #97a371;
  }
`;

const Quiz = () => {
  const [visible, setVisible] = useState({
    firstPage: true,
    secondPage: false,
    thirdPage: false
  });
  const [imageClick, setImageClick] = useState(false);
  const [image, setImage] = useState(IMAGE);
  const [title, setTitle] = useState('좋아하는 계절을 선택해주세요');
  const quizImageHandler = (key) => {
    const image = IMAGE;
    switch (key) {
      case 'spring':
        setImage({ ...image, [key]: '/images/spring_green.png' });
        break;
      case 'summer':
        setImage({ ...image, [key]: '/images/summer_green.png' });
        break;
      case 'fall':
        setImage({ ...image, [key]: '/images/fall_green.png' });
        break;
      case 'winter':
        setImage({ ...image, [key]: '/images/winter_green.png' });
        break;
      default:
        break;
    }
  };

  const continueBtnHandler = () => {
    switch (true) {
      case visible.firstPage:
        setVisible({
          firstPage: false,
          secondPage: true,
          thirdPage: false
        });
        setImageClick(false);
        setTitle('오늘의 기분 3가지를 골라주세요');
        break;
      case visible.secondPage:
        setVisible({
          firstPage: false,
          secondPage: false,
          thirdPage: true
        });
        setTitle('세번째다');
        break;

      default:
        break;
    }
  };

  return (
    <QuizContainer>
      <QuizHeadline>INCENSE QUIZ</QuizHeadline>
      <SequenceContainer>
        <SequenceBox />
        <SequenceBox />
        <SequenceBox />
        <SequenceBox />
      </SequenceContainer>
      <QuizTitle>{title}</QuizTitle>
      <QuizPageFirst
        visible={visible.firstPage}
        image={image}
        quizImageHandler={quizImageHandler}
        setImageClick={setImageClick}
      />
      <QuizPageSecond
        visible={visible.secondPage}
        setImageClick={setImageClick}
      />
      <QuizPageThird
        visible={visible.thirdPage}
        setImageClick={setImageClick}
      />
      <ContinueBox click={imageClick} onClick={continueBtnHandler}>
        CONTINUE
      </ContinueBox>
    </QuizContainer>
  );
};

export default Quiz;
