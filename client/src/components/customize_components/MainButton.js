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
  font-size: 15px;
  color: white;
  background-color: ${props => props.disabled ? '#787887' : '#69955E'};
  border: none;
  :hover {
    cursor: pointer;
    color: ${props => props.disabled ? 'white' : 'black'};
  };
  :active {
    box-shadow: inset 5px 5px 5px rgb(70, 110, 75);
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
  }
};

const MainButton = ({
  curStage,
  selectedOps
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

    return () => {};
    // eslint-disable-next-line
  }, [ selectedOps.plate, selectedOps.holder, selectedOps.text ]);

  return (
    <MainButtonContainer>
      <Link to={nextUrl}>
        <Input type='button' value={buttonValue} disabled={isDisabled} />
      </Link>
    </MainButtonContainer>
  );
};

export default MainButton;
