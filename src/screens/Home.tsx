import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import Header from "../components/Header/Header";
import useRouter from "../hooks/useRouter";
import { getData } from "../actions";
import { useTypedSelector } from "../store/rootReducer";
import Loader from "../components/Loading/Loader";
import SearchInput from "../components/SearchInput/SearchInput";
import TabsList from "../components/TabsList/TabsList";
import Grid from "../components/Grid/Grid";
import useDebounce from "../hooks/useDebounce";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const [addQuery, removeQuery, getQuery] = useRouter(); //custom hook
  const [searchValue, setSearchValue] = useState<string>(
    "" || getQuery("search")
  );
  const [activeTab, setActiveTab] = useState<number>(
    0 || Number(getQuery("tab"))
  );
  const [debouncedSearch] = useDebounce(searchValue, 1000); //custom hook

  const data = useTypedSelector((state) => state.movies.data);
  const loading = useTypedSelector((state) => state.movies.isFetching);

  useEffect(() => {
    dispatch(getData(debouncedSearch, activeTab));
  }, [debouncedSearch, activeTab]);

  const onTabPress = (id: number): void => {
    addQuery("tab", id.toString());
    setActiveTab(id);
  };

  const SearchHandler = (e: React.FormEvent<HTMLInputElement>): void => {
    e.preventDefault();
    const value = e.currentTarget.value;
    addQuery("search", value);
    setSearchValue(value);
  };

  return (
    <>
      <Header>
        <SearchInput onSearch={SearchHandler} value={searchValue} />
        <TabsList activeTab={activeTab} onTabPress={onTabPress} />
      </Header>

      <Loader show={loading} />
      <Grid data={data} tabId={activeTab} />
    </>
  );
};

export default Home;
