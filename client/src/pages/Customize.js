import React, { useState, useEffect } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
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
  const stages = [
    {
      stage: 'material',
      message: '스탠드의 재질을 선택해 주세요.'
    }, {
      stage: 'holder',
      message: ''
    }, {
      stage: 'text',
      message: ''
    }, {
      stage: 'finish',
      message: ''
    }
  ]

  const [selectedOps, setSelectedOps] = useState({
    plate: '',
    holder: '',
    text: ''
  });

  const handleReset = () => {
    setSelectedOps(
      {
        plate: '',
        holder: '',
        text: ''
      }
    )
  }

  const handleBtnClick = (clickedBtn) => {
    if(clickedBtn.type === 'holder') {
      setSelectedOps({...selectedOps, ...{holder: clickedBtn.option}});
    }
    if(clickedBtn.type === 'plate') {
      setSelectedOps({...selectedOps, ...{plate: clickedBtn.option}});
    }
  }

  const handleTextInput = (text) => {
    console.log(text);
  }

  return (
    <CustomizePage>
      <Link to='/customize'>
        <Title onClick={() => handleReset()}>CUSTOMIZE</Title>
      </Link>
      <Switch>
        {stages.map((el, idx) => {
          return (
            <Route
              key={el.stage}
              path={`/customize/${el.stage}`}
            >
              <Editor
                stages={stages.map(el=>el.stage)}
                stage={el.stage}
                message={stages.map(el=>el.message)}
                handleBtnClick={handleBtnClick}
                handleTextInput={handleTextInput}
                selectedOps={selectedOps}
              />
            </Route>
          )
        })}
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
