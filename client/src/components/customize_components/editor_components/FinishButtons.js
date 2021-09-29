import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const Button = styled.input`
  background-color: ${props => props.disabled ? '#C4C4C4' : '#787878'};
  border-radius: 30px;
  border: none;
  color: white;
  text-align: center;
  padding: 15px;
  text-decoration: none;
  margin: 4px 10px;
  cursor: pointer;
  :hover {
    cursor: pointer;
    background-color: ${props => props.disabled ? '#C4C4C4' : '#b7c58b'};
  };
`;

const FinishButtons = ({ selectedOps }) => {
  const [isAddedInCart, setIsAddedInCart] = useState(true);

  const handleAddToCartClick = () => {
    setIsAddedInCart(true);
  };

  useEffect(() => {
    if (!!selectedOps.plate) { // eslint-disable-line
      setIsAddedInCart(false);
    }
    return () => {};
  }, [
    selectedOps.plate,
    selectedOps.holder,
    selectedOps.text
  ]);

  return (
    <>
      <Button
        type='button'
        value='ADD TO CART'
        disabled={isAddedInCart}
        onClick={() => handleAddToCartClick()}
      />
      <Link to='/customize/material'>
        <Button
          type='button'
          value='REDO'
        />
      </Link>
    </>
  );
};

export default FinishButtons;
