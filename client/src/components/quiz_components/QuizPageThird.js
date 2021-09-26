import styled from 'styled-components';

const QuizThirdContainer = styled.div`
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  animation: 0.7s ease-in-out second;
  @keyframes second {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Image = styled.div`
  margin-bottom: 15px;
  width: 220px;
  height: 200px;
  background-image: url(${(props) => props.url});
  background-size: contain;
  background-repeat: no-repeat;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 500px;
`;

const BtnContent = styled.div`
  padding: 13px;
  border: 2px solid;
  border-color: #787887;
  :hover {
    border-color: #f09490;
  }
`;

const QuizPageThird = ({ visible, setImageClick }) => {
  return (
    <QuizThirdContainer visible={visible}>
      <Image />
      <BtnContainer>
        <BtnContent>감성적인 편이다</BtnContent>
        <BtnContent>이성적인 편이다</BtnContent>
      </BtnContainer>
    </QuizThirdContainer>
  );
};

export default QuizPageThird;
