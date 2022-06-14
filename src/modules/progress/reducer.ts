import { createReducer } from 'typesafe-actions';
import {
  GET_PROGRESSING_CHATROOM_SUCCESS,
  SET_PROGRESSING_CHATROOM_TITLE_SUCCESS,
} from './actions';
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
        chatRoom: action.payload.chatRoom,
      },
    }),
    [SET_PROGRESSING_CHATROOM_TITLE_SUCCESS]: (state, action) => ({
      ...state,
      progressChatRoomList: {
        ...state.progressChatRoomList,
        chatRoom: state.progressChatRoomList.chatRoom.map((item, _) =>
          item.id === Number(action.payload.chatMain_id)
            ? { ...item, title: action.payload.title }
            : item,
        ),
      },
    }),
  },
);
