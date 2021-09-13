import React, { useState } from 'react';
import styled from 'styled-components';

const NavBar = styled.nav`
  position: fixed;
  display: flex;
  width: 100vw;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid;
  background-color: rgba(255, 255, 255, 0);
  @media screen and (max-width: 1023px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const NavLogo = styled.div`
  flex: 1;
  align-items: center;
`;

const NavMenu = styled.ul`
  display: flex;
  height: 95px;
  @media screen and (max-width: 1023px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: auto;
    display: ${props =>
      props.menu ? 'block' : 'none'};
  }
`;

const MenuList = styled.li`
  padding: 0 20px;
  font-size: 20px;
  line-height: 95px;
  font-weight: bold;
  background: linear-gradient(270deg, rgba(222, 253, 179, 1), rgba(222, 253, 179, 1), rgba(222, 253, 179, 0), rgba(222, 253, 179, 0));
  background-size: 300% 300%;
  :hover {
    cursor: pointer;
    background-position: 100% 50%;
  }
  @media screen and (max-width: 1023px) {
    width: 100%;
    text-align: center;
  }
`;

const MobileMenuList = styled(MenuList)`
  @media screen and (min-width: 1024px) {
    display: none;
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
    <>
      <NavBar>
        <NavLogo>
          <CloudiLogo src='/images/cloudi.png' />
        </NavLogo>
        <NavMenu menu={menu}>
          <MobileMenuList>SIGN UP</MobileMenuList>
          <MobileMenuList>LOG IN</MobileMenuList>
          <MenuList>INCENSE</MenuList>
          <MenuList>QUIZ</MenuList>
          <MenuList>CUSTOMIZE</MenuList>
          <MobileMenuList>ORDER</MobileMenuList>
        </NavMenu>
        <IconContainer>
          <Icon src='/images/cart.png' />
          <Icon src='/images/user.png' />
        </IconContainer>
        <MenuIcon src='/images/menu.png' onClick={handleClickMenu} />
      </NavBar>
    </>
  );
};

export default Header;
