import { CompatClient } from '@stomp/stompjs';
import { Cookies } from 'react-cookie';
import { TOKEN_NAME } from '../constant/Login';
import {
  ChattingSubmitBody,
  PreviousChattingItem,
} from '../modules/chatting/types';
import DateFormatter from '../utils/DateFormatter';
import { useSelectLoginStates } from './select/useSelectLoginStates';
import { useLoadLib } from './utils/useLoadLib';

export type MessageDataType =
  | 'TEXT'
  | 'IMAGE'
  | 'WELCOME'
  | 'CNT'
  | 'BAN'
  | 'EXIT'
  | 'ALERT'
  | 'SYSTEM';

export function useChat() {
  const cookies = new Cookies();
  const accessToken = cookies.get(TOKEN_NAME.ACCESS_TOKEN);
  const { user_id } = useSelectLoginStates();
  const { router, dispatch } = useLoadLib();

  // ** 메세지 데이터 받았을 때 TODO
  // ** 메세지리스트에 넣을것
  // TODO TEXT, WELCOME, EXIT 인데 나갔습니다.
  // const filterMessageType = (data, setMessageList, messageList): any => {
  //   const newMessage = JSON.parse(data.body);
  //   const messageType: MessageDataType = JSON.parse(data.body).type;

  //   setMessageList((messageList) => {
  //     if (messageType === 'CNT') return;
  //     else if (messageType === 'WELCOME') {
  //       console.log(messageList);
  //     }
  //     return [...messageList, newMessage];
  //   });
  // };

  function enter(stompClient: CompatClient) {
    const data = {
      chatMain_id: router.query.id,
      sender: user_id,
      contents: '님이 입장하셨습니다.',
      type: 'WELCOME',
    };

    stompClient.send('/app/chat/enter', {}, JSON.stringify(data));
  }

  const connect = (
    socket: any,
    stompClient: CompatClient,
    roomId: string,
    messageList: PreviousChattingItem[],
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
        const sessionId = /\/([^\/]+)\/websocket/.exec(
          socket._transport.url,
        )[1];

        stompClient.subscribe(
          `/topic/${roomId}`,
          (data) => {
            const newMessage = JSON.parse(data.body);
            const messageType: MessageDataType = JSON.parse(data.body).type;
            const body = {
              chatMain_id: newMessage.chatMain_id,
              contents: `${newMessage.sender}${newMessage.contents}`,
              regDate: DateFormatter.getNowDate(),
              type: newMessage.type,
              user_id: newMessage.sender,
            };
            setMessageList([...messageList, body]);
          },
          {
            chatMain_id: roomId,
          },
        );
        stompClient.subscribe(`/user/queue/${sessionId}`, () => {
          // TODO quick채팅 업데이트
          // TODO 강퇴할 때
          // TODO alert할 때
        });

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

  const exitChatRoom = (
    stompClient: CompatClient,
    chatMain_id: string,
    userId: string,
  ) => {
    const data = {
      chatMain_id: chatMain_id,
      sender: userId,
      contents: '님이 퇴장하셨습니다.',
      type: 'EXIT',
    };
    stompClient.send('/app/chat/exit', {}, JSON.stringify(data));
  };

  return {
    connect,
    disconnect,
    onSendMessage,
    exitChatRoom,
  };
}
