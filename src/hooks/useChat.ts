import { CompatClient } from '@stomp/stompjs';
import { Cookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import { TOKEN_NAME } from '../constant/Login';
import { getRealTimeMessageFromServer } from '../modules/chatting/actions';
import {
  ChattingSubmitBody,
  ChattingListItem,
} from '../modules/chatting/types';
import { useSelectLoginStates } from './select/useSelectLoginStates';

export function useChat() {
  const cookies = new Cookies();
  const dispatch = useDispatch();
  const accessToken = cookies.get(TOKEN_NAME.ACCESS_TOKEN);
  const { user_id } = useSelectLoginStates();

  //** 입장시 실행할 함수
  function enter(stompClient: CompatClient, chatMain_id: string) {
    const sendData = {
      chatMain_id: chatMain_id,
      sender: user_id,
      contents: '님이 입장하셨습니다.',
      type: 'WELCOME',
    };

    stompClient.send('/app/chat/enter', {}, JSON.stringify(sendData));
  }

  const connect = (
    socket: any,
    stompClient: CompatClient,
    roomId: string,
    setMessageList: React.Dispatch<React.SetStateAction<ChattingListItem[]>>,
  ) => {
    stompClient.connect(
      {
        chatMain_id: roomId,
        sender: user_id,
        Authorization: `Bearer ${accessToken}`,
      },
      () => {
        const sessionId = /\/([^\\/]+)\/websocket/.exec(
          socket._transport.url,
        )[1];

        stompClient.subscribe(
          `/topic/${roomId}`,
          (data) => {
            const newMessage = JSON.parse(data.body);
            dispatch(getRealTimeMessageFromServer(newMessage));

            setMessageList((prev) => prev.concat(newMessage));
          },
          { chatMain_id: roomId },
        );
        enter(stompClient, roomId);
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
