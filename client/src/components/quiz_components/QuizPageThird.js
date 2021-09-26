import styled from 'styled-components';

const QuizThirdContainer = styled.div`
  display: ${(props) => (props.visible ? 'flex' : 'none')};
`;

const QuizPageThird = ({ visible }) => {
  return <QuizThirdContainer visible={visible}>세번째</QuizThirdContainer>;
};

export default QuizPageThird;
