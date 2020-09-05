import React from "react";
import { IResponseDataType } from "../../interfaces";
import { GridCard, NoMovies, NoMoviesWrapper } from "./gridStyle";
import Card from "../Card/Card";

interface IGridProps {
  data: IResponseDataType | undefined;
  tabId: number;
}

const Grid: React.FC<IGridProps> = ({ data, tabId }) => {
  const isDataHere =
    data !== undefined && data.results.length > 0 ? data : null;

  return (
    <>
      <GridCard>
        {isDataHere &&
          isDataHere.results.map((value) => (
            <Card
              key={value.id}
              tabId={tabId}
              id={value.id}
              image={value.poster_path}
              date={value.release_date || value.first_air_date}
              likes={value.vote_count}
              title={value.title || value.name}
              overview={value.overview}
            />
          ))}
      </GridCard>
      <NoMoviesWrapper>
        {!isDataHere && <NoMovies>No Movies/TV shows Detected :(</NoMovies>}
      </NoMoviesWrapper>
    </>
  );
};

export default Grid;
