import { ChatRoomDataType } from '../../types/dataTypes';

const CURRENT_CHATROOM = 'chatting/currentChatRoom' as const;

export const setCurrentChatRoom = (data: ChatRoomDataType) => ({
  type: CURRENT_CHATROOM,
  payload: data,
});
type ChatAction = ReturnType<typeof setCurrentChatRoom>;

type ChatState = {
  currentChat: ChatRoomDataType | null;
};

const intialState: ChatState = { currentChat: null };

function chatting(
  state: ChatState = intialState,
  action: ChatAction,
): ChatState {
  switch (action.type) {
    case CURRENT_CHATROOM:
      return { ...state, currentChat: action.payload };
    default:
      return state;
  }
}
export default chatting;
