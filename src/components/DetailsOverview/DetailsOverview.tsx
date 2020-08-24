import React from 'react';
import {
  OverviewWrapper,
  Overview,
  OverviewContent,
} from './detailsOverviewStyle';

interface IDetailsOverviewProps {
  overview: string;
}

const DetailsOverview: React.FC<IDetailsOverviewProps> = ({ overview }) => {
  return (
    <OverviewWrapper>
      <Overview>Overview</Overview>
      <OverviewContent>
        {overview
          ? overview
          : 'No Overview for this particular movie / TV show'}
      </OverviewContent>
    </OverviewWrapper>
  );
};

export default DetailsOverview;
