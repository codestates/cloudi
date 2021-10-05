import React from 'react';
import styled from 'styled-components';

const StyledLoadingIndicator = styled.section`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  /* background: rgba(0, 0, 0, 0.10); */
  background: linear-gradient(35deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1));
  height: 100vh;
  width: 100vw;

  z-index: 1100;
`;

const Text = styled.span`
  font-weight: bold;
  color: #616161;
  margin-top: -40px;
  font-size: 1.5em;
  z-index: 1100;
  
  animation: pulse-animation 2s infinite;
  @keyframes pulse-animation {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.2;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const LoadingIndicator = ({ text, isLoading }) => {
  return (
    <StyledLoadingIndicator isLoading={isLoading}>
      <img src='/images/CloudyLoading.gif' alt='Loading...' width='200' height='200' />
      <Text>{text}</Text>
    </StyledLoadingIndicator>
  );
};

export default LoadingIndicator;
