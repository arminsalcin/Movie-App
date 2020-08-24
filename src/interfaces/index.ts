import { ActionTypes } from '../actions';

/* Data Types */
export interface IResponseDataType {
  results: {
    poster_path: string | null;
    overview: string;
    release_date: string;
    first_air_date: string;
    name: string;
    id: number;
    title: string;
    vote_count: number;
  }[];
}

export interface IReducerDataType {
  data?: IResponseDataType;
  isFetching: boolean;
}

export interface ISetFetchingAction {
  type: ActionTypes.isFetchCompleted;
  isFetching: boolean;
}

export interface ISetDataAction {
  type: ActionTypes.fetchData;
  data: IResponseDataType;
}

/* Details Types */

export interface IResponseDetailsType {
  backdrop_path: string | null;
  budget: number;
  genres: {
    id: number;
    name: string;
  }[];
  id: number;
  title: string;
  overview: string | null;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  revenue: number;
  runtime: number | null;
  status: string;
  video: boolean;
  vote_count: number;
  name: string;
  first_air_date: string;
  vote_average: number;
}

export interface IReducerDetailsType {
  details?: IResponseDetailsType;
  video?: IResponseVideo;
  isFetching: boolean;
}

export interface IsDetailsFetchAction {
  type: ActionTypes.isDetailsFetch;
  isFetching: boolean;
}

export interface IDetailsFetchAction {
  type: ActionTypes.fetchDetails;
  details: IResponseDetailsType;
}

/* Video Types */

export interface IResponseVideo {
  results: {
    key: string;
  }[];
}

export interface IVideoFetchAction {
  type: ActionTypes.fetchVideo;
  video: IResponseVideo;
}

/* Set of all  Actions */
export type Action =
  | ISetDataAction
  | ISetFetchingAction
  | IsDetailsFetchAction
  | IDetailsFetchAction
  | IVideoFetchAction;
