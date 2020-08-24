import styled from 'styled-components';
import { device } from '../../utils/responsive';

const Overview = styled.p`
  line-height: 2;
  font-size: 1.5em;
  font-weight: bold;
  color: #fff;
`;

const OverviewWrapper = styled.div`
  @media ${device.mobileL} {
    text-align: center;
  }
`;

const OverviewContent = styled.p`
  line-height: 1.5;
  font-weight: 300;
  color: #fff;
`;

export { Overview, OverviewContent, OverviewWrapper };
