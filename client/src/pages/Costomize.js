import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';


import MaterialPage from '../components/customize_components/MaterialPage';
import HolderPage from '../components/customize_components/HolderPage';
import TextPage from '../components/customize_components/TextPage';
import CustomizeHeader from '../components/customize_components/CustomizeHeader';

import Footer from '../modals/Footer';

const StyledCustomizePage = styled.nav`

  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: space-between;
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
          <MaterialPage />
        </Route>
        <Route exact path='/customize/holder'>
          <HolderPage />
        </Route>
        <Route path='/customize/text'>
          <TextPage />
        </Route>
      </Switch>
      <Footer/>

    </StyledCustomizePage>
  );
};

export default Customize;
