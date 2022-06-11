import { AxiosError } from 'axios';
import { createAction, createAsyncAction } from 'typesafe-actions';
import { Category } from '../main/types';
import { CreateChatRoomResponse, OrderTimeType } from './types';

const namespace = 'create/';

export const SELECT_ORDER_TIME_TYPE = namespace + 'SELECT_ORDER_TIME_TYPE';
export const INSERT_TITLE = namespace + 'INSERT_TITLE';
export const INSERT_LINK = namespace + 'INSERT_LINK';
export const SELECT_CATEGORY = namespace + 'SELECT_CATEGORY';
export const ADD_TAG = namespace + 'ADD_TAG';
export const INSERT_PLACE = namespace + 'INSERT_PLACE';

export const PLUS_MAX_COUNT = namespace + 'PLUS_MAX_COUNT';
export const MINUS_MAX_COUNT = namespace + 'MINUS_MAX_COUNT';
export const REMOVE_TAG = namespace + 'REMOVE_TAG';
export const SAVE_USER_ID = namespace + 'SAVE_USER_ID';

export const CREATE_CHAT_ROOM_REQUEST = namespace + 'CREATE_CHAT_ROOM_REQUEST';
export const CREATE_CHAT_ROOM_SUCCESS = namespace + 'CREATE_CHAT_ROOM_SUCCESS';
export const CREATE_CHAT_ROOM_FAILURE = namespace + 'CREATE_CHAT_ROOM_FAILURE';

export const selectOrderTimeType = createAction(
  SELECT_ORDER_TIME_TYPE,
  (orderTimeType: OrderTimeType) => ({ orderTimeType }),
)();
export const insertTitle = createAction(INSERT_TITLE, (title: string) => ({
  title,
}))();
export const insertLink = createAction(INSERT_LINK, (link: string) => ({
  link,
}))();
export const selectCategory = createAction(
  SELECT_CATEGORY,
  (category: Category) => ({ category }),
)();
export const addTag = createAction(ADD_TAG, (keyword) => ({ keyword }))();
export const removeTag = createAction(REMOVE_TAG, (index) => ({ index }))();

export const plusMaxCount = createAction(PLUS_MAX_COUNT, () => ({}))();
export const minusMaxCount = createAction(MINUS_MAX_COUNT, () => ({}))();
export const insertPlace = createAction(INSERT_PLACE, (place) => ({ place }))();
export const saveUserId = createAction(SAVE_USER_ID, (user_id) => ({
  user_id,
}))();

export const createChatRoomActions = createAsyncAction(
  CREATE_CHAT_ROOM_REQUEST,
  CREATE_CHAT_ROOM_SUCCESS,
  CREATE_CHAT_ROOM_FAILURE,
)<FormData, CreateChatRoomResponse, AxiosError>();
