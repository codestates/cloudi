import { useState } from 'react';
import styled from 'styled-components';
import QuizPageFirst from './QuizPageFirst';

const QuizContainer = styled.div`
  padding-top: 95px;
  height: 100vh;
  display: flex;
  align-items: center;
`;

const QuizContent = styled.div`
  //border: 2px solid darkgreen;
  flex: 1;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const QuizHeadline = styled.div`
  color: #92929c;
  font-size: 0.9rem;
  margin-bottom: 20px;
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

const QuizTitle = styled.div`
  margin: 100px 0 40px 0;
  font-size: 1.3rem;
  color: #787887;
`;

const ContinueBox = styled.div`
  color: white;
  background-color: #b7c58b;
  width: 5%;
  padding: 0.5%;
  text-align: center;
  margin-top: 100px;
  :hover {
    cursor: pointer;
    background-color: #97a371;
  }

`;
const QuizPage = () => {
  const [image, setImage] = useState({
    spring: '/images/spring_black.png',
    summer: '/images/summer_black.png',
    fall: '/images/fall_black.png',
    winter: '/images/winter_black.png'
  });
  const quizImageHandler = (key) => (e) => {
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

  return (
    <QuizContainer>
      <QuizContent>
        <QuizHeadline>INCENSE QUIZ</QuizHeadline>
        <SequenceContainer>
          <SequenceBox />
          <SequenceBox />
          <SequenceBox />
          <SequenceBox />
        </SequenceContainer>
        <QuizTitle>좋아하는 계절을 선택해주세요</QuizTitle>
        <QuizPageFirst
          image={image}
          quizImageHandler={quizImageHandler}
        />
        <ContinueBox>CONTINUE</ContinueBox>
      </QuizContent>
    </QuizContainer>
  );
};

export default QuizPage;
