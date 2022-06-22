import { AxiosError } from 'axios';
import { createAsyncAction } from 'typesafe-actions';
import { UserId } from '../chatting/types';
import { QuickChattingListRequest, QuickChattingListResponse } from './types';

const namespace = 'quick-chatting/';

// ? quick 채팅 리스트 불러오기
export const GET_QUICK_MESSAGE_LIST_REQUEST =
  namespace + 'GET_QUICK_MESSAGE_LIST_REQUEST';

export const GET_QUICK_MESSAGE_LIST_SUCCESS =
  namespace + 'GET_QUICK_MESSAGE_LIST_SUCCESS';

export const GET_QUICK_MESSAGE_LIST_FAILURE =
  namespace + 'GET_QUICK_MESSAGE_LIST_FAILURE';

export const getQuickChattingListActions = createAsyncAction(
  GET_QUICK_MESSAGE_LIST_REQUEST,
  GET_QUICK_MESSAGE_LIST_SUCCESS,
  GET_QUICK_MESSAGE_LIST_FAILURE,
)<UserId, QuickChattingListResponse, AxiosError>();

// ? quick 채팅 리스트 수정하기
export const PATCH_QUICK_CHAT_LIST_REQUEST =
  namespace + 'PATCH_QUICK_CHAT_LIST_REQUEST';

export const PATCH_QUICK_CHAT_LIST_SUCCESS =
  namespace + 'PATCH_QUICK_CHAT_LIST_SUCCESS';

export const PATCH_QUICK_CHAT_LIST_FAILURE =
  namespace + 'PATCH_QUICK_CHAT_LIST_FAILURE';

export const patchQuickChattingListActions = createAsyncAction(
  PATCH_QUICK_CHAT_LIST_REQUEST,
  PATCH_QUICK_CHAT_LIST_SUCCESS,
  PATCH_QUICK_CHAT_LIST_FAILURE,
)<QuickChattingListRequest, QuickChattingListResponse, AxiosError>();
