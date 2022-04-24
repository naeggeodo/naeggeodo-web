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
  currentChat: ChattingRoomInfoResponsePayload | null;
  previousChatting: PreviousChattingListResponse | [];
};

const initialChattingRoomState: ChattingRoomState = {
  currentChat: null,
  previousChatting: [],
};

export const chattingRoomState = createReducer<ChattingRoomState>(
  initialChattingRoomState,
  {
    [GET_CURRENT_CHATROOM_INFO_SUCCESS]: (state, action) => ({
      ...state,
      currentChat: action.payload,
    }),
    [GET_PREVIOUS_CHATTING_LIST_SUCCESS]: (state, action) => ({
      ...state,
      previousChatting: action.payload,
    }),
  },
);
