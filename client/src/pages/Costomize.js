import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import styled from 'styled-components';

import MaterialEditor from '../components/customize_components/MaterialEditor';
import HolderEditor from '../components/customize_components/HolderEditor';
import TextEditor from '../components/customize_components/TextEditor';
import Indicator from '../components/customize_components/Indicator';
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
  font-family: 'Roboto';
  font-weight: 300;
  font-size: 1.2rem;
  letter-spacing: 0.5em;
  width: 50vmax;
  margin-top: 100px;
  margin-bottom: 10px;
  @media screen and (max-width: 1023px) {

  }
`;

const MainButton = styled.section`

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(105, 149, 94, 1);
  margin-top: 20px;
  color: white;
  border: 0px;

  input {
    width: 200px;
    height: 50px;
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 1.2rem;
    letter-spacing: 0.1em;
    background-color: rgba(105, 149, 94, 0);
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  :hover {
    cursor: pointer;
    color: white;
  };
  :active {
    border-top: 5px black solid;
    border-left: 5px black solid;
  };
  @media screen and (max-width: 1023px) {

  }
`;

// const customizeCategories = [
//   {
//     id: 1,
//     type: 'buttons',
//     name: 'material',
//     options: {
//       wood: 'blob',
//       steel: 'blob',
//       ceramic: 'blob'
//     }
//   },

// ]

const Customize = () => {
  return (
    <CustomizePage>
      <NavLink to='/customize'>
        <Title>COSTOMIZE</Title>
      </NavLink>
      <Indicator />
      <Switch>
        <Route path='/customize/material'>
          <MaterialEditor />
          <MainButton>
            <a href='/customize/holder'>
              <input type='button' value='NEXT' />
            </a>
          </MainButton>
        </Route>
        <Route path='/customize/holder'>
          <HolderEditor />
          <MainButton>
            <a href='/customize/text'>
              <input type='button' value='NEXT' />
            </a>
          </MainButton>
        </Route>
        <Route path='/customize/text'>
          <TextEditor />
          <MainButton>
            <a href='/order'>
              <input type='button' value='ADD TO CART' />
            </a>
          </MainButton>
        </Route>
        <Route path='/customize'>
          <InitialMsg />
          <MainButton>
            <a href='/customize/material'>
              <input type='button' value='START' />
            </a>
          </MainButton>
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
