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

  // const connect = (
  //   socket: any,
  //   stompClient: CompatClient,
  //   roomId: string,
  //   setMessageList: React.Dispatch<React.SetStateAction<ChattingListItem[]>>,
  // ) => {
  //   stompClient.connect(
  //     {
  //       chatMain_id: roomId,
  //       sender: user_id,
  //       Authorization: `Bearer ${accessToken}`,
  //     },
  //     () => {
  //       const sessionId = /\/([^\\/]+)\/websocket/.exec(
  //         socket._transport.url,
  //       )[1];

  //       stompClient.subscribe(
  //         `/topic/${roomId}`,
  //         (data) => {
  //           const newMessage = JSON.parse(data.body);
  //           dispatch(getRealTimeMessageFromServer(newMessage));

  //           setMessageList((prev) => prev.concat(newMessage));
  //         },
  //         { chatMain_id: roomId },
  //       );
  //       enter(stompClient, roomId);
  //     },
  //     (e) => {
  //       // 에러콜백
  //       if (e.headers.message) {
  //         console.log(e.header.message);
  //       }
  //       alert('나가세요');
  //       location.href = '/';
  //     },
  //   );
  // };

  const onSendMessage = (
    stompClient: CompatClient,
    data: ChattingSubmitBody,
  ) => {
    if (stompClient && data) {
      stompClient.send('/app/chat/send', {}, JSON.stringify(data));
    }
  };

  return {
    onSendMessage,
  };
}
