import React from 'react';
import styled from 'styled-components';

import buttons from './buttons';
import OptionButton from './OptionButton';
import TextInput from './TextInput';

const StyledController = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 50vmax;
  height: 100px;
`;

const Controller = ({
  curStage,
  handleBtnClick,
  handleTextInput
}) => {
  return (
    <StyledController>
      {
        curStage !== 'text'
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
          : <TextInput handleTextInput={handleTextInput} />
      }
    </StyledController>
  );
};

export default Controller;
