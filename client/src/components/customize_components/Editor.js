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
  z-index: 800;

  font-size: 1.2rem;
`;

const Editor = ({
  url,
  stages,
  stage,
  message,
  selectedOps,
  handleBtnClick,
  handleErrorMsg,
  standImages,
  buttons
}) => {
  return (
    <>
      {/* eslint-disable */
        stage !== 'plate' && selectedOps.plate === ''
          ? <> 
            <ErrorMsg
              handleErrorMsg={handleErrorMsg}
            />
            <MainButton
              curStage='error'
              selectedOps={selectedOps}
            />
          </>
          : <>
            <Indicator
              stages={stages}
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
              standImages={standImages}
            />
            <Controller
              url={url}
              curStage={stage}
              selectedOps={selectedOps}
              handleBtnClick={handleBtnClick}
              buttons={buttons}
            />
            <MainButton
              curStage={stage}
              selectedOps={selectedOps}
            />
          </>
      /* eslint-enable */}
    </>
  );
};

export default Editor;
