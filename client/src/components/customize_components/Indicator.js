import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const IndicatorContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 50vmax;
  .active section {
    background-color: #b7c58b;
  }
`;

const IndicatorBar = styled.section`
  width: 14vmax;
  height: 10px;
  margin: 5px;
  background-color: #C4C4C4;
  @media screen and (max-width: 1023px) {

  }
`;

const Indicator = ({ curOp }) => {
  return (
    <IndicatorContainer>
      <NavLink to='/customize/material'>
        <IndicatorBar />
      </NavLink>
      <NavLink to='/customize/holder'>
        <IndicatorBar />
      </NavLink>
      <NavLink to='/customize/text'>
        <IndicatorBar />
      </NavLink>
    </IndicatorContainer>
  );
};

export default Indicator;
