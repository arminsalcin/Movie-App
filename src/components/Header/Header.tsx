import React from 'react';
import { HeaderWrapper, InnerWrapper } from './headerStyle';

const Header: React.FC = ({ children }) => {
  return (
    <HeaderWrapper>
      <InnerWrapper>{children}</InnerWrapper>
    </HeaderWrapper>
  );
};

export default Header;
