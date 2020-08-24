import React from 'react';
import InfoTextWrapper from './detailsInfoStyle';
import InfoText from '../InfoText/InfoText';

interface IDetailsInfoProps {
  popularity: number | undefined;
  runtime: number | null;
  budget: number | undefined;
  voteCount: number | undefined;
}

const DetailsInfo: React.FC<IDetailsInfoProps> = ({
  popularity,
  runtime,
  budget,
  voteCount,
}) => {
  return (
    <InfoTextWrapper>
      <InfoText name={'Runtime'} value={runtime ? `${runtime}h` : 'No'} />
      <InfoText name={'Popularity'} value={popularity ? popularity : 'No'} />
      <InfoText name={'Budget'} value={budget ? `$${budget}` : 'No'} />
      <InfoText name={'Vote Count'} value={voteCount ? voteCount : 'No'} />
    </InfoTextWrapper>
  );
};

export default DetailsInfo;
