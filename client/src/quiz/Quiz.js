import { useState } from 'react';
import styled from 'styled-components';
import QuizPageFirst from './QuizPageFirst';
import QuizPageSecond from './QuizPageSecond';

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
  :hover {
    cursor: pointer;
    background-color: #97a371;
  }
`;

const QuizPage = () => {
  const [visible, setVisible] = useState({
    firstPage: true,
    secondPage: false
  });

  const [imageClick, setImageClick] = useState(false);

  const [image, setImage] = useState({
    spring: '/images/spring_black.png',
    summer: '/images/summer_black.png',
    fall: '/images/fall_black.png',
    winter: '/images/winter_black.png'
  });

  const [title, setTitle] = useState('좋아하는 계절을 선택해주세요');
  const quizImageHandler = (key) => {
    const image = {
      spring: '/images/spring_black.png',
      summer: '/images/summer_black.png',
      fall: '/images/fall_black.png',
      winter: '/images/winter_black.png'
    };
    if (key === 'spring') {
      setImage({ ...image, [key]: '/images/spring_green.png' });
    } else if (key === 'summer') {
      setImage({ ...image, [key]: '/images/summer_green.png' });
    } else if (key === 'fall') {
      setImage({ ...image, [key]: '/images/fall_green.png' });
    } else if (key === 'winter') {
      setImage({ ...image, [key]: '/images/winter_green.png' });
    }
  };

  const continueBtnHandler = () => {
    switch (true) {
      case visible.firstPage:
        setVisible({
          firstPage: false,
          secondPage: true
        });
        setTitle('오늘의 기분 3가지를 골라주세요');
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
      <QuizPageSecond visible={visible.secondPage} />
      <ContinueBox click={imageClick} onClick={continueBtnHandler}>
        CONTINUE
      </ContinueBox>
    </QuizContainer>
  );
};

export default QuizPage;
