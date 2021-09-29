import React from 'react';
import styled from 'styled-components';
import LandingPage from '../components/main_components/LandingPage';
import OtherPages from '../components/main_components/OtherPages';

const MainContainer = styled.main`
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-x: hidden;
`;

const Main = () => {
  return (
    <MainContainer>
      <LandingPage />
      <OtherPages />
    </MainContainer>
  );
};

export default Main;
