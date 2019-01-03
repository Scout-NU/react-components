import React from 'react';

import styled from 'styled-components';

import { backGray, teal, brixSansFont } from 'constants';

const RadioButton = styled.input`
  // This block is to visually hide the default input
  // But still keep it accessible
  // http://adrianroselli.com/2017/05/under-engineered-custom-radio-buttons-and-checkboxen.html
  position: absolute;
  top: auto;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px); /* IE 6/7 */
  clip: rect(1px, 1px, 1px, 1px);
  width: 1px;
  height: 1px;
  white-space: nowrap;

  + label {
    position: relative;
    padding-left: 37px;
    cursor: pointer;
    display: inline-block;

    font-size: ${({ fontSize }) => fontSize || '21px'};
    font-family: ${brixSansFont};

    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 18px;
      height: 18px;

      border: 2px solid ${backGray};
    }

    &:after {
      content: '';
      position: absolute;
      opacity: 0;
      transition: all 0.2s;

      left: 5px;
      top: 5px;
      width: 12px;
      height: 12px;

      background-color: ${teal};
    }

    &:before,
    &:after {
      border-radius: 100%;
    }
  }

  &:checked + label:after {
    opacity: 1;
  }
`;

const RadioInput = ({
  // field: { name, value, onChange, onBlur },
  // form: { setFieldValue, values, setFieldTouched },
  onChange,
  label,
  value,
  id,
  fontSize = '21px',
}) => (
  <FlexRow margin="16px">
    <RadioButton
      type="radio"
      id={id}
      value={value}
      onChange={onChange}
      checked={value === id}
      fontSize={fontSize}
    />
    <label htmlFor={id}>{label}</label>
  </FlexRow>
);

export default RadioInput;
