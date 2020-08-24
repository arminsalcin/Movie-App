import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { RatingText, RatingTopNumber, RatingWrapper } from './ratingStyle';

interface IRatingProps {
  rating: number;
}

const Rating: React.FC<IRatingProps> = ({ rating }) => {
  return (
    <RatingWrapper>
      <FontAwesomeIcon icon={faStar} size="3x" color={'#ffbe00'} />
      <RatingText>{rating}</RatingText>
      <RatingTopNumber>/10</RatingTopNumber>
    </RatingWrapper>
  );
};

export default Rating;
