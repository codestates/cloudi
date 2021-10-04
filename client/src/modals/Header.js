import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { standsSelector, sticksSelector, userinfoSelector } from '../app/modules/hooks';
import { useDispatch, useSelector } from 'react-redux';
import { removeUserinfo } from '../app/modules/userinfo';
import { removeAllSticks } from '../app/modules/stick';
import { removeAllStands } from '../app/modules/stand';
import { Link, NavLink } from 'react-router-dom';

import Modal from './Modal';
import Login from './Login';
import Signup from './Signup';
import Myinfo from './Myinfo';
import SignupClear from './SignupClear';

const NavBar = styled.nav`
  position: fixed;
  display: flex;
  z-index: 1000;
  width: 100vw;
  height: 95px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid;
  background-color: white;
  .active li {
    background-color: rgb(183, 197, 139);
  }
  :hover {
    background-color: white;
  }
  @media screen and (max-width: 1023px) {
    flex-direction: column;
    align-items: flex-start;
    height: 64px;
  } ;
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
    display: ${(props) => (props.menu ? 'block' : 'none')};
    border-top: ${(props) => (props.menu ? '2px solid' : 'none')};
  }
  @media screen and (max-width: 1023px) {
    height: 50px;
  } ;
`;

const MenuList = styled.li`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  line-height: 93px;
  font-weight: 600;
  width: 130px;
  text-align: center;
  transition-property: background;
  transition-duration: 0.8s;
  transition-timing-function: ease-out;
  background: linear-gradient(
    270deg,
    rgba(183, 197, 139, 1),
    rgba(183, 197, 139, 1),
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0)
  );
  background-size: 300% 300%;
  :hover {
    cursor: pointer;
    background-position: 100% 50%;
  }
  @media screen and (max-width: 1023px) {
    width: 100%;
    text-align: center;
    background-color: white;
    font-size: 2vh;
    line-height: 8vh;
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
  @media screen and (max-width: 1023px) {
    height: 40px;
    width: 105px;
    margin: 10px 0 10px 20px;
  }
`;

const IconContainer = styled.div`
  padding: 0 20px 0 20px;
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
    height: 45px;
    width: 45px;
    margin: 8px 15px 0 0;
  }
`;

const LinkElem = styled(NavLink)`
  text-decoration: none;
  color: black;
`;

const CartCount = styled.div`
  position: absolute;
  border-radius: 30px;
  height: 25px;
  min-width: 25px;
  top: 15px;
  right: 90px;
  line-height: 25px;
  text-align: center;
  background-color: rgb(183, 197, 139);
  font-weight: bold;
  color: black;
  border: 1px solid black;
  @media screen and (max-width: 1023px) {
    display: none;
  }
`;

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
  const [myinfoOpen, setMyinfoOpen] = useState(false);
  const [clearOpen, setClearOpen] = useState(false);

  const dispatch = useDispatch();
  const stand = useSelector(standsSelector);
  const stick = useSelector(sticksSelector);
  const userinfo = useSelector(userinfoSelector);

  useEffect(() => {
    if (menu) {
      setModalOpen(false);
    }
  }, [menu]);

  const totalStandQuantity = stand.stands.reduce(
    (acc, cur) => acc + cur.standQuantity,
    0
  );
  const totalStickQuantity = stick.sticks.reduce(
    (acc, cur) => acc + cur.stickQuantity,
    0
  );
  const totalQuantity = totalStandQuantity + totalStickQuantity;

  const handleClickMenu = () => {
    setMenu(!menu);
  };

  const clickHandler = () => {
    setModalOpen(!modalOpen);
  };

  const loginHandler = () => {
    setLoginModal(true);
    setMenu(false);
  };

  const signupHandler = () => {
    setSignupOpen(true);
    setMenu(false);
  };

  const logoutHandler = () => {
    dispatch(removeUserinfo());
    dispatch(removeAllSticks());
    dispatch(removeAllStands());
  };

  return (
    <NavBar menu={menu}>
      <NavLogo>
        <Link to='/'>
          <CloudiLogo
            src='/images/cloudi.png'
            onClick={() => setModalOpen(false)}
          />
        </Link>
      </NavLogo>
      <NavMenu menu={menu} onClick={() => setModalOpen(false)}>
        {userinfo.token === ''
          ? <>
            <MobileMenuList onClick={loginHandler}>SIGN UP</MobileMenuList>
            <MobileMenuList onClick={signupHandler}>LOG IN</MobileMenuList>
            </>/*eslint-disable-line*/
          : <>
            <MobileMenuList visible={myinfoOpen} setVisible={setMyinfoOpen}>MY INFO</MobileMenuList>
            <MobileMenuList onClick={logoutHandler}>LOG OUT</MobileMenuList>
            </>/*eslint-disable-line*/}
        <LinkElem to='/order'>
          <MobileMenuList onClick={handleClickMenu}>ORDER</MobileMenuList>
        </LinkElem>
        <LinkElem to='/incense'>
          <MenuList onClick={handleClickMenu}>INCENSE</MenuList>
        </LinkElem>
        <LinkElem to='/quiz'>
          <MenuList onClick={handleClickMenu}>QUIZ</MenuList>
        </LinkElem>
        <LinkElem to='/customize'>
          <MenuList onClick={handleClickMenu}>CUSTOMIZE</MenuList>
        </LinkElem>
      </NavMenu>
      <IconContainer>
        <Link to='/order'>
          <Icon src='/images/cart.png' onClick={() => setModalOpen(false)} />
          {totalQuantity >= 1
            ? (
              <CartCount>{totalQuantity > 99 ? '99+' : totalQuantity}</CartCount>
              )
            : null}
        </Link>
        <Icon src='/images/user.png' onClick={clickHandler} />
      </IconContainer>
      <MenuIcon src='/images/menu.png' onClick={handleClickMenu} />
      <Modal
        visible={modalOpen}
        setVisible={setModalOpen}
        setLoginModal={setLoginModal}
        setSignupOpen={setSignupOpen}
        setMyinfoOpen={setMyinfoOpen}
      />
      <Login visible={loginModal} setVisible={setLoginModal} />
      <Signup visible={signupOpen} setVisible={setSignupOpen} setClearOpen={setClearOpen} />
      <Myinfo
        visible={myinfoOpen}
        setVisible={setMyinfoOpen}
      />
      <SignupClear visible={clearOpen} setVisible={setClearOpen} setLoginModal={setLoginModal} />
    </NavBar>
  );
};

export default Header;
