import styled from 'styled-components';
import { device } from '../../utils/responsive';

const Search = styled.input`
  height: 40px;
  width: 100%;
  border-radius: 50px;
  border: none;
  font-size: 17px;
  background-color: rgba(30, 27, 38, 0.95);
  padding: 15px;
  color: #fff;
  outline: none;
  grid-column-start: 2;
  @media ${device.mobileL} {
    grid-column-start: 1;
  }
`;

export default Search;
