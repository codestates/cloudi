import React, { useState, useRef } from 'react';
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
  background: linear-gradient(315deg, #ffffff, #F0F4F8);

  a {
    text-decoration: none;
  }
`;

const Title = styled.button`
  position: fixed;
  top: 20%;
  left: 50%;
  height: 40px;
  width: 160px;
  transform: translate(-50%, -50%);
  z-index: 800;
  background: none;
  border: none;
  padding: 0;

  color: #787887;
  letter-spacing: 0;
  transition: all 0.4s;

  font: inherit;
  cursor: pointer;
  outline: inherit;
  text-align: center;

  :focus {
    background: rgba(228, 242, 184, 1);
  }
`;

const Customize = () => {
  const titleRef = useRef();
  const stages = [
    {
      stage: 'material',
      message: '스탠드의 재질을 선택해 주세요.'
    }, {
      stage: 'holder',
      message: '인센스 스틱 홀더를 선택해 주세요.'
    }, {
      stage: 'text',
      message: '받침에 새길 텍스트를 작성해 주세요.'
    }, {
      stage: 'finish',
      message: '축하합니다! 나만의 인센스 스탠드가 완성되었습니다.'
    }
  ];

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
    );
  };

  const handleBtnClick = (clickedBtn) => {
    if (clickedBtn.type === 'holder') {
      setSelectedOps({ ...selectedOps, ...{ holder: clickedBtn.option } });
    }
    if (clickedBtn.type === 'plate') {
      setSelectedOps({ ...selectedOps, ...{ plate: clickedBtn.option } });
    }
  };

  const handleTextInput = (text) => {
    setSelectedOps({ ...selectedOps, ...{ text: text } });
  };

  const handleErrorMsg = () => {
    titleRef.current.focus();
  };

  return (
    <CustomizePage>
      <Link to='/customize'>
        <Title ref={titleRef} onClick={() => handleReset()}>CUSTOMIZE</Title>
      </Link>
      <Switch>
        {stages.map((el, idx) => {
          return (
            <Route
              key={el.stage}
              path={`/customize/${el.stage}`}
            >
              <Editor
                stages={stages.map(el => el.stage)}
                stage={el.stage}
                message={el.message}
                handleBtnClick={handleBtnClick}
                handleTextInput={handleTextInput}
                handleErrorMsg={handleErrorMsg}
                selectedOps={selectedOps}
              />
            </Route>
          );
        })}
        <Route path='/customize'>
          <InitialMsg
            selectedOps={selectedOps}
          />
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
