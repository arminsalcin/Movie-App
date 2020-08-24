import styled from 'styled-components';
import { device } from '../../utils/responsive';

const RatingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;

  @media ${device.mobileL} {
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

const RatingText = styled.p`
  color: #fff;
  font-size: 3rem;
  font-weight: 800;
  padding-left: 8px;
`;

const RatingTopNumber = styled.p`
  font-size: 1.5rem;
  color: lightgray;
`;

export { RatingWrapper, RatingText, RatingTopNumber };
