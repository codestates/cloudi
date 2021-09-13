import React from 'react';
import styled from 'styled-components';

const NavBar = styled.nav`
  position: fixed;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid;
  background-color: rgba(255, 255, 255, 0);
`;

const NavLogo = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const NavMenu = styled.ul`
  display: flex;
  height: 90px;
`;

const MenuList = styled.li`
  padding: 0 20px;
  font-size: 20px;
  line-height: 90px;
  font-weight: bold;
  transition: all 0.9s;
  background: linear-gradient(270deg, rgba(251, 220, 163, 1), rgba(251, 220, 163, 1), rgba(251, 220, 163, 0), rgba(251, 220, 163, 0));
  background-size: 300% 300%;
  :hover {
    cursor: pointer;
    background-position: 100% 50%;
  }
`;

const CloudiLogo = styled.img`
  height: 50px;
  width: 140px;
  margin: 20px 0 20px 30px;
  :hover {
    cursor: pointer;
    transition: all 0.7s;
    filter: opacity(0.5) drop-shadow(0 0 0 rgba(99, 84, 58, 1));
  }
`;

const IconContainer = styled.div`
  padding: 0 10px 0 5px;
`;

const Icon = styled.img`
  margin: 0 15px;
  height: 35px;
  width: 35px;
  :hover {
    cursor: pointer;
    transition: all 0.7s;
    filter: opacity(0.5) drop-shadow(0 0 0 rgba(99, 84, 58, 1));
  }
`;

const Header = () => {
  return (
    <>
      <NavBar>
        <NavLogo>
          <CloudiLogo src='/images/cloudi.png' />
        </NavLogo>
        <NavMenu>
          <MenuList>INCENSE</MenuList>
          <MenuList>QUIZ</MenuList>
          <MenuList>CUSTOMIZE</MenuList>
        </NavMenu>
        <IconContainer>
          <Icon src='/images/cart.png' />
          <Icon src='/images/user.png' />
        </IconContainer>
      </NavBar>
    </>
  );
};

export default Header;
