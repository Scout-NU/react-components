import styled from 'styled-components';
import { brixSansFont, textGray } from 'constants';

const P = styled.p`
  font-family: ${brixSansFont};
  font-weight: 300;
  font-size: ${props => props.fontSize || '18px'};
  color: ${textGray};
`;

/** @component */
export default P;
