import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MainButtonContainer = styled.section`
  margin-top: 30px;
  font-size: 20px;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.05), 0 6px 6px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 8rem;
  padding: 12px;
  font-size: 20px;
  color: white;
  background-color: rgb(105, 149, 94);
  border: none;
  :hover {
    cursor: pointer;
    color: black;
  };
  :active {
    box-shadow: inset 5px 5px 5px rgb(70, 110, 75);
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

    return () => {
    };
    // eslint-disable-next-line
  }, [ selectedOps.plate, selectedOps.holder ]);

  return (
    <MainButtonContainer>
      <Link to={nextUrl}>
        <Input type='button' value={buttonValue} disabled={isDisabled} />
      </Link>
    </MainButtonContainer>
  );
};

export default MainButton;
