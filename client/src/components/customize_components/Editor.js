import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { materialButtons, holderButtons } from './editor_components/options';
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
  const [selectedOps, setSelectedOps] = useState({
    plate: '',
    holder: ''
  });

  const handleBtnClick = (clickedBtn) => {
    console.log(clickedBtn)
    if(clickedBtn.type === 'holder') {
      setSelectedOps({})
    }
    console.log(selectedOps)
  }

  useEffect(() => {
    if (name === 'material') {
      setButtons(materialButtons);
    } else if (name === 'holder') {
      setButtons(holderButtons);
    } else if (name === 'text') {
      setButtons([]);
    } else if (name === 'finish') {
      setButtons([]);
    }
  }, [name]);

  return (
    <>
      <Indicator curOp={name} />
      <Canvas curOp={name} selectedOps={selectedOps} />
      <Controller>
        {name === 'material' || name === 'holder'
          ? buttons.map(el => {
            return (
              <OptionButton key={el.key} option={el.option} type={el.type} onClick={handleBtnClick} />
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
