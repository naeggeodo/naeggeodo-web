import { AxiosError } from 'axios';
import { createAction, createAsyncAction } from 'typesafe-actions';
import {
  ChattingListRequest,
  ChattingListResponse,
  ChattingRoomInfoRequest,
  ChattingRoomInfoResponse,
  CurrentChatUserListResponse,
  QuickChattingListResponse,
  UserId,
} from './types';

const namespace = 'chatting/';

//? 채팅방 정보 불러오기 actions
export const GET_CURRENT_CHATROOM_INFO_REQUEST =
  namespace + 'GET_CURRENT_CHATROOM_INFO_REQUEST';

export const GET_CURRENT_CHATROOM_INFO_SUCCESS =
  namespace + 'GET_CURRENT_CHATROOM_INFO_SUCCESS';

export const GET_CURRENT_CHATROOM_INFO_FAILURE =
  namespace + 'GET_CURRENT_CHATROOM_INFO_FAILURE';

//? 채팅 관련 actions
export const GET_CHATTING_LIST_REQUEST =
  namespace + 'GET_PREVIOUS_CHATTING_LIST_REQUEST';

export const GET_CHATTING_LIST_SUCCESS =
  namespace + 'GET_PREVIOUS_CHATTING_LIST_SUCCESS';

export const GET_CHATTING_LIST_FAILURE =
  namespace + 'GET_CHATTING_LIST_FAILURE';

export const SET_CURRENT_CHATTING_LIST =
  namespace + 'SET_CURRENT_CHATTING_LIST';

//************************************************ */

export const GET_QUICK_MESSAGE_LIST_REQUEST =
  namespace + 'GET_QUICK_MESSAGE_LIST_REQUEST';

export const GET_QUICK_MESSAGE_LIST_SUCCESS =
  namespace + 'GET_QUICK_MESSAGE_LIST_SUCCESS';

export const GET_QUICK_MESSAGE_LIST_FAILURE =
  namespace + 'GET_QUICK_MESSAGE_LIST_FAILURE';

export const GET_CURRENT_CHAT_USER_LIST_REQUEST =
  namespace + 'GET_CURRENT_CHAT_USER_LIST_REQUEST';

export const GET_CURRENT_CHAT_USER_LIST_SUCCESS =
  namespace + 'GET_CURRENT_CHAT_USER_LIST_SUCCESS';

export const GET_CURRENT_CHAT_USER_LIST_FAILURE =
  namespace + 'GET_CURRENT_CHAT_USER_LIST_FAILURE';

// action creators
export const getCurrentChatRoomAsyncActions = createAsyncAction(
  GET_CURRENT_CHATROOM_INFO_REQUEST,
  GET_CURRENT_CHATROOM_INFO_SUCCESS,
  GET_CURRENT_CHATROOM_INFO_FAILURE,
)<ChattingRoomInfoRequest, ChattingRoomInfoResponse, AxiosError>();

export const getChattingListActions = createAsyncAction(
  GET_CHATTING_LIST_REQUEST,
  GET_CHATTING_LIST_SUCCESS,
  GET_CHATTING_LIST_FAILURE,
)<ChattingListRequest, ChattingListResponse, AxiosError>();

export const setCurrentChattingList = createAction(
  SET_CURRENT_CHATTING_LIST,
  (data) => data,
)();

export const getQuickChattingListActions = createAsyncAction(
  GET_QUICK_MESSAGE_LIST_REQUEST,
  GET_QUICK_MESSAGE_LIST_SUCCESS,
  GET_QUICK_MESSAGE_LIST_FAILURE,
)<UserId, QuickChattingListResponse, AxiosError>();

export const getCurrentChatUserListActions = createAsyncAction(
  GET_CURRENT_CHAT_USER_LIST_REQUEST,
  GET_CURRENT_CHAT_USER_LIST_SUCCESS,
  GET_CURRENT_CHAT_USER_LIST_FAILURE,
)<ChattingRoomInfoRequest, CurrentChatUserListResponse, AxiosError>();
