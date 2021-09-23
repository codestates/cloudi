import React from 'react';
import styled from 'styled-components';
import MainFooter from './MainFooter';

const OtherPagesContainer = styled.section`
  background-color: rgba(229, 232, 225, 0.7);
`;

const PageContainer = styled.section`
  display: flex ;
  height: 100vh;
  width: 100vw;
  scroll-snap-align: start;
  padding-top: 95px;
  @media screen and (max-width: 1023px) {
    display: block;
  };
`;

const FirstPageContainer = styled(PageContainer)`
`;

const VideoContainer = styled.article`
  flex: 1.4;
  text-align: center;
  padding: 0 2%;
  @media screen and (max-width: 1023px) {
    padding-top: 20vh;
    @media screen and (max-height: 800px) {
      padding-top: 10vh;
    };
  };
`;

const Video = styled.video`
  position: relative;
  width: 80%;
  height: auto;
  border: 2px solid;
  box-shadow: 5px 5px 5px 5px gray;
  top: 30%;
  @media screen and (max-height: 800px) {
    height: 30vh;
    width: auto;
  };
`;

const DescContainerRight = styled.article`
  flex: 1;
  display: table;
  padding: 0 2%;
  text-align: left;
  @media screen and (max-width: 1023px) {
    display: block;
    padding: 3vh 0 0 0;
  };
`;

const DescContainerLeft = styled(DescContainerRight)`
  text-align: right;
`;

const Title = styled.h2`
  display: table-cell;
  vertical-align: middle;
  position: relative;
  font-size: 25px;
  font-weight: bold;
  @media screen and (max-width: 1023px) {
    text-align: center;
    display: grid;
    place-content: center;
  };
  @media screen and (max-height: 800px) {
    font-size: 3.5vh;
  };
`;

const Desc = styled.p`
  margin-top: 10px;
  font-size: 16.7px;
  font-weight: normal;
  @media screen and (max-height: 800px) {
    font-size: 2.3vh;
  };
  @media screen and (max-width: 1023px) {
      text-align: left;
  };
`;

const SecondPageContiner = styled(PageContainer)`
  flex-direction: row-reverse;
  @media screen and (max-width: 1023px) {
    display: block;
  };
`;

const ThirdPageContainer = styled(PageContainer)`
`;

const Button = styled.button`
  border-radius: 5px; 
  border: 3px solid;
  background-color: rgba(255, 255, 255, 0);
  border-color: rgb(183, 197, 139);
  color: rgb(183, 197, 139);
  font-size: 30px;
  font-weight: bold;
  margin-top: 20px;
  :hover {
    cursor: pointer;
    background-color: rgb(183, 197, 139);
    color: white;
    box-shadow: 2px 2px 2px gray;
  };
  :active {
    box-shadow: inset 5px 5px 5px rgb(150, 160, 120);
  };
  @media screen and (max-width: 1023px) {
    margin: 40px;
    font-size: 2.5vh;
    width: 40vw;
    margin: 2vh auto;
  };
  @media screen and (max-height: 800px) {
    font-size: 3vh;
    height: 7vh;
    width: 30vh;
    margin: 2vh auto;
  };
`;

const NumberLeft = styled.p`
  position: relative;
  font-family: 'Nanum Pen Script', cursive;
  font-size: 8vh;
  z-index: 10;
  color: green;
  top: 24.5%;
  left: 7.5%;
  @media screen and (max-width: 1023px) {
    display: none;
  };
`;

const NumberRight = styled(NumberLeft)`
  left: -51%;
`;

const LastPageContainer = styled(PageContainer)`
  padding-top: 95px;
  flex-direction: column;
  scroll-snap-align: end;
  @media screen and (max-width: 1023px) {
    display: flex;
  };
`;

const LastPageContent = styled.article`
  display: flex;
  flex: 15;
  background-color: rgb(229, 232, 225);
  @media screen and (max-width: 1023px) {
    flex-direction: column;
  };
`;

const LastPagePictureContainer = styled.article`
  flex: 2;
  text-align: center;
  padding-top: 5%;
  @media screen and (max-width: 1023px) {
    padding-top: 0;
  };
`;

const LastPageDescContainer = styled.article`
  flex: 3;
  margin-top: 5vw;
  @media screen and (max-width: 1023px) {
    text-align: center;
  };
`;

const IncenseGrass = styled.img`
  width: 70%;
  height: auto;
  @media screen and (max-width: 1023px) {
    height: 25vh;
    width: auto;
  };
`;

const CloudiSaying = styled.h2`
  font-weight: bold;
  font-size: 1.6vw;
  line-height: 40px;
  @media screen and (max-width: 1023px) {
    font-size: 3vh;
    line-height: 4vh;
  };
`;

const CloudiDesc = styled.p`
  padding: 1vw 0 2vw 0;
  font-size: 1.2vw;
  line-height: 1.5vw;
  @media screen and (max-width: 1023px) {
    font-size: 2vh;
    line-height: 2.5vh;
  };
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
              갈 수 있습니다. <br />
              다양한 인센스 스틱중에서 오직 여러분을 위한 인센스<br />
              스틱을 찾아보세요.
            </Desc>
            <Button>퀴즈풀러가기</Button>
          </Title>
        </DescContainerRight>
      </FirstPageContainer>
      <SecondPageContiner>
        <NumberRight>02</NumberRight>
        <VideoContainer>
          <Video autoPlay muted loop>
            <source src='/videos/sample.mp4' type='video/mp4' />
          </Video>
        </VideoContainer>
        <DescContainerLeft>
          <Title>
            여러분만의 홀더를 커스텀 해보세요
            <Desc>
              다양한 커스텀을 통해 여러분 만의 홀더를 제작할 수<br />
              있습니다.<br />
              cloudi에서 투박한 홀더 디자인에서 벗어나 독창적인<br />
              여러분만의 홀더를 제작할 해보세요.
            </Desc>
            <Button>커스텀하러가기</Button>
          </Title>
        </DescContainerLeft>
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
              하신 홀더를 만나 볼 수 있습니다.<br />
              커스텀 주문시 수작업으로 제작하는 홀더는 디테일한 컷팅<br />
              으로 홈인테리어로도 활용 가능합니다.
            </Desc>
            <Button>주문하러가기</Button>
          </Title>
        </DescContainerRight>
      </ThirdPageContainer>
      <LastPageContainer>
        <LastPageContent>
          <LastPagePictureContainer>
            <IncenseGrass src='/images/incenseGrass.jpg' />
          </LastPagePictureContainer>
          <LastPageDescContainer>
            <CloudiSaying>
              "향기는 우리 기억의 열쇠이다"
            </CloudiSaying>
            <CloudiDesc>
              클라우디는 나만의 시간, 나만의 공간을 향기로 물들여 모든 기억을 매력적인<br />
              추억으로 남게 해줍니다.<br />
              소중한 사람에게 고마움을 향으로 표현해 보세요.<br />
              지친 일상을 인센스로 힐링해 보세요.<br />
              그리고 하루의 마무리를 인센스와 함께하세요.
            </CloudiDesc>
            <CloudiSaying>
              "Scent is the key to our memories"
            </CloudiSaying>
            <CloudiDesc>
              cloudi imbues your time and your space with a fragrance that<br />
              will leave your memories as cherished ones.<br />
              Express how thankful you are to your precious people with scents.<br />
              Try to heal your tired daily life with incense.<br />
              And wrap up your day with incense.
            </CloudiDesc>
          </LastPageDescContainer>
        </LastPageContent>
        <MainFooter />
      </LastPageContainer>
    </OtherPagesContainer>
  );
};

export default OtherPages;
