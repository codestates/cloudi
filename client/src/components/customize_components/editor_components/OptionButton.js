import React from 'react';
import styled from 'styled-components';

const Button = styled.input`
  background-color: #787878;
  border-radius: 30px;
  border: none;
  color: white;
  text-align: center;
  padding: 15px;
  text-decoration: none;
  margin: 4px 10px;
  cursor: pointer;
  :focus {
    background-color: #b7c58b;
  }
  :hover {
    cursor: pointer;
    background-color: #b7c58b;
  };
`;

const OptionButton = ({ option, type, onClick }) => {
  return (
    <>
      <Button
        type='button'
        value={option}
        onClick={() => onClick({
          type: type,
          option: option
        })}
      />
    </>
  );
};

export default OptionButton;
