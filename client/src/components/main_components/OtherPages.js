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

const FirstPageContainer = styled(PageContainer)`
  display: flex;
`;

const VideoContainer = styled.article`
  flex: 1.4;
  text-align: center;
  padding: 0 2%;
`;

const Video = styled.video`
  position: relative;
  width: 90%;
  height: auto;
  border: 2px solid;
  border-radius: 10px;
  box-shadow: 5px 5px 5px 5px gray;
  top: 30%;
`;

const DescContainerRight = styled.article`
  flex: 1;
  display: table;
  padding: 0 2%;
  text-align: left;
`;

const DescContainerLeft = styled(DescContainerRight)`
  text-align: right;
`;

const Title = styled.h2`
  display: table-cell;
  vertical-align: middle;
  position: relative;
  font-size: 26.8px;
  font-weight: bold;
`;

const Desc = styled.p`
  margin-top: 10px;
  font-size: 17.9px;
  font-weight: normal;
`;

const SecondPageContiner = styled(PageContainer)``;

const ThirdPageContainer = styled(PageContainer)``;

const LastPageContainer = styled(PageContainer)`
  flex-direction: column;
`;

const LastPageContent = styled.article`
  display: flex;
  flex: 15;
  background-color: rgb(229, 232, 225);
`;

const Button = styled.button`
`;

const LastPagePictureContainer = styled.article`
  flex: 2;
`;

const LastPageDescContainer = styled.article`
  flex: 3;
`;

const OtherPages = () => {
  return (
    <OtherPagesContainer>
      <FirstPageContainer>
        <VideoContainer>
          <Video autoPlay muted loop>
            <source src='/videos/sample.mp4' type='video/mp4' />
          </Video>
        </VideoContainer>
        <DescContainerRight>
          <Title>
            여러분의 인센스 취향을 알아보세요
            <Desc>
              인센스 스틱 퀴즈를 풀어보면서 여러분의 취향을 알아<br />
              갈 수 있습니다.
            </Desc>
            <Button>퀴즈풀러가기</Button>
          </Title>
        </DescContainerRight>
      </FirstPageContainer>
      <SecondPageContiner>
        <DescContainerLeft>
          <Title>
            여러분의 인센스 취향을 알아보세요
            <Desc>
              인센스 스틱 퀴즈를 풀어보면서 여러분의 취향을 알아<br />
              갈 수 있습니다.
            </Desc>
            <Button>커스텀하러가기</Button>
          </Title>
        </DescContainerLeft>
        <VideoContainer>
          <Video autoPlay muted loop>
            <source src='/videos/sample.mp4' type='video/mp4' />
          </Video>
        </VideoContainer>
      </SecondPageContiner>
      <ThirdPageContainer>
        <VideoContainer>
          <Video autoPlay muted loop>
            <source src='/videos/sample.mp4' type='video/mp4' />
          </Video>
        </VideoContainer>
        <DescContainerRight>
          <Title>
            여러분의 인센스 취향을 알아보세요
            <Desc>
              인센스 스틱 퀴즈를 풀어보면서 여러분의 취향을 알아<br />
              갈 수 있습니다.
            </Desc>
            <Button>주문하러가기</Button>
          </Title>
        </DescContainerRight>
      </ThirdPageContainer>
      <LastPageContainer>
        <LastPageContent>
          <LastPagePictureContainer>
            1
          </LastPagePictureContainer>
          <LastPageDescContainer>
            2
          </LastPageDescContainer>
        </LastPageContent>
        <MainFooter />
      </LastPageContainer>
    </OtherPagesContainer>
  );
};

export default OtherPages;
