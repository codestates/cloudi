import React from 'react';
import styled, { keyframes } from 'styled-components';

const LandingPageContiner = styled.section`
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  scroll-snap-align: start;
  z-index: 1;
`;

const fadeIn = keyframes`
  from { opacity: 0;}
  to { opacity: 1;}
`;

const MainSaying = styled.h3`
  position: relative;
  z-index: 10;
  font-family: 'NanumMyungjo';
  letter-spacing: 10px;
  top: 20%;
  left: 50%;
  color: white;
  cursor: default;
  font-size: 20px;
  writing-mode: vertical-rl;
  text-orientation: upright;
  animation-duration: 4s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn}, slideDown;
  animation-fill-mode: forward;
  @keyframes slideDown{
    from {transform: translateY(-30px);}
    to {transform: translateY(0px);}
  };
  @media screen and (max-height: 800px) {
    margin-top: 95;
    font-size: 2vh;
  };
`;

const Arrow = styled.img`
  height: 25px;
  width: 25px;
  animation-name: arrow;
  animation-iteration-count: infinite;
  animation-duration: 2s;
  @keyframes arrow{
    from {transform: translateY(0px);}
    to {transform: translateY(7px);}
  };
  @media screen and (max-height: 800px) {
    height: 1.7vh;
    width: 1.7vh;
  };
`;

const MainImg = styled.div`
  background-image: url('./images/mainIncense.gif');
  background-size: cover;
  height: 100%;
  width: 100%;
  background-position: 100% 100%;
  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: foward;
`;

const LandingPage = () => {
  return (
    <LandingPageContiner id='landing'>
      <MainImg>
        <MainSaying>
          오늘, 당신의 기분은 어떤 향인가요?
          <Arrow src='/images/arrowdown.png' />
        </MainSaying>
      </MainImg>
    </LandingPageContiner>
  );
};

export default LandingPage;
