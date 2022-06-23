import { AxiosError } from 'axios';
import { createAction, createAsyncAction } from 'typesafe-actions';
import { Category, OrderTimeType } from '../common/types';
import {
  CopyPrevChatRoomDataRequestParams,
  CreateChatRoomResponse,
  PatchBookMarkResponse,
  PrevChatRoomBookMarkRequestParams,
  PrevCreatedListResponses,
} from './types';

const namespace = 'create/';

// ? 채팅방 생성 정보 입력받는 actions

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
export const SAVE_BUILDING_CODE = namespace + 'SAVE_BUILDING_CODE';

export const CREATE_CHAT_ROOM_REQUEST = namespace + 'CREATE_CHAT_ROOM_REQUEST';
export const CREATE_CHAT_ROOM_SUCCESS = namespace + 'CREATE_CHAT_ROOM_SUCCESS';
export const CREATE_CHAT_ROOM_FAILURE = namespace + 'CREATE_CHAT_ROOM_FAILURE';

export const INITIALIZE_CREATE_CHATROOM_STATES =
  namespace + 'INITIALIZE_CREATE_CHATROOM_STATES';

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
export const saveBuildingCode = createAction(
  SAVE_BUILDING_CODE,
  (buildingCode) => ({
    buildingCode,
  }),
)();
export const initializeCreateStates = createAction(
  INITIALIZE_CREATE_CHATROOM_STATES,
  () => ({}),
)();

export const createChatRoomActions = createAsyncAction(
  CREATE_CHAT_ROOM_REQUEST,
  CREATE_CHAT_ROOM_SUCCESS,
  CREATE_CHAT_ROOM_FAILURE,
)<FormData, CreateChatRoomResponse, AxiosError>();

// ? 이전내역 불러오기
export const GET_PREV_CREATED_LIST_REQUEST =
  namespace + 'GET_PREV_CREATED_LIST_REQUEST';
export const GET_PREV_CREATED_LIST_SUCCESS =
  namespace + 'GET_PREV_CREATED_LIST_SUCCESS';
export const GET_PREV_CREATED_LIST_FAILURE =
  namespace + 'GET_PREV_CREATED_LIST_FAILURE';

// ? 이전내역 복사하기
export const COPY_PREV_CHATROOM_DATA_REQUEST =
  namespace + 'COPY_PREV_CHATROOM_DATA_REQUEST';
export const COPY_PREV_CHATROOM_DATA_SUCCESS =
  namespace + 'COPY_PREV_CHATROOM_DATA_SUCCESS';
export const COPY_PREV_CHATROOM_DATA_FAILURE =
  namespace + 'COPY_PREV_CHATROOM_DATA_FAILURE';

export const SELECT_COPY_PREV_CHATROOM_DATA =
  namespace + 'SELECT_COPY_PREV_CHATROOM_DATA';

// ? 이전생성내역 삭제하기
export const DELETE_PREV_CREATED_CHATROOM_REQUEST =
  namespace + 'DELETE_PREV_CREATED_CHATROOM_REQUEST';
export const DELETE_PREV_CREATED_CHATROOM_SUCCESS =
  namespace + 'DELETE_PREV_CREATED_CHATROOM_SUCCESS';
export const DELETE_PREV_CREATED_CHATROOM_FAILURE =
  namespace + 'DELETE_PREV_CREATED_CHATROOM_FAILURE';

export const getPrevCreatedListActions = createAsyncAction(
  GET_PREV_CREATED_LIST_REQUEST,
  GET_PREV_CREATED_LIST_SUCCESS,
  GET_PREV_CREATED_LIST_FAILURE,
)<string, PrevCreatedListResponses, AxiosError>();

export const copyPrevChatRoomDataActions = createAsyncAction(
  COPY_PREV_CHATROOM_DATA_REQUEST,
  COPY_PREV_CHATROOM_DATA_SUCCESS,
  COPY_PREV_CHATROOM_DATA_FAILURE,
)<CopyPrevChatRoomDataRequestParams, number, AxiosError>();

export const selectCopyPrevChatRoomData = createAction(
  SELECT_COPY_PREV_CHATROOM_DATA,
  (data) => ({ data }),
)();

// ? 이전 내역 북마크
export const PATCH_PREV_CHATROOM_BOOKMARK_REQUEST =
  namespace + 'PATCH_PREV_CHATROOM_BOOKMARK_REQUEST';

export const PATCH_PREV_CHATROOM_BOOKMARK_SUCCESS =
  namespace + 'PATCH_PREV_CHATROOM_BOOKMARK_SUCCESS';

export const PATCH_PREV_CHATROOM_BOOKMARK_FAILURE =
  namespace + 'PATCH_PREV_CHATROOM_BOOKMARK_FAILURE';

export const patchPrevChatRoomBookMarkActions = createAsyncAction(
  PATCH_PREV_CHATROOM_BOOKMARK_REQUEST,
  PATCH_PREV_CHATROOM_BOOKMARK_SUCCESS,
  PATCH_PREV_CHATROOM_BOOKMARK_FAILURE,
)<PrevChatRoomBookMarkRequestParams, PatchBookMarkResponse, AxiosError>();

export const deletePrevChatRoomActions = createAsyncAction(
  DELETE_PREV_CREATED_CHATROOM_REQUEST,
  DELETE_PREV_CREATED_CHATROOM_SUCCESS,
  DELETE_PREV_CREATED_CHATROOM_FAILURE,
)<PrevChatRoomBookMarkRequestParams, void, AxiosError>();
