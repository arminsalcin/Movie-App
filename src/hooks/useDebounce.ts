import { useState, useEffect } from 'react';

type useDebounceReturn = [string, boolean];

const useDebounce = (val: string, delay: number): useDebounceReturn => {
  const [debouncedValue, setDebouncedValue] = useState<string>(val);
  const [searchActive, setSearchActive] = useState<boolean>(false);

  useEffect(
    () => {
      const isSearchingFlag = val.length < 3 ? false : true;

      const handler = setTimeout(() => {
        setDebouncedValue(val);
        setSearchActive(isSearchingFlag);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    },
    [val, delay] // Only re-call effect if value or delay changes
  );

  return [debouncedValue, searchActive];
};

export default useDebounce;
