import { ActionTypes } from '../actions';
import { IReducerDetailsType, Action } from '../interfaces';
// States' definition

export const detailsReducer = (
  state: IReducerDetailsType = { isFetching: true },
  action: Action
): IReducerDetailsType => {
  switch (action.type) {
    case ActionTypes.fetchDetails:
      return { ...state, details: action.details };
    case ActionTypes.isDetailsFetch:
      return { ...state, isFetching: action.isFetching };
    case ActionTypes.fetchVideo:
      return { ...state, video: action.video };
    default:
      return state;
  }
};
