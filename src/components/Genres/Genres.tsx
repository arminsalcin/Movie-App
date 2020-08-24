import React from 'react';
import StatusBadge from '../StatusBadge/StatusBadge';
import { GenreText, GenresWrapper } from './genresStyle';

interface IGenresProps {
  genres?: {
    id: number;
    name: string;
  }[];
}

const Genres: React.FC<IGenresProps> = ({ genres }) => {
  return (
    <GenresWrapper>
      <GenreText>Genres:</GenreText>
      {genres?.map((value) => (
        <StatusBadge key={value.id} outlined>
          {value.name}
        </StatusBadge>
      ))}
    </GenresWrapper>
  );
};

export default Genres;
