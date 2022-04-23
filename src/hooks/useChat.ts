import { CompatClient } from '@stomp/stompjs';
import { ChatItemType } from '../../types/dataTypes';
import { Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

export function useChat() {
  const connect = (
    stompClient: CompatClient,
    roomId: number,
    setMessageList: React.Dispatch<React.SetStateAction<ChatItemType[]>>,
  ) => {
    stompClient.connect({ chatMain_id: '1', sender: '1' }, () => {
      console.log('---------연결------------');
      stompClient.subscribe(`/topic/${roomId}`, (data) => {
        console.log('---------구독------------');
        const newMessage = JSON.parse(data.body);
        setMessageList((prev) => prev.concat(newMessage));
      });
    });
  };
  const onSendMessage = (
    stompClient: CompatClient,
    data: ChatItemType,
    setMessage: React.Dispatch<React.SetStateAction<string>>,
  ) => {
    // if (!stompClient.connected) {
    //   stompClient.connect({ chatMain_id: '1', sender: '1' }, () => {
    //     stompClient.send('/app/chat/send', {}, JSON.stringify(data));
    //   });
    // }
    console.log(stompClient.connected);
    if (stompClient && data) {
      stompClient.send('/app/chat/send', {}, JSON.stringify(data));
    } // 두번째 전송시 연결이 끊기는 문제
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
