import React from 'react';
import { Title, TitleWrapper, Date } from './detailsTitleStyle';
import StatusBadge from '../StatusBadge/StatusBadge';

interface IDetailsTitleProps {
  title: string;
  date: string;
  released: string;
}

const DetailsTitle: React.FC<IDetailsTitleProps> = ({
  title,
  date,
  released,
}) => {
  return (
    <TitleWrapper>
      <Title>{title}</Title>
      <Date>{date}</Date>
      <StatusBadge>{released}</StatusBadge>
    </TitleWrapper>
  );
};

export default DetailsTitle;
