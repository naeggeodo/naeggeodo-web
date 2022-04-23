import { GET_CURRENT_CHATROOM_INFO_SUCCESS } from './actions';
import { ChattingRoomInfoResponsePayload } from './types';
import { createReducer } from 'typesafe-actions';

type ChattingRoomState = {
  currentChat: ChattingRoomInfoResponsePayload | null;
};

const initialChattingRoomState: ChattingRoomState = {
  currentChat: null,
};

export const chattingRoomState = createReducer<ChattingRoomState>(
  initialChattingRoomState,
  {
    [GET_CURRENT_CHATROOM_INFO_SUCCESS]: (state, action) => ({
      ...state,
      currentChat: action.payload,
    }),
  },
);
