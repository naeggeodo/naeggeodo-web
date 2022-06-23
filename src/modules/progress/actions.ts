import { AxiosError } from 'axios';
import { createAsyncAction } from 'typesafe-actions';
import { ProgressChatRoomList, ProgressingChatRoomTitleRequest } from './types';

const namespace = 'progress/';
export const GET_PROGRESSING_CHATROOM_REQUEST =
  namespace + 'GET_PROGRESSING_CHATROOM_REQUEST';
export const GET_PROGRESSING_CHATROOM_SUCCESS =
  namespace + 'GET_PROGRESSING_CHATROOM_SUCCESS';
export const GET_PROGRESSING_CHATROOM_FAILURE =
  namespace + 'GET_PROGRESSING_CHATROOM_FAILURE';

export const SET_PROGRESSING_CHATROOM_TITLE_REQUEST =
  namespace + 'SET_PROGRESSING_CHATROOM_TITLE_REQUEST';
export const SET_PROGRESSING_CHATROOM_TITLE_SUCCESS =
  namespace + 'SET_PROGRESSING_CHATROOM_TITLE_SUCCESS';
export const SET_PROGRESSING_CHATROOM_TITLE_FAILURE =
  namespace + 'SET_PROGRESSING_CHATROOM_TITLE_FAILURE';

export const getProgressingActions = createAsyncAction(
  GET_PROGRESSING_CHATROOM_REQUEST,
  GET_PROGRESSING_CHATROOM_SUCCESS,
  GET_PROGRESSING_CHATROOM_FAILURE,
)<string, ProgressChatRoomList, AxiosError>();

export const setProgressingChatRoomTitleActions = createAsyncAction(
  SET_PROGRESSING_CHATROOM_TITLE_REQUEST,
  SET_PROGRESSING_CHATROOM_TITLE_SUCCESS,
  SET_PROGRESSING_CHATROOM_TITLE_FAILURE,
)<ProgressingChatRoomTitleRequest, string, AxiosError>();
