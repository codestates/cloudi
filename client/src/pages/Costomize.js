import React from 'react';
import { Route, Switch, NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';

import Editor from '../components/customize_components/Editor';
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

const Customize = () => {
  const categories = [
    {
      id: 1,
      type: 'buttons',
      name: 'material',
      options: [
        {
          id: 1,
          option: 'wood',
          price: 10000
        }, {
          id: 2,
          option: 'ceramic',
          price: 12000
        }, {
          id: 3,
          option: 'steel',
          price: 14000
        }
      ]
    }, {
      id: 2,
      type: 'buttons',
      name: 'holder',
      options: [
        {
          id: 1,
          option: 'none',
          price: 0
        }, {
          id: 2,
          option: 'cat',
          price: 5000
        }, {
          id: 3,
          option: 'pinoccio',
          price: 3000
        }, {
          id: 4,
          option: 'fisher',
          price: 4000
        }
      ]
    }, {
      id: 3,
      type: 'text',
      name: 'material'
    }    
  ]



  return (
    <CustomizePage>
      <NavLink to='/customize'>
        <Title>COSTOMIZE</Title>
      </NavLink>
      <Indicator />
      <Switch>
        {/* categories.map(el => {
          return (
            <Route key={el.id} path='/customize/material'>
            <MaterialEditor />
            <MainButton>
              <Link to='/customize/holder'>
                <input type='button' value='NEXT' />
              </Link>
            </MainButton>
            </Route>
          )
        })*/}
        <Route path='/customize/material'>
          <MaterialEditor />
          <MainButton>
            <Link to='/customize/holder'>
              <input type='button' value='NEXT' />
            </Link>
          </MainButton>
        </Route>
        <Route path='/customize/holder'>
          <HolderEditor />
          <MainButton>
            <Link to='/customize/text'>
              <input type='button' value='NEXT' />
            </Link>
          </MainButton>
        </Route>
        <Route path='/customize/text'>
          <TextEditor />
          <MainButton>
            <Link to='/order'>
              <input type='button' value='ADD TO CART' />
            </Link>
          </MainButton>
        </Route>
        <Route path='/customize'>
          <InitialMsg />
          <MainButton>
            <Link to='/customize/material'>
              <input type='button' value='START' />
            </Link>
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
