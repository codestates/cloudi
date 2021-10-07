import React from 'react';
import styled from 'styled-components';

import OptionButton from './OptionButton';
import TextInput from './TextInput';
import FinishButtons from './FinishButtons';

const StyledController = styled.section`
  position: fixed;
  bottom: 17%;
  left: 50%;
  transform: translate(-50%, 0);

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100px;
  @media screen and (max-height: 800px) {
    bottom: 14%;
  };
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
  url,
  curStage,
  selectedOps,
  handleBtnClick,
  buttons
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
          ? <FinishButtons selectedOps={selectedOps} url={url} />
          : null
      }
      <TotalPrice>
        {selectedOps.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}&nbsp;₩
      </TotalPrice>
    </StyledController>
  );
};

export default Controller;
