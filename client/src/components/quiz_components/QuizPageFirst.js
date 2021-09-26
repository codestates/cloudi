import styled from 'styled-components';

const QuizFirstContainer = styled.div`
  display: ${(props) => (props.visible ? 'flex' : 'none')};
`;

const QuizFirstContent = styled.div`
  margin: 15px;
  background-image: url(${(props) => props.url});
  background-size: contain;
  background-repeat: no-repeat;
  transition: all 0.3s ease 0s;
  width: 130px;
  height: 140px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    margin: 5px;
    width: 100px;
    height: 110px;
  }
`;

const QuizPageFirst = ({ visible, image, quizImageHandler, setImageClick }) => {
  const SEASON = ['spring', 'summer', 'fall', 'winter'];
  const imageClickHandler = (season) => {
    quizImageHandler(season);
    setImageClick(true);
  };
  return (
    <QuizFirstContainer visible={visible}>
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
