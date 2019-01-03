import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FlexRow } from 'layout';
import { teal, lightGray } from 'constants';

const Step = styled.div`
  height: 4px;
  flex-basis: 274px;
  margin-right: ${({ pushRight }) => (pushRight ? '8px' : 0)}

  background-color: ${({ done }) => (done ? teal : lightGray)};
  transition: background 300ms;
`;

const ProgressBar = ({ totalSteps, currentStep }) => {
  const steps = [];
  for (let i = 1; i <= totalSteps; i++) {
    steps.push(
      <Step key={i} done={i <= currentStep} pushRight={i !== totalSteps} />
    );
  }
  return <FlexRow>{steps}</FlexRow>;
};

ProgressBar.propTypes = {
  totalSteps: PropTypes.number.isRequired,
  currentStep: PropTypes.number.isRequired,
};

export default ProgressBar;
