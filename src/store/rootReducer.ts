import { combineReducers } from 'redux';
import { dataReducer } from '../reducers/dataReducer';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { IReducerDataType, IReducerDetailsType } from '../interfaces';
import { detailsReducer } from '../reducers/detailsReducer';

interface StoreState {
  movies: IReducerDataType;
  details: IReducerDetailsType;
}

export const rootReducer = combineReducers<StoreState>({
  movies: dataReducer,
  details: detailsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
