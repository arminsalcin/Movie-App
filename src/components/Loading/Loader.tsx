import React from 'react';
import { Loading } from './loaderStyle';

interface ILoaderProps {
  show: boolean;
}

const Loader: React.FC<ILoaderProps> = ({ show }) => {
  if (!show) {
    return null;
  }

  return <Loading />;
};

export default Loader;
