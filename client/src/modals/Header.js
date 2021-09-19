import React, { useState } from 'react';
import styled from 'styled-components';

import { Link, NavLink } from 'react-router-dom';

const NavBar = styled.nav`
  position: fixed;
  display: flex;
  z-index: 1000;
  width: 100vw;
  height: 95px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid;
  background-color: ${props =>
    props.menu ? 'white' : 'rgba(255, 255, 255, 0)'};
  .active {
    background-color: rgb(183, 197, 139);
  }
  :hover {
    background-color: white;
  };
  @media screen and (max-width: 1023px) {
    flex-direction: column;
    align-items: flex-start;
  };
`;

const NavLogo = styled.div`
  flex: 1;
  align-items: center;
`;

const NavMenu = styled.ul`
  display: flex;
  height: 93px;
  @media screen and (max-width: 1023px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: auto;
    display: ${props =>
      props.menu ? 'block' : 'none'};
    border-top: ${props =>
      props.menu ? '2px solid' : 'none'};
  }
`;

const MenuList = styled.li`
  padding: 0 20px;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  line-height: 93px;
  font-weight: 600;
  transition-property: background;
  transition-duration: 0.8s;
  transition-timing-function: ease-out;
  background: linear-gradient(270deg, rgba(92, 112, 5, 1), rgba(92, 112, 5, 1), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0));
  background-size: 300% 300%;
  :hover {
    cursor: pointer;
    background-position: 100% 50%;
  }
  @media screen and (max-width: 1023px) {
    width: 100%;
    text-align: center;
    background-color: white;
      @media screen and (max-height: 665px) {
      height: 14vh;
      line-height: 14vh;
    };
  }
`;

const MobileMenuList = styled(MenuList)`
  @media screen and (min-width: 1023px) {
    display: none;
  }
`;

const CloudiLogo = styled.img`
  height: 50px;
  width: 140px;
  margin: 20px 0 20px 30px;
  :hover {
    cursor: pointer;
    transition: all 0.8s;
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
  @media screen and (max-width: 1023px) {
    display: none;
  }
`;

const MenuIcon = styled.img`
  display: none;
  height: 50px;
  width: 50px;
  position: absolute;
  right: 0px;
  margin: 20px 25px 0 0;
  :hover {
    cursor: pointer;
    transition: all 0.7s;
    filter: opacity(0.5) drop-shadow(0 0 0 rgba(99, 84, 58, 1));
  }
  @media screen and (max-width: 1023px) {
    display: block;
  }
`;

const Header = () => {
  const [menu, setMenu] = useState(false);

  const handleClickMenu = () => {
    setMenu(!menu);
  };

  return (
    <NavBar menu={menu}>
      <NavLogo>
        <Link to='/'><CloudiLogo src='/images/cloudi.png' /></Link>
      </NavLogo>
      <NavMenu menu={menu}>
        <MobileMenuList>SIGN UP</MobileMenuList>
        <MobileMenuList>LOG IN</MobileMenuList>
        <MobileMenuList>ORDER</MobileMenuList>
        <NavLink to='/incense' style={{ textDecoration: 'none', color: 'black' }}>
          <MenuList>INCENSE</MenuList>
        </NavLink>
        <NavLink to='/quiz' style={{ textDecoration: 'none', color: 'black' }}>
          <MenuList>QUIZ</MenuList>
        </NavLink>
        <NavLink to='/customize' style={{ textDecoration: 'none', color: 'black' }}>
          <MenuList>CUSTOMIZE</MenuList>
        </NavLink>
      </NavMenu>
      <IconContainer>
        <Icon src='/images/cart.png' />
        <Icon src='/images/user.png' />
      </IconContainer>
      <MenuIcon src='/images/menu.png' onClick={handleClickMenu} />
    </NavBar>
  );
};

export default Header;
