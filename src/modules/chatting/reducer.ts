import {
  GET_CURRENT_CHATROOM_INFO_SUCCESS,
  GET_CURRENT_CHAT_USER_LIST_SUCCESS,
  GET_CHATTING_LIST_SUCCESS,
  GET_QUICK_MESSAGE_LIST_SUCCESS,
} from './actions';
import {
  ChattingRoomInfoResponse,
  CurrentChatUserListResponse,
  ChattingListResponse,
  QuickChattingListResponse,
} from './types';
import { createReducer } from 'typesafe-actions';

type ChattingRoomState = {
  chatRoomInfo: ChattingRoomInfoResponse | null;
  chattingList: ChattingListResponse;
  quickChatList: QuickChattingListResponse | null;
  currentChatUserList: CurrentChatUserListResponse | null;
};

const initialChattingRoomState: ChattingRoomState = {
  chatRoomInfo: null,
  chattingList: { messages: [] },
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
    [GET_CHATTING_LIST_SUCCESS]: (state, action) => ({
      ...state,
      chattingList: action.payload,
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
