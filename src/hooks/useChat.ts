import { CompatClient } from '@stomp/stompjs';
import { PreviousChattingItemResponse } from '../modules/chatting/types';

export function useChat() {
  const connect = (
    stompClient: CompatClient,
    roomId: number,
    setMessageList: React.Dispatch<
      React.SetStateAction<PreviousChattingItemResponse[]>
    >,
  ) => {
    stompClient.connect({ chatMain_id: '1', sender: '1' }, () => {
      stompClient.subscribe(
        `/topic/${roomId}`,
        (data) => {
          const newMessage = JSON.parse(data.body);
          setMessageList((prev) => prev.concat(newMessage));
        },
        { chatMain_id: '1' },
      );
    });
  };

  const onSendMessage = (
    stompClient: CompatClient,
    data: PreviousChattingItemResponse,
  ) => {
    if (stompClient && data) {
      console.log(data.contents);
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
