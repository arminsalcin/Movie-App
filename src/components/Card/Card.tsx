import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

import {
  Container,
  Image,
  TopBar,
  CardData,
  Wrapper,
  Title,
  Overview,
  ReadMoreButton,
  Date,
  Likes,
} from './cardStyle';

interface ICardProps {
  id: number;
  image: string | null;
  date: string;
  likes: number;
  title: string;
  overview: string;
  tabId: number;
}

const Card: React.FC<ICardProps> = ({
  id,
  image,
  date,
  likes,
  overview,
  title,
  tabId,
}) => {
  return (
    <Link to={`/details/${id}/${tabId}`}>
      <Container>
        <Image
          src={
            image === null
              ? 'https://images.pexels.com/photos/65128/pexels-photo-65128.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
              : `https://image.tmdb.org/t/p/w500${image}`
          }
        />
        <Wrapper>
          <TopBar>
            <FontAwesomeIcon icon={faHeart} />
            <Likes>{likes}</Likes>
          </TopBar>
          <CardData>
            <Title>{title}</Title>
            <Overview>
              {overview
                ? overview
                : 'No Overview to show for this particular movie / tvshow'}
            </Overview>
            <Date>{date}</Date>
            <ReadMoreButton>Read more</ReadMoreButton>
          </CardData>
        </Wrapper>
      </Container>
    </Link>
  );
};

export default Card;
