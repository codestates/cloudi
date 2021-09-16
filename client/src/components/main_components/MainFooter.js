import React from 'react';
import styled from 'styled-components';

const MainFooterContainer = styled.footer`
  flex: 2;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  width: 100vw;
  justify-content: center;
  background-color: rgb(183, 197, 139);
  @media screen and (max-width: 1023px) {
    padding: 10px;
    justify-content: space-between; 
  };
`;

const ContentContainer = styled.div`
  margin: 15px 70px 0 70px;
  text-align: center;
  @media screen and (max-width: 1023px) {
    margin: 0;
    padding: 0 20px;
  };
`;

const ContentTitle = styled.h3`
  margin-bottom: 10px;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: bold;
  @media screen and (max-width: 1023px) {
    display: none;
  };
`;

const LogoTitle = styled(ContentTitle)`
  @media screen and (max-width: 1023px) {
    font-size: 25px;
    display: block;
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

const WikiLink = styled(Content)`
  font-size: 20px;
  padding-bottom: 5px;
  display: block;
  font-weight: bold;
  :hover {
    color: black;
  }
  @media screen and (max-width: 1023px) {
    display: none;
  };
`;

const Stack = styled.span`
  font-size: 20px;
  font-weight: bold;
  margin-right: 10px;
  @media screen and (max-width: 1023px) {
    font-size: 15px;
  };
`;

const CloudiLogo = styled.img`
  height: 50px;
  width: 157px;
`;

const CloudiI = styled.img`
  height: 15px;
  width: 10px;
  @media screen and (max-width: 1023px) {
    height: 19px;
    width: 13px;
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
          Wiki Home
        </WikiLink>
        <WikiLink href='https://app.cloudcraft.co/view/a5809d6d-266e-4f4c-a907-a8162934a902?key=WfP-idtOuMGlQSzLQddN_A&interactive=true&embed=true' target='_blank'>
          Architecture
        </WikiLink>
        <WikiLink href='https://github.com/codestates/cloudi/wiki/Worklog-(WIP)' target='_blank'>
          Worklog
        </WikiLink>
      </ContentContainer>
      <ContentContainer>
        <ContentTitle>TEAM CHALLENGERS</ContentTitle>
        <Stack>Full Stack</Stack>
        <Content href='https://github.com/spirited-hunger' target='_blank'>강성진</Content>
        <br />
        <Stack>Front End</Stack>
        <Content href='https://github.com/KimMinchan95' target='_blank'>김민찬</Content>
        <br />
        <Stack>Front End</Stack>
        <Content href='https://github.com/Lee-Duckwon' target='_blank'>이덕원</Content>
        <br />
        <Stack>Back End </Stack>
        <Content href='https://github.com/dankhan102' target='_blank'>심상국</Content>
      </ContentContainer>
    </MainFooterContainer>
  );
};

export default MainFooter;
