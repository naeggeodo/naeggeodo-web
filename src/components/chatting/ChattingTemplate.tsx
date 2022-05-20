import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { CompatClient, Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

import Header from '../chatting/Header';
import GoInfoBtn from '../chatting/GoInfoBtn';
import SubmitForm from '../chatting/SubmitForm';
import ChatItem from '../chatting/ChatItem';
import MyChatItem from '../chatting/MyChatItem';

import {
  PreviousChattingItemResponse,
  PreviousChattingListResponse,
} from '../../modules/chatting/types';
import { useChat } from '../../hooks/useChat';
import DateFormatter from '../../utils/DateFormatter';
import QuickMessageComp from './QuickMessageComp';
import ChatDrawer from './ChatDrawer';

const ChattingTemplate = ({
  previousChatting,
}: {
  previousChatting: PreviousChattingListResponse;
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const chatListDivRef = useRef<HTMLDivElement>(null);

  const { connect, disconnect } = useChat();

  const [messageList, setMessageList] = useState<
    PreviousChattingItemResponse[]
  >([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const socket = new SockJS(`${process.env.NEXT_PUBLIC_API_URL}/chat`);
  const stompClient = Stomp.over(socket);

  useEffect(() => {
    chatListDivRef.current.scroll({
      top: scrollRef.current.offsetTop,
      behavior: 'smooth',
    });
    if (!stompClient.connected) {
      connect(stompClient, 1, setMessageList); // 1은 채팅방 아이디
    }
    return () => disconnect(stompClient);
  }, [messageList]);

  return (
    <Wrap>
      <Header setDrawerOpen={setDrawerOpen} />
      <GoInfoBtn />
      <Content ref={chatListDivRef}>
        {previousChatting.messages &&
          previousChatting.messages.length > 0 &&
          previousChatting.messages.map((message, i) => {
            if (message.user_id === 1)
              return (
                <MyChatItem key={i} message={message} date={message.regDate} />
              );
            else
              return (
                <ChatItem key={i} message={message} date={message.regDate} />
              );
          })}

        {messageList &&
          messageList.length > 0 &&
          messageList.map((message, i) => {
            if (message.sender === 1) {
              return (
                <MyChatItem
                  key={i}
                  message={message}
                  date={DateFormatter.getNowDate()}
                />
              );
            } else {
              return (
                <ChatItem
                  key={i}
                  message={message}
                  date={DateFormatter.getNowDate()}
                />
              );
            }
          })}
        <Scroll ref={scrollRef} />
      </Content>
      <QuickMessageComp stompClient={stompClient} />
      <SubmitForm stompClient={stompClient} />
      <ChatDrawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: #f2f2f8;
  overflow: hidden;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  position: relative;

  width: 100%;
  height: 100%;
  margin-top: 10px;

  padding-bottom: 30px;

  overflow-y: auto;
  overflow-x: hidden;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Scroll = styled.div``;

export default ChattingTemplate;
