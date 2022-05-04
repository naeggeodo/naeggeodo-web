import { createReducer } from 'typesafe-actions';
import {
  GET_CHAT_ROOMS_LIST_SUCCESS,
  GET_FOOD_CATEGORIES_SUCCESS,
} from './actions';
import { CategoriesResponse, ChatRoomItemResponse } from './types';

interface MainPageState {
  categories: CategoriesResponse[] | null;
  chatRooms: ChatRoomItemResponse[] | null;
}

const initialMainPageState: MainPageState = {
  categories: [],
  chatRooms: [],
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
      chatRooms: action.payload['chat-room'],
    }),
  },
);
