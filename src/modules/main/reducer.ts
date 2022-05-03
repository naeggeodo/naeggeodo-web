import { createReducer } from 'typesafe-actions';
import { GET_FOOD_CATEGORIES_SUCCESS } from './actions';
import { CategoriesResponse } from './types';

interface MainPageState {
  categories: CategoriesResponse[] | null;
}

const initialMainPageState: MainPageState = {
  categories: [],
};

export const mainPageState = createReducer<MainPageState>(
  initialMainPageState,
  {
    [GET_FOOD_CATEGORIES_SUCCESS]: (state, action) => ({
      ...state,
      categories: action.payload.category,
    }),
  },
);
