import React from 'react';
import styled from 'styled-components';

const MainFooterContainer = styled.footer`
  flex: 1;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  width: 100vw;
  justify-content: center;
  background-color: rgb(183, 197, 139);
  @media screen and (max-width: 1023px), screen and (max-height: 800px) {
    padding: 10px;
    justify-content: space-between;
  };
`;

const ContentContainer = styled.div`
  margin: 15px 70px 0 70px;
  text-align: center;
  @media screen and (max-width: 1023px), screen and (max-height: 800px) {
    margin: 0;
    padding: 0 20px;
  };
  @media screen and (max-width: 460px) {
    margin: 0;
    padding: 0;
  };
`;

const TeamContainer = styled(ContentContainer)`
  text-align: left;
`;

const ContentTitle = styled.h3`
  margin-bottom: 10px;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: bold;
  @media screen and (max-width: 1023px), screen and (max-height: 800px) {
    display: none;
  };
  @media screen and (max-height: 600px) {
    display: none;
  };
`;

const LogoTitle = styled(ContentTitle)`
  @media screen and (max-width: 1023px), screen and (max-height: 800px) {
    font-size: 20px;
    display: block;
  };
  @media screen and (max-height: 600px) {
    display: none;
  };
`;

const Content = styled.a`
  font-size: 20px;
  :link {
    color: black;
    text-decoration: none;
  };
  :visited {
    color: black;
    text-decoration: none;
  };
  :hover {
    color: green;
    text-decoration: none;
  }
`;

const NameContent = styled(Content)`
  font-family: 'Nanum Pen Script', cursive;
  font-size: 25px;
  display: block;
  @media screen and (max-height: 600px) {
    display: inline-flex;
    font-size: 20px;
    margin-right: 5px;
  };
`;

const WikiLink = styled(Content)`
  font-size: 20px;
  padding-bottom: 5px;
  display: block;
  font-weight: bold;
  :hover {
    color: black;
  }
  @media screen and (max-width: 1023px), screen and (max-height: 800px) {
    display: none;
  };
`;

const Stack = styled.span`
  font-size: 20px;
  font-weight: bold;
  margin-right: 10px;
  font-family: 'Gowun Batang', serif;
  @media screen and (max-width: 1023px), screen and (max-height: 800px) {
    font-size: 15px;
  };
  @media screen and (max-height: 600px) {
    display: inline-flex;
    font-size: 17px;
    margin-right: 0;
  };
`;

const CloudiLogo = styled.img`
  height: 50px;
  width: 157px;
  @media screen and (max-height: 600px) {
    height: 21px;
    width: 50px;
  };
`;

const CloudiI = styled.img`
  height: 15px;
  width: 10px;
  @media screen and (max-width: 1023px), screen and (max-height: 800px) {
    height: 15px;
    width: 9px;
  };
`;

const ProfileImg = styled.img`
  height: 18px;
  width: 18px;
  border: 1px solid;
  margin: 0 6px;
  box-shadow: 1.3px 1.3px grey;
  border-color: rgb(102, 47, 13);
  @media screen and (max-width: 1023px), screen and (max-height: 800px) {
    margin: 0 3px 0 1px;
  };
`;

const MainFooter = () => {
  return (
    <MainFooterContainer>
      <ContentContainer>
        <LogoTitle>REPOS<CloudiI src='/images/i.png' />TORY</LogoTitle>
        <Content href='https://github.com/codestates/cloudi' rel='noreferrer' target='_blank'>
          <CloudiLogo src='/images/cloudiback.png' />
        </Content>
      </ContentContainer>
      <ContentContainer>
        <ContentTitle>
          ABOUT PROJECT
        </ContentTitle>
        <WikiLink href='https://github.com/codestates/cloudi/wiki' target='_blank'>
          Wiki
        </WikiLink>
        <WikiLink href='https://app.cloudcraft.co/view/a5809d6d-266e-4f4c-a907-a8162934a902?key=WfP-idtOuMGlQSzLQddN_A&interactive=true&embed=true' target='_blank'>
          Architecture
        </WikiLink>
        <WikiLink href='https://github.com/codestates/cloudi/wiki/Worklog-(WIP)' target='_blank'>
          Worklog
        </WikiLink>
      </ContentContainer>
      <TeamContainer>
        <ContentTitle>TEAM CHALLENGERS</ContentTitle>
        <NameContent href='https://github.com/spirited-hunger' target='_blank'><Stack>Full Stack</Stack><ProfileImg src='https://avatars.githubusercontent.com/u/79678662?v=4' />강성진</NameContent>
        <NameContent href='https://github.com/KimMinchan95' target='_blank'><Stack>Front End</Stack><ProfileImg src='https://avatars.githubusercontent.com/u/83770790?v=4' />김민찬</NameContent>
        <NameContent href='https://github.com/Lee-Duckwon' target='_blank'><Stack>Front End</Stack><ProfileImg src='https://avatars.githubusercontent.com/u/78307480?v=4' />이덕원</NameContent>
        <NameContent href='https://github.com/dankhan102' target='_blank'><Stack>Back End </Stack><ProfileImg src='https://avatars.githubusercontent.com/u/81903014?v=4' />심상국</NameContent>
      </TeamContainer>
    </MainFooterContainer>
  );
};

export default MainFooter;
