import styled from 'styled-components';

const QuizFirstContainer = styled.div`
  display: flex;
`;

const QuizFirstContent = styled.div`
  //background-color: darkolivegreen;
  margin: 15px;
  background-image: url(${(props) => props.url});
  background-size: contain;
  background-repeat: no-repeat;
  width: 130px;
  height: 140px;
  cursor: pointer;
`;

const QuizPageFirst = ({ visible, image, quizImageHandler }) => {
  return (
    <>
      <QuizFirstContainer>
        <QuizFirstContent url={image.spring} onClick={quizImageHandler('spring')} />
        <QuizFirstContent url={image.summer} onClick={quizImageHandler('summer')} />
        <QuizFirstContent url={image.fall} onClick={quizImageHandler('fall')} />
        <QuizFirstContent url={image.winter} onClick={quizImageHandler('winter')} />
      </QuizFirstContainer>
    </>
  );
};

export default QuizPageFirst;
