import React from 'react';
import styled from 'styled-components';

// const ButtonContainer = styled.section`
//   flex: 1;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin: 5px;
//   background-color: white;
//   border: 2px red solid;
// `;

const Button = styled.input`
  flex: 1;
  height: 80px;
  margin: 5px;
  background-color: none;
  border: 3px black solid;
`;

const OptionButton = (props) => {
  return (
    <>
      <Button type='button' value={props.option} />
    </>
  );
};

export default OptionButton;
