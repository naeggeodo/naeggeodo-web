import { ChatRoomDataType } from './types';
import { createAction } from 'typesafe-actions';

const namespace = 'chatting/';

export const SET_CURRENT_CHATROOM_INFO =
  namespace + 'SET_CURRENT_CHATROOM_INFO';

export const setCurrentChatRoomInfo = createAction(
  SET_CURRENT_CHATROOM_INFO,
  (currentChat) => currentChat,
)();

export type ChattingActions = ReturnType<typeof setCurrentChatRoomInfo>;
