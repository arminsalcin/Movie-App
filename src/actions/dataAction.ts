import { Dispatch } from 'redux';

import axios from '../axiosConfig/axiosInterceptor';
import { ActionTypes } from './type';
import { Tab } from '../components/TabsList/tabsJson';
import {
  ISetDataAction,
  ISetFetchingAction,
  IResponseDataType,
} from '../interfaces';

export const setData = (data: IResponseDataType): ISetDataAction => {
  return { type: ActionTypes.fetchData, data };
};

export const setIsFetching = (isFetching: boolean): ISetFetchingAction => {
  return { type: ActionTypes.isFetchCompleted, isFetching };
};

export const getData = (searchValue: string, activeTab: number) => {
  return async (dispatch: Dispatch) => {
    const search = searchValue.length > 2;
    let apiCall = '';
    const options = {
      params: {
        query: searchValue,
        page: 1,
      },
    };

    switch (activeTab) {
      case Tab.movieTab:
        apiCall = search ? '/search/movie' : '/movie/top_rated';
        break;
      case Tab.tvShowTab:
        apiCall = search ? '/search/tv' : '/tv/top_rated';
        break;
    }

    dispatch(setIsFetching(true));

    await axios
      .get<IResponseDataType>(apiCall, options)
      .then((res) => {
        const { status, data } = res;
        if (status === 200) {
          dispatch(setData(data));
          dispatch(setIsFetching(false));
        }
      })
      .catch((err) => {
        dispatch(setIsFetching(false));
      });
  };
};
