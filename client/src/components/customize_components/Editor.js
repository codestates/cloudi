import React from 'react';
import styled from 'styled-components';

import Controller from './editor_components/Controller';
import Canvas from './editor_components/Canvas';
import Indicator from './Indicator';
import MainButton from './MainButton';
import ErrorMsg from './ErrorMsg';

const Message = styled.section`
  position: fixed;
  top: 35%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, 0);
  z-index: 800;
  text-align: center;
  color: #141414;
  font-size: 1.3rem;
  font-weight: bold;

  white-space: pre-wrap;
  line-height: 1.6;

  @media screen and (max-height: 800px) {
    top: 22%;
  };
`;

const CanvasBackground = styled.section`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
  
  background: rgba(245, 245, 245, 0.3);
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);

  width: 600px;
  height: 450px;

  @media screen and (max-height: 950px) {
    display: none;
  };
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
            <CanvasBackground />
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
              url={url}
            />
          </>
      /* eslint-enable */}
    </>
  );
};

export default Editor;
