import React from 'react';
import { InfoName, InfoValue, InfoWrapper } from './infoTextStyle';

interface IInfoTextProps {
  name: string;
  value: number | string;
}

const InfoText: React.FC<IInfoTextProps> = ({ name, value }) => {
  return (
    <InfoWrapper>
      <InfoName>{name}</InfoName>
      <InfoValue>{value}</InfoValue>
    </InfoWrapper>
  );
};

export default InfoText;
