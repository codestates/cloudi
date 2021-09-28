import React from 'react';
// import styled from 'styled-components';

import Controller from './editor_components/Controller';
import Canvas from './editor_components/Canvas';
import Indicator from './Indicator';
import MainButton from './MainButton';

const Editor = ({
  stages,
  stage,
  message,
  selectedOps,
  handleBtnClick,
  handleTextInput
}) => {
  return (
    <>
      <Indicator
        stages={stages}
        stage={stage}
      />
      <Canvas
        curStage={stage}
        selectedOps={selectedOps}
      />
      <Controller
        curStage={stage}
        message={message}
        handleBtnClick={handleBtnClick}
        handleTextInput={handleTextInput}
      />
      <MainButton
        curStage={stage}
        selectedOps={selectedOps}
      />
    </>
  );
};

export default Editor;
