import PropTypes from 'prop-types';
import styled from 'styled-components';

const Margin = styled.div`
  margin: ${({ all }) => (all ? all : undefined)};
  margin-left: ${({ left }) => (left ? left : undefined)};
  margin-right: ${({ right }) => (right ? right : undefined)};
  margin-top: ${({ top }) => (top ? top : undefined)};
  margin-bottom: ${({ bottom }) => (bottom ? bottom : undefined)};
`;

Margin.propTypes = {
  all: PropTypes.string,
  left: PropTypes.string,
  right: PropTypes.string,
  top: PropTypes.string,
  bottom: PropTypes.string,
};

/** @component */
export default Margin;
