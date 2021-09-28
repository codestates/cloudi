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

const Editor = ({
  stages,
  stage,
  selectedOps,
  handleBtnClick
}) => {
  const [buttons, setButtons] = useState([]);

  useEffect(() => {

    console.log(`stage : ${stage}`)

    if (stage === 'material') {
      setButtons(materialButtons);
    } else if (stage === 'holder') {
      setButtons(holderButtons);
    } else if (stage === 'text') {
      setButtons([]);
    } else if (stage === 'finish') {
      setButtons([]);
    }
  }, []); // eslint-disable-line

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
      <Controller>
        {stage === 'material' || 
          stage === 'holder'
          ? buttons.map(el => {
            return (
              <OptionButton 
                key={el.option} 
                option={el.option} 
                type={el.type} 
                onClick={handleBtnClick} 
              />
            );
          })
          : null}
        {stage === 'text'
          ? <input type='text' placeholder='텍스트를 입력해 주세요' />
          : null}
        {stage === 'finish'
          ? <div>완성! 카트에 담겼습니다.</div>
          : null}
      </Controller>
      <MainButton curStage={stage} />
    </>
  );
};

export default Editor;
