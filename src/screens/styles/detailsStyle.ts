import styled from 'styled-components';
import { device } from '../../utils/responsive';

const DetailsWrapper = styled.div``;

const ContentWrapper = styled.div`
  padding: 60px;
  height: 100vh;
  margin: auto;
  max-width: 1400px;

  @media ${device.mobileL} {
    padding: 25px 5px;
  }
`;

const RightContentWrapper = styled.div`
  width: 100%;
  padding: 15px 15px;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  @media ${device.mobileL} {
    > * {
      margin-top: 20px;
    }
  }
`;

const TopContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  @media ${device.mobileL} {
    flex-direction: column;
    align-items: center;
  }
`;

const BottomContent = styled.div`
  width: 100%;
  padding: 60px 0px;
`;

export {
  TopContent,
  RightContentWrapper,
  ContentWrapper,
  DetailsWrapper,
  BottomContent,
};
