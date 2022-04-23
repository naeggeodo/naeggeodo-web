import { AxiosError } from 'axios';
import { createAsyncAction } from 'typesafe-actions';
import {
  ChattingRoomInfoRequestPayload,
  ChattingRoomInfoResponsePayload,
} from './types';

const namespace = 'chatting/';

export const GET_CURRENT_CHATROOM_INFO_REQUEST =
  namespace + 'GET_CURRENT_CHATROOM_INFO_REQUEST';

export const GET_CURRENT_CHATROOM_INFO_SUCCESS =
  namespace + 'GET_CURRENT_CHATROOM_INFO_SUCCESS';

export const GET_CURRENT_CHATROOM_INFO_FAILURE =
  namespace + 'GET_CURRENT_CHATROOM_INFO_FAILURE';

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
