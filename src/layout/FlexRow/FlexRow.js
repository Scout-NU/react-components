import PropTypes from 'prop-types';
import styled from 'styled-components';

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: ${({ margin }) => margin || 0}
  margin-bottom: ${({ margin }) => margin || 0}
`;

FlexRow.propTypes = {
  margin: PropTypes.string,
};

/** @component */
export default FlexRow;
