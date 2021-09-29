import React, { useState } from 'react';
import styled from 'styled-components';

const ApplyButton = styled.input`
  background-color: #787878;
  border: 3px #787878 solid ;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  margin: 4px 10px;
  cursor: pointer;
  :hover {
    cursor: pointer;
    background-color: #b7c58b;
    border: 3px #b7c58b solid ;
  };
`;

const TextBox = styled.input`
  background-color: white;
  border: 0;
  border: 3px #b7c58b solid ;
  color: black;
  padding: 10px 20px;
  text-decoration: none;
  margin: 4px 10px;
  cursor: pointer;
  :focus {
    outline: none;
    background-color: rgba(235, 235, 235, 1);
    border: 3px #b7c58b solid ;
  }
  :active {
    background-color: rgba(235, 235, 235, 1);
    border: 0;
  }
  :hover {
    cursor: pointer;
    background-color: rgba(235, 235, 235, 1);
  };
`;

const TextInput = ({ handleTextInput }) => {
  const [text, setText] = useState('');

  return (
    <div>
      <form>
        <TextBox
          type='text'
          placeholder='10자 이내로 작성해 주세요.'
          onChange={(e) => setText(e.target.value)}
          maxLength='10'
        />
        <ApplyButton
          type='button'
          value='적용하기'
          onClick={() => handleTextInput(text)}
        />
      </form>
    </div>
  );
};

export default TextInput;
