import { AxiosError } from 'axios';
import { createAsyncAction } from 'typesafe-actions';
import { CategoriesResponse } from './types';

const namespace = 'main/';

export const GET_FOOD_CATEGORIES_REQUEST =
  namespace + 'GET_FOOD_CATEGORIES_REQUEST';

export const GET_FOOD_CATEGORIES_SUCCESS =
  namespace + 'GET_FOOD_CATEGORIES_SUCCESS';

export const GET_FOOD_CATEGORIES_FAILURE =
  namespace + 'GET_FOOD_CATEGORIES_FAILURE';

// action creators
export const getFoodCategoriesActions = createAsyncAction(
  GET_FOOD_CATEGORIES_REQUEST,
  GET_FOOD_CATEGORIES_SUCCESS,
  GET_FOOD_CATEGORIES_FAILURE,
)<{}, CategoriesResponse[], AxiosError>();
