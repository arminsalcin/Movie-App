import { useState, useEffect } from "react";

type useDebounceReturn = [string];

const useDebounce = (val: string, delay: number): useDebounceReturn => {
  const [debouncedValue, setDebouncedValue] = useState<string>(val);

  useEffect(
    () => {
      const isSearchingFlag = val.length < 3 ? false : true;
      const newSearchValue = isSearchingFlag ? val : "";

      const handler = setTimeout(() => {
        setDebouncedValue(newSearchValue);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    },
    [val, delay] // Only re-call effect if value or delay changes
  );

  return [debouncedValue];
};

export default useDebounce;
