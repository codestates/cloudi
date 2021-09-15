import React from 'react';
import styled from 'styled-components';

const LandingPageContiner = styled.section`
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const MainSaying = styled.div`
  position: absolute;
  z-index: 10;
  letter-spacing: 4px;
  font-family: 'Nanum Pen Script', cursive;
  top: 20%;
  left: 50%;
  color: white;
  font-size: 2rem;
  writing-mode: vertical-rl;
  text-orientation: upright;
`;

const Arrow = styled.img`
  height: 30px;
  width: 30px;
  animation-name: arrow;
  animation-iteration-count: infinite;
  animation-direction : alternate;
  animation-duration: 2s;
  @keyframes arrow{
    from {transform: translateY(20px);}
    to {transform: translateY(35px);}
  };
`;

const MainImg = styled.div`
  background-image: url('./images/mainIncense.png');
  background-size: cover;
  height: 100%;
  width: 100%;
  background-position: 100% 100%;
`;

const LandingPage = () => {
  return (
    <LandingPageContiner>
      <MainSaying>
        오늘,당신의기분은어떤향인가요?
        <Arrow src='/images/arrowdown.png' />
      </MainSaying>
      <MainImg />
    </LandingPageContiner>
  );
};

export default LandingPage;
