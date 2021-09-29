import React from 'react';
import styled from 'styled-components';

import Controller from './editor_components/Controller';
import Canvas from './editor_components/Canvas';
import Indicator from './Indicator';
import MainButton from './MainButton';
import ErrorMsg from './ErrorMsg';

const Message = styled.section`
  position: fixed;
  top: ${props => props.stage === 'finish' ? '30%' : '35%'};
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 1000;

  font-size: 1.2rem;
`;

const Editor = ({
  stages,
  stage,
  message,
  selectedOps,
  handleBtnClick,
  handleTextInput,
  handleErrorMsg
}) => {
  return (
    <>
      {/* eslint-disable */
        stage !== 'material' && selectedOps.plate === ''
          ? <ErrorMsg
            handleErrorMsg={handleErrorMsg}
          />
          : <>
            <Indicator
              stages={stages.slice(0,3)}
              stage={stage}
              selectedOps={selectedOps}
            />
            <Message
              stage={stage}
            >
              {message}
            </Message>
            <Canvas
              selectedOps={selectedOps}
            />
            <Controller
              curStage={stage}
              selectedOps={selectedOps}
              handleBtnClick={handleBtnClick}
              handleTextInput={handleTextInput}
            />
          </>
      /* eslint-enable */}
      <MainButton
        curStage={stage}
        selectedOps={selectedOps}
      />
    </>
  );
};

export default Editor;
