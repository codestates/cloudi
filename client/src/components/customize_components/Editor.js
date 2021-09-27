import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import OptionButton from './editor_components/OptionButton';
import Canvas from './editor_components/Canvas';
import Indicator from './Indicator';
import MainButton from './MainButton';

const Controller = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 2px blue solid;
  width: 50vmax;
  height: 15vmin;
`;

const Editor = ({ name }) => {
  const [buttons, setButtons] = useState([]);

  useEffect(() => {
    if (name === 'material') {
      setButtons([
        {
          id: 1,
          option: 'wood',
          price: 10000
        }, {
          id: 2,
          option: 'ceramic',
          price: 12000
        }, {
          id: 3,
          option: 'steel',
          price: 14000
        }
      ]);
    } else if (name === 'holder') {
      setButtons([
        {
          id: 1,
          option: 'none',
          price: 0
        }, {
          id: 2,
          option: 'cat',
          price: 5000
        }, {
          id: 3,
          option: 'pinoccio',
          price: 3000
        }, {
          id: 4,
          option: 'fisher',
          price: 4000
        }
      ]);
    } else if (name === 'text') {
      setButtons([]);
    }
  }, [name]);

  return (
    <>
      <Indicator curOp={name} />
      <Canvas />
      <Controller>
        {name === 'material' || name === 'holder'
          ? buttons.map(el => {
            return (
              <OptionButton key={el.key} option={el.option} />
            );
          })
          : null}
        {name === 'text'
          ? <input type='text' placeholder='텍스트를 입력해 주세요' />
          : null}
        {name === 'finish'
          ? <div>완성! 카트에 담겼습니다.</div>
          : null}
      </Controller>
      <MainButton curOp={name} />
    </>
  );
};

export default Editor;
