import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const IndicatorContainer = styled.section`
  position: fixed;
  top: 25%;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 400;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: none;
  width: 50vmax;
  color: whitesmoke;

  a { color: inherit; }

  a section:hover {
    background-color: #69955E;
  }
  section:active {
    background-color: #b7c58b;
  }
  .active section {
    background-color: #69955E;
  }
  @media screen and (max-height: 850px) {
    top: 14%;
    width: 98vw;
  };
`;

const IndicatorBar = styled.section`
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  font-size: 12px;
  width: 120px;
  height: 30px;
  padding: 10px;
  text-align: center;
  margin: 2.5px;
  background-color: ${props => props.done ? '#b7c58b' : '#d1d1d1'};
  transition: all 0.4s;

  @media screen and (max-height: 800px) {
    width: 125px;
  };
`;

const Indicator = ({ stage, selectedOps }) => {
  const [finishedStages, setFinishedStages] = useState([
    {
      stage: 'plate',
      finished: false
    }, {
      stage: 'holder',
      finished: false
    }, {
      stage: 'text',
      finished: false
    }
  ]);

  useEffect(() => {
    const { plate, holder, text } = selectedOps;

    setFinishedStages([
      {
        stage: 'plate',
        finished: !!plate
      }, {
        stage: 'holder',
        finished: !!holder
      }, {
        stage: 'text',
        finished: !!text
      }
    ]);
    return () => {};
  }, [ selectedOps.plate, selectedOps.holder, selectedOps.text ]); // eslint-disable-line

  return (
    <IndicatorContainer>
      {
        stage === 'finish'
          ? null
          : finishedStages.map((el, idx) => {
            if (finishedStages[idx].finished || el.stage === stage) {
              return (
                <NavLink
                  to={`/customize/${el.stage}`}
                  key={`${idx}${el.stage}`}
                >
                  <IndicatorBar
                    done={el.finished}
                  >
                    {el.stage.toUpperCase()}
                  </IndicatorBar>
                </NavLink>
              );
            } else {
              return (
                <IndicatorBar
                  key={`${idx}${el.stage}`}
                  done={el.finished}
                >
                  {el.stage.toUpperCase()}
                </IndicatorBar>
              );
            }
          })
    }
    </IndicatorContainer>
  );
};

export default Indicator;
