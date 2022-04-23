import { ChattingActions, SET_CURRENT_CHATROOM_INFO } from './actions';
import { ChatRoomDataType } from './types';
import { createReducer } from 'typesafe-actions';

type ChattingRoomState = {
  currentChat: ChatRoomDataType | null;
};

const initialChattingRoomState: ChattingRoomState = {
  currentChat: null,
};

export const chattingRoomState = createReducer<ChattingRoomState>(
  initialChattingRoomState,
  {
    [SET_CURRENT_CHATROOM_INFO]: (state, action) => ({
      ...state,
      currentChat: action.payload,
    }),
  },
);
