import { ActionTypes } from '../actions';
import { IReducerDataType, Action } from '../interfaces';
// States' definition

export const dataReducer = (
  state: IReducerDataType = { isFetching: false },
  action: Action
): IReducerDataType => {
  switch (action.type) {
    case ActionTypes.fetchData:
      return { ...state, data: action.data };
    case ActionTypes.isFetchCompleted:
      return { ...state, isFetching: action.isFetching };
    default:
      return state;
  }
};
