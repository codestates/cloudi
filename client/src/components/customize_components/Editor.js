import React from 'react';
import styled from 'styled-components';

import OptionButton from './editor_components/OptionButton';
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
`;

const OptionsContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 2px blue solid;
  width: 50vmax;
`;

const Editor = (props) => {
  return (
    <>
      <Canvas />
      <Controller>        
        <input type='text' placeholder='텍스트를 입력해 주세요' />
        { props.category === 'options' ? 
          <OptionsContainer>
          {props.options.map(el => {
            return (<OptionButton key={el.key} option={el.option} />);
          })}
          </OptionsContainer>
        : null }
        { props.category === 'text' ? 
          <input type='text' placeholder='텍스트를 입력해 주세요' />
        : null }
      </Controller>

    </>
  );
};

export default Editor;
