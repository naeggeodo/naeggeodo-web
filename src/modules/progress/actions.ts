import { AxiosError } from 'axios';
import { createAsyncAction } from 'typesafe-actions';
import { ProgressChatRoomList } from './types';

const namespace = 'progress/';
export const GET_PROGRESSING_CHATROOM_REQUEST =
  namespace + 'GET_PROGRESSING_CHATROOM_REQUEST';
export const GET_PROGRESSING_CHATROOM_SUCCESS =
  namespace + 'GET_PROGRESSING_CHATROOM_SUCCESS';
export const GET_PROGRESSING_CHATROOM_FAILURE =
  namespace + 'GET_PROGRESSING_CHATROOM_FAILURE';

export const getProgressingActions = createAsyncAction(
  GET_PROGRESSING_CHATROOM_REQUEST,
  GET_PROGRESSING_CHATROOM_SUCCESS,
  GET_PROGRESSING_CHATROOM_FAILURE,
)<string, ProgressChatRoomList, AxiosError>();
