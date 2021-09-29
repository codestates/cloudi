import React from 'react';
import styled from 'styled-components';

import Controller from './editor_components/Controller';
import Canvas from './editor_components/Canvas';
import Indicator from './Indicator';
import MainButton from './MainButton';

const Message = styled.section`
  position: relative;
  top: 50px;
`;

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
      <Message>{message}</Message>
      <Canvas
        selectedOps={selectedOps}
      />
      <Controller
        curStage={stage}
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
