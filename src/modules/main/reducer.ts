import { createReducer } from 'typesafe-actions';
import { CategoriesResponse, ChatRoomItemResponse } from '../common/types';
import {
  getLikesCountActions,
  GET_CHAT_ROOMS_LIST_SUCCESS,
  GET_FOOD_CATEGORIES_SUCCESS,
  GET_LIKES_COUNT_SUCCESS,
  postLikesCountActions,
  POST_LIKES_COUNT_SUCCESS,
} from './actions';

interface MainPageState {
  categories: CategoriesResponse[] | null;
  chatRooms: ChatRoomItemResponse[] | null;
  likeCount: number;
}

const initialMainPageState: MainPageState = {
  categories: [],
  chatRooms: [],
  likeCount: 0,
};

export const mainPageState = createReducer<MainPageState>(
  initialMainPageState,
  {
    [GET_FOOD_CATEGORIES_SUCCESS]: (state, action) => ({
      ...state,
      categories: action.payload.categories,
    }),
    [GET_CHAT_ROOMS_LIST_SUCCESS]: (state, action) => ({
      ...state,
      chatRooms: action.payload.chatRoom,
    }),
    [GET_LIKES_COUNT_SUCCESS]: (
      state,
      action: ReturnType<typeof getLikesCountActions.success>,
    ) => ({
      ...state,
      likeCount: action.payload.likeCount,
    }),
    [POST_LIKES_COUNT_SUCCESS]: (
      state,
      action: ReturnType<typeof postLikesCountActions.success>,
    ) => ({
      ...state,
      likeCount: action.payload.likeCount,
    }),
  },
);
