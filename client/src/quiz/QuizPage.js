import styled from 'styled-components';


const QuizContainer = styled.div`
  padding-top: 95px;
  display: flex;
`;

const QuizeBackLeft = styled.div`
flex: 1;
flex-shrink: 1;
//background-color: gray;
`;

const QuizeBackRight = styled.div`
flex: 1;
flex-shrink: 1;
//background-color: gray;

`;

const QuizeBackCenter = styled.div`
  //background-color: darkgreen;
  padding-top: 340px;
  color: #787887;
  flex: 1;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const SequenceContainer = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

`;

const QuizTitle = styled.div`
  padding-top: 45px;
  font-size: 1.3rem;
`;

const SequenceBox = styled.div`
  margin: 5px;
  width: 150px;
  height: 15px;
  background-color: #b7c58b;
`;

const QuizBtnBox = styled.div`
  padding-top: 25px;
  display: flex;
`;
const QuizBtnContent = styled.div`
  //background-color: darkolivegreen;
  margin: 15px;
  background-image: url(${(props) => props.url[0]});
  background-size: contain;
  background-repeat: no-repeat;
  width: 130px;
  height: 140px;
  :hover {
    background-image: url(${(props) => props.url[1]});
  }
`;
const QuizPage = () => {
  return(
  <QuizContainer>
    <QuizeBackLeft />

    <QuizeBackCenter>
      INCENSE QUIZ

      <SequenceContainer>
        <SequenceBox />
        <SequenceBox />
        <SequenceBox />
        <SequenceBox />
      </SequenceContainer>

      <QuizTitle>좋아하는 계절을 선택해주세요</QuizTitle> 
      <QuizBtnBox>
        <QuizBtnContent url={['/images/spring_black.png', '/images/spring_green.png']}/>
        <QuizBtnContent url={['/images/summer_black.png', '/images/summer_green.png']}/>
        <QuizBtnContent url={['/images/fall_black.png', '/images/fall_green.png']}/>
        <QuizBtnContent url={['/images/snow_black.png', '/images/snow_green.png']}/>
      </QuizBtnBox>
    </QuizeBackCenter>

    <QuizeBackRight />
  </QuizContainer>
  )
};

export default QuizPage;
