import { CompatClient } from '@stomp/stompjs';
import { ChattingSubmitBody } from '../modules/chatting/types';

export function useChat() {
  const onSendMessage = (
    stompClient: CompatClient,
    data: ChattingSubmitBody,
  ) => {
    console.log({ stompClient, data });
    if (stompClient && data) {
      console.log('보냄');
      stompClient.send('/app/chat/send', {}, JSON.stringify(data));
    }
  };

  return {
    onSendMessage,
  };
}
