import { AxiosError } from 'axios';
import { createAction, createAsyncAction } from 'typesafe-actions';
import { CategoriesResponse } from '../common/types';

const namespace = 'main/';

export const GET_FOOD_CATEGORIES_REQUEST =
  namespace + 'GET_FOOD_CATEGORIES_REQUEST';

export const GET_FOOD_CATEGORIES_SUCCESS =
  namespace + 'GET_FOOD_CATEGORIES_SUCCESS';

export const GET_FOOD_CATEGORIES_FAILURE =
  namespace + 'GET_FOOD_CATEGORIES_FAILURE';

export const GET_ALL_CHAT_ROOMS_LIST_REQUEST =
  namespace + 'GET_ALL_CHAT_ROOMS_LIST_REQUEST';

export const GET_CHAT_ROOMS_LIST_WITH_CATEGORY_REQUEST =
  namespace + 'GET_CHAT_ROOMS_LIST_WITH_CATEGORY_REQUEST';

export const GET_CHAT_ROOMS_LIST_SUCCESS =
  namespace + 'GET_CHAT_ROOMS_LIST_SUCCESS';

export const GET_CHAT_ROOMS_LIST_FAILURE =
  namespace + 'GET_CHAT_ROOMS_LIST_FAILURE';

export const GET_LIKES_COUNT_REQUEST = namespace + 'GET_LIKES_COUNT_REQUEST';
export const GET_LIKES_COUNT_SUCCESS = namespace + 'GET_LIKES_COUNT_SUCCESS';
export const GET_LIKES_COUNT_FAILURE = namespace + 'GET_LIKES_COUNT_FAILURE';

// action creators
export const getFoodCategoriesActions = createAsyncAction(
  GET_FOOD_CATEGORIES_REQUEST,
  GET_FOOD_CATEGORIES_SUCCESS,
  GET_FOOD_CATEGORIES_FAILURE,
)<void, CategoriesResponse[], AxiosError>();

export const getAllChatRoomsListRequest = createAction(
  GET_ALL_CHAT_ROOMS_LIST_REQUEST,
  (buildingCode) => ({ buildingCode }),
)();

export const getChatRoomListWithCategoryRequest = createAction(
  GET_CHAT_ROOMS_LIST_WITH_CATEGORY_REQUEST,
  (buildingCode, category) => ({
    buildingCode,
    category,
  }),
)();

export const getChatRoomsListSuccess = createAction(
  GET_CHAT_ROOMS_LIST_SUCCESS,
  (data) => data,
)();

export const getLikesCountActions = createAsyncAction(
  GET_LIKES_COUNT_REQUEST,
  GET_LIKES_COUNT_SUCCESS,
  GET_LIKES_COUNT_FAILURE,
)<void, { likeCount: number }, AxiosError>();
