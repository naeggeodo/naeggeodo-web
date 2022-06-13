import { createReducer } from 'typesafe-actions';
import { GET_PROGRESSING_CHATROOM_SUCCESS } from './actions';
import { ProgressStates } from './types';

const initialProgressStates: ProgressStates = {
  progressChatRoomList: {
    chatRoom: [],
  },
};

export const progressStates = createReducer<ProgressStates>(
  initialProgressStates,
  {
    [GET_PROGRESSING_CHATROOM_SUCCESS]: (state, action) => ({
      ...state,
      progressChatRoomList: {
        ...state.progressChatRoomList,
        chatRoom: action.payload.chatRooms,
      },
    }),
  },
);
