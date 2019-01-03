import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { textGray, backGray, gray, teal, sentinelFont } from 'constants';

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding-right: 20px;
`;

const StyledLabel = styled.label`
  font-family: ${sentinelFont};
  font-weight: 400;
  font-style: italic;
  font-size: 16px;
  color: ${textGray};
`;

const StyledErrorLabel = styled(StyledLabel)`
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);

  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }
`;

const InputLabel = ({ children, error, ...props }) =>
  error ? (
    <StyledErrorLabel {...props}>{children}</StyledErrorLabel>
  ) : (
    <StyledLabel {...props}>{children}</StyledLabel>
  );

const TextFieldPrefix = styled.span`
  position: absolute;
  color: ${gray};

  font-size: 22px;
`;

const TextField = styled.input.attrs(props => ({
  ...props.field,
}))`
    width: ${({ prefixPadding = 0 }) => `${280 - prefixPadding}px`};
    height: 26px;
    border: none;
    border-bottom: 2px solid ${backGray};
    transition: border-bottom-color 100ms ease-out;
  
    font-size: 22px;
    color: ${textGray};
  
    padding-left: ${({ prefixPadding }) =>
      prefixPadding ? `${prefixPadding}px` : 0}
  
    &:focus {
      outline: none;
      border-bottom-color: ${teal};
    }
  `;

const TextInput = ({
  label,
  required = false,
  name,
  type = 'text',
  prefix = '',
  error = false,
  // Amount of left padding to add (to account for the prefix)
  // prefixPadding = 0,
  ...props
}) => (
  <InputContainer className="form-group">
    <InputLabel error={error}>{`${label}${required ? '*' : ''}`}</InputLabel>
    <div>
      {prefix && <TextFieldPrefix>{prefix}</TextFieldPrefix>}
      {/* <Field
        render={({ field }) => (
          <TextField // 22 because all the text input font sizes are 22 (but this could vary)
            prefixPadding={prefix.length * 22}
            {...field}
          />
        )}
        id={name}
        type={type}
        name={name}
        {...props}
      /> */}
      <TextField // 22 because all the text input font sizes are 22 (but this could vary)
        prefixPadding={prefix.length * 22}
        {...props}
      />
    </div>
  </InputContainer>
);

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  name: PropTypes.string,
  type: PropTypes.string,
  prefix: PropTypes.string,
  error: PropTypes.bool,
};

export default TextInput;
