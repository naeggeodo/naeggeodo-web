import { AxiosError } from 'axios';
import { createAsyncAction } from 'typesafe-actions';
import {
  ChattingRoomInfoRequestPayload,
  ChattingRoomInfoResponsePayload,
  CurrentChatUserListResponse,
  PreviousChattingItemRequest,
  PreviousChattingListResponse,
  QuickChattingListResponse,
  UserId,
} from './types';

const namespace = 'chatting/';

export const GET_CURRENT_CHATROOM_INFO_REQUEST =
  namespace + 'GET_CURRENT_CHATROOM_INFO_REQUEST';

export const GET_CURRENT_CHATROOM_INFO_SUCCESS =
  namespace + 'GET_CURRENT_CHATROOM_INFO_SUCCESS';

export const GET_CURRENT_CHATROOM_INFO_FAILURE =
  namespace + 'GET_CURRENT_CHATROOM_INFO_FAILURE';

export const GET_PREVIOUS_CHATTING_LIST_REQUEST =
  namespace + 'GET_PREVIOUS_CHATTING_LIST_REQUEST';

export const GET_PREVIOUS_CHATTING_LIST_SUCCESS =
  namespace + 'GET_PREVIOUS_CHATTING_LIST_SUCCESS';

export const GET_PREVIOUS_CHATTING_LIST_FAILURE =
  namespace + 'GET_PREVIOUS_CHATTING_LIST_FAILURE';

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
)<
  ChattingRoomInfoRequestPayload,
  ChattingRoomInfoResponsePayload,
  AxiosError
>();

export const getPreviousChattingListActions = createAsyncAction(
  GET_PREVIOUS_CHATTING_LIST_REQUEST,
  GET_PREVIOUS_CHATTING_LIST_SUCCESS,
  GET_PREVIOUS_CHATTING_LIST_FAILURE,
)<PreviousChattingItemRequest, PreviousChattingListResponse, AxiosError>();

export const getQuickChattingListActions = createAsyncAction(
  GET_QUICK_MESSAGE_LIST_REQUEST,
  GET_QUICK_MESSAGE_LIST_SUCCESS,
  GET_QUICK_MESSAGE_LIST_FAILURE,
)<UserId, QuickChattingListResponse, AxiosError>();

export const getCurrentChatUserListActions = createAsyncAction(
  GET_CURRENT_CHAT_USER_LIST_REQUEST,
  GET_CURRENT_CHAT_USER_LIST_SUCCESS,
  GET_CURRENT_CHAT_USER_LIST_FAILURE,
)<ChattingRoomInfoRequestPayload, CurrentChatUserListResponse, AxiosError>();
