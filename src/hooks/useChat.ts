import { CompatClient } from '@stomp/stompjs';
import { ChattingSubmitBody, ErrorMessage } from '../modules/chatting/types';

export function useChat(router) {
  const onSendMessage = (
    stompClient: CompatClient,
    data: ChattingSubmitBody,
  ) => {
    if (stompClient && data) {
      stompClient.send('/app/chat/send', {}, JSON.stringify(data));
    }
  };

  const onSendImage = (
    stompClient: CompatClient,
    data: ChattingSubmitBody,
    idx: number,
  ) => {
    if (stompClient && data) {
      stompClient.send('/app/chat/image', { idx }, JSON.stringify(data));
    }
  };

  const filterErrorMessage = (errorMessage: ErrorMessage) => {
    switch (errorMessage) {
      case 'SESSION_DUPLICATION':
        alert('중복된 아이디로 접속하실 수 없습니다.');
        router.replace('/chat-rooms');
        return;
      case 'INVALID_STATE':
        alert('입장할 수 없는 채팅방 입니다.');
        router.replace('/chat-rooms');
        return;
      case 'BANNED_CHAT_USER':
        alert('강제퇴장 조치로 인해 입장이 불가합니다.');
        router.replace('/chat-rooms');
        return;
      case 'BAD_REQUEST':
        alert('잘못된 요청입니다.');
        router.replace('/');
        return;
      case 'UNAUTHORIZED':
        alert('인증되지 않은 아이디입니다. 다시 로그인 해주세요.');
        router.replace('/login');
        return;
      default:
        alert('잘못된 접근입니다.');
        router.replace('/');
        return;
    }
  };

  return {
    onSendMessage,
    filterErrorMessage,
    onSendImage,
  };
}
