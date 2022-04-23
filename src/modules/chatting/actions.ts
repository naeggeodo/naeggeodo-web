import { ChatRoomDataType } from './types';

const namespace = 'chatting/';

export const SET_CURRENT_CHATROOM_INFO =
  namespace + 'GET_CURRENT_CHATROOM_INFO';

export const setCurrentChatRoomInfo = (data: ChatRoomDataType) => ({
  type: SET_CURRENT_CHATROOM_INFO,
  payload: data,
});

export type ChattingActions = ReturnType<typeof setCurrentChatRoomInfo>;
