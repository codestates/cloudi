import React from 'react';
import styled from 'styled-components';

const NavBar = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid;
  background-color: rgba(255, 255, 255, 0);
`;

const NavLogo = styled.div`
  display: flex;
  align-items: center;
`;

const NavMenu = styled.ul`
  display: flex;
`;

const MenuList = styled.li`
  padding: 0 20px;
  font-size: 17px;
  font-weight: bold;
  :hover {
    cursor: pointer;
    background: linear-gradient(to top, rgb(183, 197, 139) 50%, transparent);
  }
`;

const CloudiLogo = styled.img`
  height: 40px;
  width: 110px;
  :hover {
    cursor: pointer;
  }
`;

const UserIcon = styled.img`
  height: 40px;
  width: 40px;
  :hover {
    cursor: pointer;
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
          <MenuList>ORDER</MenuList>
          <div>
            <UserIcon src='/images/user.png' />
          </div>
        </NavMenu>
      </NavBar>
    </>
  );
};

export default Header;
