import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

import Header from '../chatting/Header';
import GoInfoBtn from '../chatting/GoInfoBtn';
import SubmitForm from '../chatting/SubmitForm';
import {
  PreviousChattingItem,
  PreviousChattingListResponse,
} from '../../modules/chatting/types';
import { useChat } from '../../hooks/useChat';
import QuickMessageComp from './QuickMessageComp';
import ChatDrawer from './ChatDrawer';
import { useSelector } from 'react-redux';
import { RootState } from '../../modules';
import ChattingList from './ChattingList';
import { useRouter } from 'next/router';
import ChattingService from '../../service/api/chatting/ChattingService';

const ChattingTemplate = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const chatListDivRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const { chatRoomInfo } = useSelector(
    (state: RootState) => state.chattingRoomState,
  );

  const { connect, disconnect } = useChat();

  const [messageList, setMessageList] = useState<PreviousChattingItem[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const stompClient = Stomp.over(
    () => new SockJS(`${process.env.NEXT_PUBLIC_API_URL}/chat`),
  );

  function load() {
    ChattingService.asyncGetPreviousChattingList(
      '2',
      'fm0pjVuB1UjMDHPkm19S7jcG2GnQbdEroLcq8weWOEs',
    );
  }

  useEffect(() => {
    chatListDivRef.current.scroll({
      top: scrollRef.current.offsetTop,
      behavior: 'smooth',
    });

    if (!stompClient.connected) {
      connect(
        stompClient,
        router.query.id as string,
        messageList,
        setMessageList,
      );
    }
    return () => disconnect(stompClient);
  }, []);

  return (
    <Container>
      <button onClick={load}></button>
      <Header isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
      {chatRoomInfo.state !== 'END' && <GoInfoBtn />}
      <Content ref={chatListDivRef}>
        {/* <ChattingList messageList={previousChatting.messages} /> */}
        <ChattingList messageList={messageList} />
        <div ref={scrollRef} />
      </Content>
      {/* <QuickMessageComp stompClient={stompClient} /> */}
      <SubmitForm stompClient={stompClient} />
      <ChatDrawer
        stompClient={stompClient}
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
      />
    </Container>
  );
};

const Container = styled.div`
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
export default ChattingTemplate;
