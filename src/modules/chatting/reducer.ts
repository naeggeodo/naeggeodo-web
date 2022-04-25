import {
  GET_CURRENT_CHATROOM_INFO_SUCCESS,
  GET_PREVIOUS_CHATTING_LIST_SUCCESS,
} from './actions';
import {
  ChattingRoomInfoResponsePayload,
  PreviousChattingListResponse,
} from './types';
import { createReducer } from 'typesafe-actions';

type ChattingRoomState = {
  chatRoomInfo: ChattingRoomInfoResponsePayload | null;
  previousChatting: PreviousChattingListResponse;
};

const initialChattingRoomState: ChattingRoomState = {
  chatRoomInfo: null,
  previousChatting: { messages: [] },
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
  },
);
