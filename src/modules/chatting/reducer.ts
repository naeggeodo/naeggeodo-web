import { ChattingActions, SET_CURRENT_CHATROOM_INFO } from './actions';
import { ChatRoomDataType } from './types';

type ChatState = {
  currentChat: ChatRoomDataType | null;
};

const chattingReducer = (
  state: ChatState,
  action: ChattingActions,
): ChatState => {
  switch (action.type) {
    case SET_CURRENT_CHATROOM_INFO:
      return { ...state, currentChat: action.payload };
    default:
      return state;
  }
};

export default chattingReducer;
