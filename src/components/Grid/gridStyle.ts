import styled from "styled-components";
import { device } from "../../utils/responsive";

export const GridCard = styled.div`
  max-width: 1400px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  grid-gap: 1.2rem;
  padding: 1.2rem;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

export const NoMovies = styled.h1`
  color: white;
  font-size: 1.2rem;
  padding: 20px 20px;
`;

export const GridWrapper = styled.div`
  display: grid;
  place-items: center;
`;
