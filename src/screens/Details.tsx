import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  BackgroundImage,
  BackgroundOverlay,
} from '../components/BackgroundImage/BackgroundImage';
import { Poster } from '../components/Poster/Poster';
import Rating from '../components/Rating/Rating';
import Genres from '../components/Genres/Genres';
import DetailsTitle from '../components/DetailsTitle/DetailsTitle';
import DetailsOverview from '../components/DetailsOverview/DetailsOverview';
import DetailsInfo from '../components/DetailsInfo/DetailsInfo';
import {
  DetailsWrapper,
  ContentWrapper,
  TopContent,
  RightContentWrapper,
  BottomContent,
} from './styles/detailsStyle';
import VideoPlayer from '../components/VideoPlayer/VideoPlayer';
import { getDetails } from '../actions/detailsAction';
import { useTypedSelector } from '../store/rootReducer';
import Loader from '../components/Loading/Loader';

const Details: React.FC = () => {
  let { id, tabId } = useParams();
  const dispatch = useDispatch();
  const details = useTypedSelector((state) => state.details.details);
  const loading = useTypedSelector((state) => state.details.isFetching);
  const video = useTypedSelector((state) => state.details.video);

  useEffect(() => {
    dispatch(getDetails(id, tabId));
  }, []);

  return (
    <DetailsWrapper>
      <Loader show={loading} />
      {details && !loading ? (
        <>
          {details.backdrop_path && (
            <BackgroundImage
              image={`https://image.tmdb.org/t/p/original${details.backdrop_path}`}
            >
              <BackgroundOverlay />
            </BackgroundImage>
          )}
          <ContentWrapper>
            <TopContent>
              <Poster
                src={
                  details.poster_path === null
                    ? 'https://images.pexels.com/photos/65128/pexels-photo-65128.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                    : `https://image.tmdb.org/t/p/w500${details.poster_path}`
                }
              />
              <RightContentWrapper>
                <DetailsTitle
                  title={details.title || details.name}
                  date={details.release_date || details.first_air_date}
                  released={details.status}
                />
                <DetailsOverview overview={details.overview!} />
                <DetailsInfo
                  popularity={details.popularity}
                  budget={details.budget}
                  runtime={details.runtime}
                  voteCount={details.vote_count}
                />
                <Rating rating={details.vote_average} />
                <Genres genres={details.genres} />
              </RightContentWrapper>
            </TopContent>
            <BottomContent>
              {video && video.results.length > 0 ? (
                <VideoPlayer videoId={video.results[0].key} />
              ) : null}
            </BottomContent>
          </ContentWrapper>
        </>
      ) : null}
    </DetailsWrapper>
  );
};

export default Details;
