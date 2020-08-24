import React from 'react';
import Search from './searchStyle';

interface ISearchProps {
  value: string;
  onSearch: (e: React.FormEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<ISearchProps> = ({ value, onSearch }) => {
  return (
    <Search
      type="text"
      value={value}
      placeholder={'Search Movie or TVShow'}
      onChange={onSearch}
    />
  );
};

export default SearchInput;
