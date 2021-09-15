import React from 'react';
import styled from 'styled-components';

const OtherPagesContainer = styled.main`
  background-color: rgb(229, 232, 225);
`;

const PageContainer = styled.section`
  display:flex ;
  height: 100vh;
  width: 100vw;
`;

const FirstPageContainer = styled(PageContainer)``;

const QuizVideo = styled.video`
  flex: 1;
  background-color: white;
  position: relative;
`;

const QuizDesc = styled.div`
  flex: 1;
  position: relative;
  font-size: 20px;
`;

const SecondPageContiner = styled(PageContainer)``;

const ThirdPageContainer = styled(PageContainer)``;

const LastPageContainer = styled(PageContainer)``;

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
        4
      </LastPageContainer>
    </OtherPagesContainer>
  );
};

export default OtherPages;
