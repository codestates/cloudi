import React from 'react';
import styled from 'styled-components';

import buttons from './buttons';
import OptionButton from './OptionButton';
import TextInput from './TextInput';
import FinishButtons from './FinishButtons';

const StyledController = styled.section`
  position: fixed;
  bottom: 20%;
  left: 50%;
  transform: translate(-50%, 0);

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50vmax;
  height: 100px;
`;

const Controller = ({
  curStage,
  selectedOps,
  handleBtnClick,
  handleTextInput
}) => {
  return (
    <StyledController>
      {
        curStage === 'material' ||
        curStage === 'holder'
          ? buttons[curStage].map(el => {
            return (
              <OptionButton
                key={el.option}
                type={el.type}
                option={el.option}
                onClick={handleBtnClick}
              />
            );
          })
          : null
      }
      {
        curStage === 'text'
          ? <TextInput handleTextInput={handleTextInput} />
          : null
      }
      {
        curStage === 'finish'
          ? <FinishButtons selectedOps={selectedOps} />
          : null
      }
    </StyledController>
  );
};

export default Controller;
