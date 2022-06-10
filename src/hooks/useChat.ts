import { CompatClient } from '@stomp/stompjs';
import { Cookies } from 'react-cookie';
import { TOKEN_NAME } from '../constant/Login';
import {
  ChattingSubmitBody,
  PreviousChattingItem,
} from '../modules/chatting/types';
import { useSelectLoginStates } from './select/useSelectLoginStates';

export function useChat() {
  const cookies = new Cookies();
  const accessToken = cookies.get(TOKEN_NAME.ACCESS_TOKEN);
  const { user_id } = useSelectLoginStates();

  const connect = (
    stompClient: CompatClient,
    roomId: string,
    setMessageList: React.Dispatch<
      React.SetStateAction<PreviousChattingItem[]>
    >,
  ) => {
    stompClient.connect(
      {
        chatMain_id: roomId,
        sender: user_id,
        Authorization: `Bearer ${accessToken}`,
      },
      () => {
        stompClient.subscribe(
          `/topic/${roomId}`,
          (data) => {
            const newMessage = JSON.parse(data.body);
            setMessageList((prev) => prev.concat(newMessage));
          },
          { chatMain_id: roomId },
        );
      },
    );
  };

  const onSendMessage = (
    stompClient: CompatClient,
    data: ChattingSubmitBody,
  ) => {
    if (stompClient && data) {
      stompClient.send('/app/chat/send', {}, JSON.stringify(data));
    }
  };

  const disconnect = (stompClient: CompatClient) => {
    stompClient.disconnect();
  };

  return {
    connect,
    disconnect,
    onSendMessage,
  };
}
