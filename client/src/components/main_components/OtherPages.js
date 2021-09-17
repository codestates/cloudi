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
  box-shadow: 5px 5px 5px 5px gray;
  top: 30%;
`;

const DescContainerRight = styled.article`
  flex: 1;
  display: table;
  padding-left: 10px;
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
  border-radius: 5px; 
  border: 3px solid;
  background-color: rgba(255, 255, 255, 0);
  border-color: rgb(183, 197, 139);
  color: rgb(183, 197, 139);
  font-size: 30px;
  font-weight: bold;
  margin: 20px 5px 0 5px;
  transition-duration: 0.7s;
  padding: 3px 7px;
  :hover {
    cursor: pointer;
    background-color: rgb(183, 197, 139);
    color: white;
    box-shadow: -5px -5px -5px rgb(100, 100, 100);
    box-shadow: 2px 2px 2px gray;
  }
  :active {
    box-shadow: inset 5px 5px 5px rgb(150, 160, 120);
  }
`;

const NumberLeft = styled.p`
  position: relative;
  font-family: 'Nanum Pen Script', cursive;
  font-size: 4.5vw;
  z-index: 10;
  color: green;
  top: 24.5%;
  left: 7.5%;
`;

const NumberRight = styled(NumberLeft)`
  left: 49%;
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
        <NumberLeft>01</NumberLeft>
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
        <NumberRight>02</NumberRight>
        <DescContainerLeft>
          <Title>
            여러분만의 홀더를 커스텀 해보세요.
            <Desc>
              다양한 커스텀을 통해 여러분 만의 홀더를 제작할 수<br />
              있습니다
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
        <NumberLeft>03</NumberLeft>
        <VideoContainer>
          <Video autoPlay muted loop>
            <source src='/videos/sample.mp4' type='video/mp4' />
          </Video>
        </VideoContainer>
        <DescContainerRight>
          <Title>
            자신이 선택한 제품을 직접 즐겨보세요
            <Desc>
              주문을 통해 자신의 취향에 맞는 인센스 스틱과 직접 제작<br />
              하신 홀더를 만나 볼 수 있습니다.
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
