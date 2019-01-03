import PropTypes from 'prop-types';
import styled from 'styled-components';

import { teal, buttonBorderRadius, brixSansFont } from 'constants';

const themeToBackgroundColor = {
  default: 'white',
  primary: teal,
};
const themeToColor = {
  default: teal,
  primary: 'white',
};

const Button = styled.button.attrs(props => ({
  type: props.type,
  disabled: props.disabled,
}))`
  height: 45px;
  width: 160px;

  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};

  opacity: ${props => (props.disabled ? 0.5 : 1)};
  background: ${props => themeToBackgroundColor[props.theme]};
  color: ${props => themeToColor[props.theme]};

  font-size: 22px;
  font-weight: 500;
  font-family: ${brixSansFont};

  border: 2px solid ${teal};
  border-radius: ${buttonBorderRadius};
`;

Button.defaultProps = {
  type: 'button',
  disabled: false,
  theme: 'default',
};

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  disabled: PropTypes.bool,
  theme: PropTypes.oneOf(['default', 'primary']),
  onClick: PropTypes.func,
};

const BorderlessButton = styled(Button)`
  height: auto;
  width: auto;
  border: 0;
  font-weight: unset;

  display: flex;
  align-items: center;
`;

export { BorderlessButton };

/** @component */
export default Button;
