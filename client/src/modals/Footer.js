import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  position: fixed;
  display: flex;
  bottom: 0;
  width: 100%;
  padding: 20px 0;
  background-color: rgb(183, 197, 139);
  justify-content: center;
  @media screen and (max-width: 1023px) {
    display: block;
  }
`;

const TeamName = styled.div`
  font-weight: bold;
  @media screen and (max-width: 1023px) {
    text-align: center;
  }
`;

const TeamMember = styled.div`
  position: absolute;
  right: 30px;
  text-align: right;
  @media screen and (max-width: 1023px) {
    position: static;
    text-align: center;
    padding-bottom: 20px;
  }
`;

const Name = styled.a`
  padding: 0 5px;
  :link {
    color: rgb(29, 52, 71);
    text-decoration: none;
    border: rgba(75, 112, 253, 0.3) solid;
    border-width: 0 0 6px 0;
    @media screen and (max-width: 1023px) {
      color: black;
      border: none;
    }
  }
  :visited {
    color: rgb(29, 52, 71);
    text-decoration: none;
    border: rgba(75, 112, 253, 0.3) solid;
    border-width: 0 0 6px 0;
    @media screen and (max-width: 1023px) {
      color: black;
      border: none;
    }
  }
`;

const Footer = () => {
  if (window.location.pathname === '/') {
    return null;
  }
  return (
    <FooterContainer>
      <TeamMember>
        <Name href='https://github.com/spirited-hunger' target='_blank'>
          강성진
        </Name>
        <Name href='https://github.com/KimMinchan95' target='_blank'>
          김민찬
        </Name>
        <Name href='https://github.com/dankhan102' target='_blank'>
          심상국
        </Name>
        <Name href='https://github.com/Lee-Duckwon' target='_blank'>
          이덕원
        </Name>
      </TeamMember>
      <TeamName>@ team challengers final project 2021</TeamName>
    </FooterContainer>
  );
};

export default Footer;
