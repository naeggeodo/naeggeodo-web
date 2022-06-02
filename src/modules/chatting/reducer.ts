import {
  GET_CURRENT_CHATROOM_INFO_SUCCESS,
  GET_CURRENT_CHAT_USER_LIST_SUCCESS,
  GET_PREVIOUS_CHATTING_LIST_SUCCESS,
  GET_QUICK_MESSAGE_LIST_SUCCESS,
} from './actions';
import {
  ChattingRoomInfoResponse,
  CurrentChatUserListResponse,
  PreviousChattingListResponse,
  QuickChattingListResponse,
} from './types';
import { createReducer } from 'typesafe-actions';

type ChattingRoomState = {
  chatRoomInfo: ChattingRoomInfoResponse | null;
  previousChatting: PreviousChattingListResponse | null;
  quickChatList: QuickChattingListResponse | null;
  currentChatUserList: CurrentChatUserListResponse | null;
};

const initialChattingRoomState: ChattingRoomState = {
  chatRoomInfo: null,
  previousChatting: null,
  quickChatList: null,
  currentChatUserList: null,
};

export const chattingRoomState = createReducer<ChattingRoomState>(
  initialChattingRoomState,
  {
    [GET_CURRENT_CHATROOM_INFO_SUCCESS]: (state, action) => ({
      ...state,
      chatRoomInfo: action.payload,
    }),
    [GET_PREVIOUS_CHATTING_LIST_SUCCESS]: (state, action) => ({
      ...state,
      previousChatting: action.payload,
    }),
    [GET_QUICK_MESSAGE_LIST_SUCCESS]: (state, action) => ({
      ...state,
      quickChatList: action.payload,
    }),
    [GET_CURRENT_CHAT_USER_LIST_SUCCESS]: (state, action) => ({
      ...state,
      currentChatUserList: action.payload,
    }),
  },
);
