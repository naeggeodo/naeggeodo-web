import { CompatClient } from '@stomp/stompjs';
import { Cookies } from 'react-cookie';
import { TOKEN_NAME } from '../constant/Login';
import {
  ChattingSubmitBody,
  PreviousChattingItem,
} from '../modules/chatting/types';
import { useSelectLoginStates } from './select/useSelectLoginStates';
import { useLoadLib } from './utils/useLoadLib';

type MessageDataType = 'TEXT' | 'IMAGE' | 'WELCOME' | 'CNT' | 'BAN';

export function useChat() {
  const cookies = new Cookies();
  const accessToken = cookies.get(TOKEN_NAME.ACCESS_TOKEN);
  const { user_id } = useSelectLoginStates();
  const { router, dispatch } = useLoadLib();

  // ** 메세지 데이터 받았을 때 TODO
  const filterMessageType = (data, setMessageList): any => {
    const newMessage = JSON.parse(data.body);
    const messageType: MessageDataType = JSON.parse(data.body).type;

    setMessageList((prev) => {
      if (messageType === 'CNT') return;
      return prev.concat(newMessage);
    });
  };

  function enter(stompClient) {
    const data = {
      chatMain_id: router.query.id,
      sender: user_id,
      contents: '님이 입장하셨습니다.',
      type: 'WELCOME',
    };

    stompClient.send('/app/chat/enter', {}, JSON.stringify(data));
  }

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
            filterMessageType(data, setMessageList);
          },
          {
            chatMain_id: roomId,
          },
        );
        enter(stompClient);
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
