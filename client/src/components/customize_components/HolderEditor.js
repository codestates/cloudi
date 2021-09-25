import React from 'react';
import styled from 'styled-components';

import OptionButton from './editor_components/OptionButton';
import Canvas from './editor_components/Canvas';

const OptionsContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 2px blue solid;
  width: 50vmax;
  @media screen and (max-width: 1023px) {

  }
`;

const HolderEditor = () => {
  // TODO : change temp props
  const props = {
    options: [
      {
        key: 1,
        option: 'none'
      }, {
        key: 2,
        option: 'pinoccio'
      }, {
        key: 3,
        option: 'cat'
      }, {
        key: 4,
        option: 'fisher'
      }
    ]
  };
  return (
    <>
      <Canvas />
      <OptionsContainer>
        {props.options.map(el => {
          return (<OptionButton key={el.key} option={el.option} />);
        })}
      </OptionsContainer>
    </>
  );
};

export default HolderEditor;
