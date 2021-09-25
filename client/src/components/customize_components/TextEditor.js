import React from 'react';
import styled from 'styled-components';

import Canvas from './editor_components/Canvas';

const Controller = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 2px blue solid;
  width: 50vmax;
  height: 20vmin;
  @media screen and (max-width: 1023px) {

  }
`;

const TextEditor = () => {
  return (
    <>
      <Canvas />
      <Controller>
        <input type='text' placeholder='텍스트를 입력해 주세요' />
      </Controller>
    </>
  );
};

export default TextEditor;
