import React from 'react';
import styled from 'styled-components';

import buttons from './buttons';
import OptionButton from './OptionButton';

const StyledController = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 50vmax;
  height: 15vmin;
`;

const ButtonContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 2px blue solid;
  width: 50vmax;
`;

const Message = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 50vmax;
  height: 15vmin;
`;

const Controller = ( {
  curStage,
  message,
  handleBtnClick,
  handleTextInput
} ) => {
  return (
    <StyledController>
      <Message>{message}</Message>
      <ButtonContainer>
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
          )
        })
        : <div>text</div>
      }
      </ButtonContainer>
    </StyledController>
  )
}

export default Controller;
