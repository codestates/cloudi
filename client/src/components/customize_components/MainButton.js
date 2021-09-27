import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MainButtonContainer = styled.section`
  margin-top: 30px;
  font-size: 20px;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.05), 0 6px 6px rgba(0, 0, 0, 0.1);
  input {
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
  }
`;

const getNextUrl = function (option) {
  if (option === '') {
    return {
      nextUrl: '/customize/material',
      buttonText: 'START'
    };
  } else if (option === 'material') {
    return {
      nextUrl: '/customize/holder',
      buttonText: 'NEXT'
    };
  } else if (option === 'holder') {
    return {
      nextUrl: '/customize/text',
      buttonText: 'NEXT'
    };
  } else if (option === 'text') {
    return {
      nextUrl: '/customize/finish',
      buttonText: 'FINISH'
    };
  } else if (option === 'finish') {
    return {
      nextUrl: '/order',
      buttonText: 'ORDER'
    };
  }
};

const MainButton = ({ curOp }) => {
  const { nextUrl, buttonText } = getNextUrl(curOp);
  return (
    <MainButtonContainer>
      <Link to={nextUrl}>
        <input type='button' value={buttonText} />
      </Link>
    </MainButtonContainer>
  );
};

export default MainButton;
