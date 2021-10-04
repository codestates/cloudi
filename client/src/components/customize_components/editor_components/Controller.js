import React from 'react';
import styled from 'styled-components';

import buttons from './buttons';
import OptionButton from './OptionButton';
import TextInput from './TextInput';
import FinishButtons from './FinishButtons';

const StyledController = styled.section`
  position: fixed;
  bottom: 22%;
  left: 50%;
  transform: translate(-50%, 0);

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50vmax;
  height: 100px;
`;

const TotalPrice = styled.section`
  position: fixed;
  bottom: -20%;
  left: 50%;
  transform: translate(-50%, 0);

  text-align: center;
  font-size: 20px;
  color: #787878;
`;

const Controller = ({
  curStage,
  selectedOps,
  handleBtnClick
}) => {
  return (
    <StyledController>
      {
        curStage === 'plate' ||
        curStage === 'holder'
          ? buttons[`${curStage}s`].map(el => {
            return (
              <OptionButton
                key={el.option}
                type={el.type}
                option={el.option}
                price={el.price}
                onClick={handleBtnClick}
                curPrice={selectedOps.price}
              />
            );
          })
          : null
      }
      {
        curStage === 'text'
          ? <TextInput handleBtnClick={handleBtnClick} />
          : null
      }
      {
        curStage === 'finish'
          ? <FinishButtons selectedOps={selectedOps} />
          : null
      }
      <TotalPrice>
        {selectedOps.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}&nbsp;₩
      </TotalPrice>
    </StyledController>
  );
};

export default Controller;
