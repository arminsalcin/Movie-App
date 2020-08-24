import styled from 'styled-components';
import { device } from '../../utils/responsive';

const Title = styled.p`
  font-size: 2.3em;
  font-weight: bold;
  color: #fff;
`;

const Date = styled.p`
  font-size: 1.5em;
  font-weight: 300;
  color: #bdbdbd;
`;

const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  > * {
    margin-left: 8px;
  }

  @media ${device.mobileL} {
    flex-direction: column;
    align-items: center;
    text-align: center;
    > * {
      margin-left: 0px;
      margin-top: 8px;
    }
  }
`;

export { TitleWrapper, Title, Date };
