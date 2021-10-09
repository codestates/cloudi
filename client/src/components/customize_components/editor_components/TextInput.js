import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// TODO : CSS/Styled Component 정리
const StyledTextInput = styled.section`
  display: flex;
  flex-direction: row;
  z-index: 999;

  .apply {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .price {
    font-family: 'Roboto';
    font-weight: 400;
    position: absolute;
    top: 0;
    font-size: 16px;
    color: #787878;
    padding: 5px 8px;
    border-radius: 10px;
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .apply:hover .price {
    top: -20px;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }
`;

const ApplyButton = styled.input`
  background-color: ${props => props.disabled ? '#d1d1d1' : '#b7c58b'};
  border: ${props => props.disabled ? '3px #d1d1d1 solid' : '3px #b7c58b solid'};
  border-radius: 30px;
  color: ${props => props.disabled ? '#dfdfdf' : 'white'};
  padding: 10px 20px;
  text-decoration: none;
  margin: 4px 10px;
  cursor: pointer;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.05), 0 6px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.4s;

  :hover {
    cursor: pointer;
    background-color: ${props => props.disabled ? '#d1d1d1' : '#b7c58b'};
    border: ${props => props.disabled ? '13px #d1d1d solid' : '3px #b7c58b solid'};
  };
  :active {
    background-color: ${props => props.disabled ? '#d1d1d1' : 'rgba(235, 235, 235, 1)'};
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
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.05), 0 6px 6px rgba(0, 0, 0, 0.1);
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
    background-color: ${props => props.disabled ? '#d1d1d1' : 'rgba(235, 235, 235, 1)'};
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
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.05), 0 6px 6px rgba(0, 0, 0, 0.1);
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

const TextInput = ({ handleBtnClick }) => {
  const [text, setText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 7000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <StyledTextInput>
      <TextBox
        type='text'
        placeholder='10자 이내로 작성해 주세요.'
        onChange={(e) => setText(e.target.value.toUpperCase())}
        maxLength='10'
        value={text}
        disabled={isDisabled}
      />
      <div className='apply'>
        <ApplyButton
          type='button'
          value='적용하기'
          onClick={() => handleBtnClick({
            type: 'text',
            option: text,
            price: 2000
          })}
          disabled={isDisabled || !text}
        />
        <div className='price'>
          +2,000 ₩
        </div>
      </div>
      {/* eslint-disable */
        isVisible
          ? <NoTextButton
            type='button'
            value='글씨 안넣을래요'
            isVisible={isVisible}
            onClick={() => {
              handleBtnClick({
                type: 'text',
                option: '-- NO TEXT --',
                price: 0
              })
              setIsDisabled(!isDisabled)
            }}
          />
          : null
      /* eslint-disable */}
    </StyledTextInput>
  );
};

export default TextInput;
