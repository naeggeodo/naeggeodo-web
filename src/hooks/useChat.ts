import { CompatClient } from '@stomp/stompjs';
import { ChatItemType } from '../../types/dataTypes';

export function useChat() {
  const connect = (
    stompClient: CompatClient,
    roomId: number,
    setMessageList: React.Dispatch<React.SetStateAction<ChatItemType[]>>,
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
    data: ChatItemType,
    setMessage: React.Dispatch<React.SetStateAction<string>>,
  ) => {
    console.log(stompClient.connected);
    if (stompClient && data) {
      stompClient.send('/app/chat/send', {}, JSON.stringify(data));
    }
    setMessage('');
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
