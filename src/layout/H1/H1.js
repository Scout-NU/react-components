import styled from 'styled-components';
import { sentinelFont, textGray } from 'constants';

const H1 = styled.h1`
  font-family: ${sentinelFont};
  font-weight: 300;
  font-size: 32px;
  color: ${textGray};
`;

/** @component */
export default H1;
