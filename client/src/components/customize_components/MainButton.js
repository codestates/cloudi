import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MainButtonContainer = styled.section`
  position: fixed;
  bottom: 12%;
  left: 50%;
  transform: translate(-50%, 0);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 8rem;
  padding: 12px;
  color: white;
  border: none;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.05), 0 6px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  background-color: ${(props) => (props.disabled ? '#787887' : '#b7c58b')};
  :hover {
    cursor: pointer;
    background-color: ${props => props.disabled ? '#787887' : '#97a371'};
  };
  :active {
    background-color: '#b7c58b';
  };
`;

const getNextUrl = function (option) {
  if (option === 'main') {
    return {
      nextUrl: '/customize/material',
      buttonValue: 'START'
    };
  } else if (option === 'material') {
    return {
      nextUrl: '/customize/holder',
      buttonValue: 'NEXT'
    };
  } else if (option === 'holder') {
    return {
      nextUrl: '/customize/text',
      buttonValue: 'NEXT'
    };
  } else if (option === 'text') {
    return {
      nextUrl: '/customize/finish',
      buttonValue: 'FINISH'
    };
  } else if (option === 'finish') {
    return {
      nextUrl: '/order',
      buttonValue: 'ORDER'
    };
  } else if (option === 'error') {
    return {
      nextUrl: '/customize',
      buttonValue: 'CUSTOMIZE'
    };
  }
};

const MainButton = ({
  curStage,
  selectedOps,
  handleFinishBtnClick
}) => {
  const { nextUrl, buttonValue } = getNextUrl(curStage);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (curStage === 'material') {
      setIsDisabled(!selectedOps.plate);
    }

    if (curStage === 'holder') {
      setIsDisabled(!selectedOps.holder);
    }

    if (curStage === 'text') {
      setIsDisabled(!selectedOps.text);
    }

    if (curStage === 'error') {
      setIsDisabled(false);
    }
    return () => {};
    // eslint-disable-next-line
  }, [ selectedOps.plate, selectedOps.holder, selectedOps.text ]);

  return (
    <MainButtonContainer>
      {/* eslint-disable */
        curStage !== 'text'
          ? <Link to={nextUrl}>
            <Input type='button' value={buttonValue} disabled={isDisabled} />
          </Link>
          : <Link to={nextUrl}>
          <Input type='button' value={buttonValue} disabled={isDisabled} onClick={() => handleFinishBtnClick()} />
        </Link>
      /* eslint-enable */}
    </MainButtonContainer>
  );
};

export default MainButton;
