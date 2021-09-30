import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ApplyButton = styled.input`
  background-color: ${props => props.disabled ? '#d1d1d1' : '#b7c58b'};
  border: ${props => props.disabled ? '3px #d1d1d1 solid' : '3px #b7c58b solid'};
  border-radius: 30px;
  color: ${props => props.disabled ? '#dfdfdf' : 'white'};
  padding: 10px 20px;
  text-decoration: none;
  margin: 4px 10px;
  cursor: pointer;
  transition: all 0.4s;

  :hover {
    cursor: pointer;
    background-color: #b7c58b;
    border: 3px #b7c58b solid ;
  };
  :active {
    background-color: rgba(235, 235, 235, 1);
    border: 0;
  }
`;

const TextBox = styled.input`
  background-color: ${props => props.disabled ? '#d1d1d1' : 'whitesmoke'};
  border: ${props => props.disabled ? '3px #d1d1d1 solid' : '3px #b7c58b solid'};
  padding: 10px 20px;
  border-radius: 30px;
  text-decoration: none;
  margin: 4px 10px;
  cursor: pointer;
  transition: all 0.4s;

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
  ::placeholder {
    color: ${props => props.disabled ? '#dfdfdf' : '#787878'};
  }
`;

const NoTextButton = styled.input`
  position: fixed;
  top: -40%;
  left: 50%;
  transform: translate(-50%, 0);

  background-color: #d1d1d1;
  border: 3px #d1d1d1 solid ;
  border-radius: 30px;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  cursor: pointer;
  transition: 1s;

  :hover {
    cursor: pointer;
    background-color: #b7c58b;
    border: 3px #b7c58b solid ;
  };
  :active {
    background-color: rgba(235, 235, 235, 1);
    border: 0;
  }
  :focus {
    background-color: #b7c58b;
    border: 3px #b7c58b solid ;
  }
`;

const TextInput = ({ handleTextInput }) => {
  const [text, setText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 10000);
  }, []);

  return (
    <div>
      <TextBox
        type='text'
        placeholder='10자 이내로 작성해 주세요.'
        onChange={(e) => setText(e.target.value)}
        maxLength='10'
        disabled={isDisabled}
      />
      <ApplyButton
        type='button'
        value='적용하기'
        onClick={() => handleTextInput(text)}
        disabled={isDisabled}
      />
      {/* eslint-disable */
        isVisible
          ? <NoTextButton
            type='button'
            value='글씨 안넣을래요'
            isVisible={isVisible}
            onClick={() => {
              handleTextInput('empty input!')
              setIsDisabled(!isDisabled)
            }}
          />
          : null
      /* eslint-disable */}
    </div>
  );
};

export default TextInput;
