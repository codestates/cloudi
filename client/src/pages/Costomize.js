import React, { useState } from 'react'; // eslint-disable-line
import { Route, Switch, NavLink } from 'react-router-dom';
import styled from 'styled-components';

import Editor from '../components/customize_components/Editor';
import InitialMsg from '../components/customize_components/InitialMsg';

// import Footer from '../modals/Footer';

const CustomizePage = styled.section`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: white;
  a {
    text-decoration: none;
  }
`;

const Title = styled.section`
  text-align: center;
  font-weight: 300;
  font-size: 1rem;
  color: #787887;
  letter-spacing: 0;
  width: 50vmax;
  margin-top: 100px;
  margin-bottom: 10px;
  @media screen and (max-width: 1023px) {

  }
`;

const Customize = () => {
  return (
    <CustomizePage>
      <NavLink to='/customize'>
        <Title>COSTOMIZE</Title>
      </NavLink>
      <Switch>
        <Route path='/customize/material'>
          <Editor name='material' />
        </Route>
        <Route path='/customize/holder'>
          <Editor name='holder' />
        </Route>
        <Route path='/customize/text'>
          <Editor name='text' />
        </Route>
        <Route path='/customize/finish'>
          <Editor name='finish' />
        </Route>
        <Route path='/customize'>
          <InitialMsg />
        </Route>
      </Switch>
      {/* <Footer /> */}
    </CustomizePage>
  );
};

export default Customize;

// TODO
// consider deleting customize Header props

// ! semistandard disable commands
// eslint-disable-line
/* eslint-disable no-use-before-define */
/* eslint-enable no-use-before-define */
