import React from 'react';
import styled from 'styled-components';
import MainFooter from './MainFooter';

const OtherPagesContainer = styled.section`
  background-color: rgb(229, 232, 225);
`;

const PageContainer = styled.section`
  display:flex ;
  height: 100vh;
  width: 100vw;
  scroll-snap-align: start;
`;

const FirstPageContainer = styled(PageContainer)``;

const QuizVideo = styled.video`
  flex: 1;
  background-color: white;
  position: relative;
`;

const QuizDesc = styled.p`
  flex: 1;
  position: relative;
  font-size: 20px;
`;

const SecondPageContiner = styled(PageContainer)``;

const ThirdPageContainer = styled(PageContainer)``;

const LastPageContainer = styled(PageContainer)`
  flex-direction: column;
`;

const LastPageContent = styled.article`
  flex: 15;
  background-color: rgb(229, 232, 225);
`;

const OtherPages = () => {
  return (
    <OtherPagesContainer>
      <FirstPageContainer>
        <QuizVideo />
        <QuizDesc>
          제임스웍스는 세계 유명<br />향수에 버금가는<br />프리미엄급 향료를<br />사용하여 의류 전체에서<br />깊고 은은한 향을 그윽하게<br />풍겨줍니다
        </QuizDesc>
      </FirstPageContainer>
      <SecondPageContiner>
        2
      </SecondPageContiner>
      <ThirdPageContainer>
        3
      </ThirdPageContainer>
      <LastPageContainer>
        <LastPageContent>
          4
        </LastPageContent>
        <MainFooter />
      </LastPageContainer>
    </OtherPagesContainer>
  );
};

export default OtherPages;
