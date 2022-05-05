import {
  GET_CURRENT_CHATROOM_INFO_SUCCESS,
  GET_PREVIOUS_CHATTING_LIST_SUCCESS,
  GET_QUICK_MESSAGE_LIST_SUCCESS,
} from './actions';
import {
  ChattingRoomInfoResponsePayload,
  PreviousChattingListResponse,
  QuickChattingListResponse,
} from './types';
import { createReducer } from 'typesafe-actions';

type ChattingRoomState = {
  chatRoomInfo: ChattingRoomInfoResponsePayload | null;
  previousChatting: PreviousChattingListResponse;
  quickChatList: QuickChattingListResponse | null;
};

const initialChattingRoomState: ChattingRoomState = {
  chatRoomInfo: null,
  previousChatting: { messages: [] },
  quickChatList: null,
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
  },
);
