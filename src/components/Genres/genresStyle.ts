import styled from 'styled-components';

const GenreText = styled.p`
  font-size: 1.5em;
  color: #fff;
  font-weight: bold;
`;

const GenresWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  > * {
    margin-left: 8px;
  }
`;

export { GenreText, GenresWrapper };
