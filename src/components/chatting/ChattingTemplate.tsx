import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { useSelector } from 'react-redux';

import Header from '../chatting/Header';
import GoInfoBtn from '../chatting/GoInfoBtn';
import SubmitForm from '../chatting/SubmitForm';
import ChatItem from '../chatting/ChatItem';
import MyChatItem from '../chatting/MyChatItem';
import QuickMessageComp from '../chatting/QuickMessageComp';
import { PreviousChattingItemResponse } from '../../modules/chatting/types';
import { useChat } from '../../hooks/useChat';
import { RootState } from '../../modules';

const ChattingTemplate = () => {
  const [messageList, setMessageList] = useState<
    PreviousChattingItemResponse[]
  >([]);

  const { previousChatting } = useSelector(
    (state: RootState) => state.chattingRoomState,
  );

  const socket = new SockJS(`${process.env.NEXT_PUBLIC_API_URL}/chat`);
  const stompClient = Stomp.over(socket);
  const { connect, disconnect } = useChat();

  useEffect(() => {
    if (!stompClient.connected) {
      connect(stompClient, 1, setMessageList); // 1은 채팅방 아이디
    }
    return () => disconnect(stompClient);
  }, [stompClient, messageList]);

  return (
    <Wrap>
      <Header />
      <Div>
        <GoInfoBtn />
      </Div>
      <Content>
        {previousChatting.messages &&
          previousChatting.messages.length > 0 &&
          previousChatting.messages.map((message, i) => {
            if (message.user_id === 1) {
              // 1은 내 아이디
              // 내 아이디랑 같으면
              return (
                <MyChatItem key={i} message={message} date={message.regDate} />
              );
            } else {
              return (
                <ChatItem key={i} message={message} date={message.regDate} />
              );
            }
          })}
        {messageList &&
          messageList.length > 0 &&
          messageList.map((message, i) => {
            if (message.sender === 1) {
              // 내 아이디랑 같으면
              return (
                // <MyChatItem
                //   key={i}
                //   message={message}
                //   date={moment().format()}
                // />
                <></>
              );
            } else {
              return (
                <></>
                // <ChatItem key={i} message={message} date={moment().format()} />
              );
            }
          })}
      </Content>
      {/* <QuickMessageComp stompClient={stompClient} /> */}
      <SubmitForm stompClient={stompClient} />
    </Wrap>
  );
};

export default ChattingTemplate;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background: #f2f2f8;
  overflow: hidden;
`;

const Div = styled.div`
  width: 100%;
  height: 10%;
  padding: 10px 0 18px;
`;

const Content = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 72%;
  padding-bottom: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 15px;
  overflow-y: auto;
  overflow-x: hidden;
`;
