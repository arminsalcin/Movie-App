import styled from 'styled-components';
import { device } from '../../utils/responsive';

const InfoTextWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @media ${device.mobileL} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default InfoTextWrapper;
