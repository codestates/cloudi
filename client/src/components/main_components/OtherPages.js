import React from 'react';
import styled from 'styled-components';
import MainFooter from './MainFooter';
import { Link } from 'react-router-dom';

const OtherPagesContainer = styled.section`
  background-color: rgba(229, 232, 225, 0.8);
`;

const PageContainer = styled.section`
  display: flex ;
  height: 100vh;
  width: 100vw;
  scroll-snap-align: start;
  padding-top: 95px;
  :nth-child(2n-1) {
    background-color: #F5F5F5;
  };
  @media screen and (max-width: 1023px) {
    display: block;
  };
`;

const VideoContainer = styled.article`
  flex: 1.4;
  text-align: center;
  padding: 0 2%;
  @media screen and (max-width: 1023px) {
    padding-top: 10vh;
    @media screen and (max-height: 800px) {
      padding-top: 10vh;
    };
  };
`;

const Video = styled.img`
  position: relative;
  width: 80%;
  height: auto;
  border: 2px solid;
  box-shadow: 5px 5px 5px 5px gray;
  top: 20%;
  :hover{
    z-index: 1000;
    transition: 0.5s;
    transform: scale(1.2);
    border: 3px solid rgb(45, 109, 22);
    border-radius: 10px;
  };
  @media screen and (max-width: 1300px) {
    top: 25%;
  };
  @media screen and (max-height: 800px) {
    height: 60%;
    width: auto;
  };
  @media screen and (max-width: 1023px) {
    width: 60%;
    @media screen and (max-height: 800px) {
      height: 26vh;
      width: auto;
    };
  };
`;

const DescContainerRight = styled.article`
  flex: 1;
  display: table;
  padding: 0 2%;
  text-align: left;
  @media screen and (max-width: 1023px) {
    display: block;
    padding: 7vh 0 0 0;
  };
`;

const DescContainerLeft = styled(DescContainerRight)`
  text-align: right;
`;

const Title = styled.h2`
  display: table-cell;
  vertical-align: middle;
  position: relative;
  font-size: 1.77vw;
  font-weight: bold;
  @media screen and (max-height: 800px) {
    font-size: 3.5vh;
  };
  @media screen and (max-width: 1023px) {
    font-size: 3vw;
    text-align: center;
    display: grid;
    place-content: center;
  };
`;

const Desc = styled.p`
  margin-top: 10px;
  font-size: 1.2vw;
  font-weight: normal;
  line-height: 1.3;
  @media screen and (max-height: 800px) {
    font-size: 2.3vh;
  };
  @media screen and (max-width: 1023px) {
      text-align: center;
      font-size: 2.5vw;
  };
`;

const SecondPageContiner = styled(PageContainer)`
  flex-direction: row-reverse;
  @media screen and (max-width: 1023px) {
    display: block;
  };
`;

const Button = styled.button`
  border-radius: 5px; 
  border: 3px solid;
  background-color: rgba(255, 255, 255, 0);
  border-color: rgb(183, 197, 139);
  color: rgb(183, 197, 139);
  font-size: 1.8vw;
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
  @media screen and (max-height: 1050px) {
    font-size: 3vh;
    height: 7vh;
    width: 30vh;
    margin: 2vh auto;
  };
`;

const NumberLeft = styled.p`
  position: relative;
  font-family: 'Nanum Pen Script', cursive;
  font-size: 4vw;
  z-index: 10;
  color: green;
  top: 14%;
  left: 9%;
  @media screen and (max-width: 1300px) {
    display: none;
  };
`;

const NumberRight = styled(NumberLeft)`
  left: -49.2%;
`;

const LastPageContainer = styled(PageContainer)`
  margin-top: 95px;
  flex-direction: column;
  scroll-snap-align: end;
  @media screen and (max-width: 1023px) {
    display: flex;
  };
`;

const LastPageContent = styled.article`
  display: flex;
  flex: 15;
  @media screen and (max-width: 1023px) {
    flex-direction: column;
  };
`;

const LastPagePictureContainer = styled.article`
  flex: 3;
  text-align: center;
  padding-top: 10vh;
  @media screen and (max-width: 1023px) {
    padding-top: 0;
    flex: 1.7;
  };
`;

const LastPageDescContainer = styled.article`
  flex: 2;
  margin-top: 13vh;
  @media screen and (max-width: 1023px) {
    flex: 2.5;
    text-align: center;
    margin: 2vw 0;
  };
`;

const IncenseGrass = styled.img`
  width: 70%;
  height: auto;
  @media screen and (max-width: 1023px) {
    height: 30vh;
    width: auto;
  };
`;

const CloudiSaying = styled.h2`
  font-weight: bold;
  font-size: 1.3vw;
  line-height: 20px;
  @media screen and (max-width: 1023px) {
    font-size: 3vh;
    line-height: 4vh;
  };
`;

const CloudiDesc = styled.p`
  padding: 1vw 0;
  font-size: 1vw;
  line-height: 1.5vw;
  @media screen and (max-width: 1023px) {
    font-size: 2vh;
    line-height: 2.5vh;
  };
`;

const NavContainer = styled.section`
  flex: 2;
  text-align: center;
  padding-top: 13vh;
  @media screen and (max-width: 1023px) {
    display: none;
  };
`;

const NavBox = styled.div`
  height: 16vw;
  width: 50%;
  border: 3px outset;
  border-radius: 10px;
  margin: 0 auto;
`;

const PageLink = styled.a`
  display: block;
  font-size: 1.5vw;
  margin-top: 2vw;
  text-decoration: none;
  color: rgb(100, 74, 26);
  font-weight: bold;
  :hover{
    text-decoration: underline overline rgb(8, 102, 0) 7px;
  }
`;

const OtherPages = () => {
  return (
    <OtherPagesContainer>
      <PageContainer id='quiz'>
        <NumberLeft>01</NumberLeft>
        <VideoContainer>
          <Video src='/videos/quiz.gif'/>
        </VideoContainer>
        <DescContainerRight>
          <Title>
            여러분의 인센스 취향을 알아보세요
            <Desc>
              지금 나의 기분에 맞는 향은 무엇일까요? 인센스 스틱<br />
              퀴즈를 풀면서 여러분의 취향을 알아 갈 수 있습니다.<br />
              다양한 인센스 스틱중에서 오직 여러분을 위한 인센스<br />
              스틱을 찾아보세요.
            </Desc>
            <Link to='/quiz'>
              <Button>퀴즈풀러가기</Button>
            </Link>
          </Title>
        </DescContainerRight>
      </PageContainer>
      <SecondPageContiner id='customize'>
        <NumberRight>02</NumberRight>
        <VideoContainer>
          <Video src='/videos/incense.gif'/>
        </VideoContainer>
        <DescContainerLeft>
          <Title>
            다양한 인센스를 구경하고 주문하세요
            <Desc>
              퀴즈를 통해서 찾으신 인센스를 주문하시고 싶으신가요?<br />
              퀴즈를 풀기 전 어떤 인센스들이 있는지 궁금하신가요?<br />
              인센스 페이지에 정말 다양한 향들이 준비되어 있습니다. <br />
              나만의 공간을 힐링장소로 바꿔보세요.
            </Desc>
            <Link to='/incense'>
              <Button>인센스보러가기</Button>
            </Link>
          </Title>
        </DescContainerLeft>
      </SecondPageContiner>
      <PageContainer id='order'>
        <NumberLeft>03</NumberLeft>
        <VideoContainer>
          <Video src='/videos/customize.gif' />
        </VideoContainer>
        <DescContainerRight>
          <Title>
            여러분만의 홀더를 커스텀 해보세요
            <Desc>
              시중에 시판되는 평범한 디자인의 홀더는 싫으신가요? <br />
              cloudi에서는 여러분만의 홀더를 제작할 수 있습니다.<br />
              cloudi에서 투박한 홀더 디자인을 벗어나 여러분만의<br />
              독창적인 홀더를 제작 해보세요.
            </Desc>
            <Link to='/customize'>
              <Button>커스텀하러가기</Button>
            </Link>
          </Title>
        </DescContainerRight>
      </PageContainer>
      <LastPageContainer>
        <LastPageContent>
          <LastPagePictureContainer>
            <IncenseGrass src='/images/incenseGrass.jpg' />
          </LastPagePictureContainer>
          <LastPageDescContainer>
            <CloudiSaying>
              "향기는 기억의 열쇠이다"
            </CloudiSaying>
            <CloudiDesc>
              클라우디는 나만의 시간, 나만의 공간을 향기로 물들여 모든 기억을<br />
              매력적인 추억으로 남게 해줍니다.<br />
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
          <NavContainer>
            <NavBox>
              <PageLink href='#landing'>처음으로</PageLink>
              <PageLink href='#quiz'>퀴즈 다시보기</PageLink>
              <PageLink href='#customize'>커스텀 다시보기</PageLink>
              <PageLink href='#order'>주문 다시보기</PageLink>
            </NavBox>
          </NavContainer>
        </LastPageContent>
        <MainFooter />
      </LastPageContainer>
    </OtherPagesContainer>
  );
};

export default OtherPages;
