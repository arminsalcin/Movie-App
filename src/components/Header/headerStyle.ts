import styled from 'styled-components';
import { device } from '../../utils/responsive';

const HeaderWrapper = styled.div`
  width: 100%;
  background-color: #0f1115;
  display: flex;
  justify-content: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const InnerWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  height: 100%;
  padding: 1.5rem 1rem;

  color: #fff;

  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-column-gap: 5px;
  justify-items: center;
  list-style: none;

  @media ${device.mobileL} {
    grid-row-gap: 20px;
    grid-template-columns: 1fr;
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

export { List, InnerWrapper, HeaderWrapper };
