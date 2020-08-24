import { useLocation, useHistory } from 'react-router-dom';

type useRouterReturn = [
  (key: string, value: string) => void,
  (key: string) => void,
  (val: string) => string
];

const useRouter = (): useRouterReturn => {
  const history = useHistory();
  const location = useLocation();
  const pathname = location.pathname;
  const query = new URLSearchParams(location.search);

  const addQuery = (key: string, value: string): void => {
    query.set(key, value);
    history.push({
      pathname: pathname,
      search: query.toString(),
    });
  };

  const removeQuery = (key: string): void => {
    query.delete(key);
    history.push({
      pathname: pathname,
      search: query.toString(),
    });
  };

  const getQuery = (val: string): string => {
    const x = query.get(val);
    const queryValue = x != null ? x : '';
    return queryValue;
  };

  return [addQuery, removeQuery, getQuery];
};

export default useRouter;
