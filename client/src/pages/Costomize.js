import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import MaterialEditor from '../components/customize_components/MaterialEditor';
import HolderEditor from '../components/customize_components/HolderEditor';
import TextEditor from '../components/customize_components/TextEditor';
import CustomizeHeader from '../components/customize_components/CustomizeHeader';

import Footer from '../modals/Footer';

const StyledCustomizePage = styled.nav`

  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  border: 2px solid;
  background-color: grey;
  @media screen and (max-width: 1023px) {

  }
`;

const Customize = () => {
  return (
    <StyledCustomizePage>
      <CustomizeHeader title='CUSTOMIZE' />
      <Switch>
        <Route exact path='/customize/material'>
          <MaterialEditor />
        </Route>
        <Route exact path='/customize/holder'>
          <HolderEditor />
        </Route>
        <Route path='/customize/text'>
          <TextEditor />
        </Route>
      </Switch>
      <Footer />
    </StyledCustomizePage>
  );
};

export default Customize;

// TODO
// consider deleting customize Header props

// ! semistandard disable commands
// eslint-disable-line
/* eslint-disable no-use-before-define */
/* eslint-enable no-use-before-define */
