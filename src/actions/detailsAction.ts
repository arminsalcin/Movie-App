import { Dispatch } from 'redux';

import axios from '../axiosConfig/axiosInterceptor';
import { ActionTypes } from './type';
import { Tab } from '../components/TabsList/tabsJson';
import {
  IsDetailsFetchAction,
  IDetailsFetchAction,
  IResponseDetailsType,
  IResponseVideo,
  IVideoFetchAction,
} from '../interfaces';

export const setDetailsData = (
  details: IResponseDetailsType
): IDetailsFetchAction => {
  return { type: ActionTypes.fetchDetails, details };
};

export const setIsFetching = (isFetching: boolean): IsDetailsFetchAction => {
  return { type: ActionTypes.isDetailsFetch, isFetching };
};

export const setVideo = (video: IResponseVideo): IVideoFetchAction => {
  return { type: ActionTypes.fetchVideo, video };
};

export const getDetails = (id: string, tabId: string) => {
  return async (dispatch: Dispatch) => {
    let apiCall = '';
    let videoApiCall = '';

    switch (Number(tabId)) {
      case Tab.movieTab:
        apiCall = `/movie/${id}`;
        videoApiCall = `/movie/${id}/videos`;
        break;
      case Tab.tvShowTab:
        apiCall = `/tv/${id}`;
        videoApiCall = `/tv/${id}/videos`;
        break;
    }

    dispatch(setIsFetching(true));

    await axios
      .get<IResponseDetailsType>(apiCall)
      .then((res) => {
        const { status, data } = res;
        if (status === 200) {
          dispatch(setDetailsData(data));
          dispatch(setIsFetching(false));
        }
      })
      .catch((err) => {
        dispatch(setIsFetching(false));
      });

    await axios
      .get<IResponseVideo>(videoApiCall)
      .then((res) => {
        const { status, data } = res;
        if (status === 200) {
          dispatch(setVideo(data));
        }
      })
      .catch((err) => {});
  };
};
