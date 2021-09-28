import React from 'react';
import styled from 'styled-components';

const IndicatorContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 50vmax;
`;

const IndicatorBar = styled.section`
  width: 14vmax;
  height: 10px;
  margin: 5px;
  background-color: ${props => props.done ? '#787887' : '#b7c58b'};
`;

const Indicator = ({ stages, stage }) => {
  const curIdx = stages.indexOf(stage);
  return (
    <IndicatorContainer>
        {
          stages.map((el, idx) => {
            return (
              <IndicatorBar 
                key={`${idx}${el}`}
                done={curIdx < idx}
              />
            )
          })
        }
    </IndicatorContainer>
  );
};

export default Indicator;
