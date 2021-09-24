import { useState } from 'react';
import styled from 'styled-components';

const QuizThirdContainer = styled.div`
  display: ${(props) => (props.visible ? 'flex' : 'none')};
`;

const QuizThirdContent = styled.div``;
const QuizPageThird = () => {
  return <QuizThirdContainer>세번째</QuizThirdContainer>;
};

export default QuizPageThird;
