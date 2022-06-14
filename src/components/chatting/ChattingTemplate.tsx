import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { CompatClient, Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

import Header from '../chatting/Header';
import GoInfoBtn from '../chatting/GoInfoBtn';
import SubmitForm from '../chatting/SubmitForm';
import {
  ChattingListItem,
  ChattingListResponse,
} from '../../modules/chatting/types';
import { useChat } from '../../hooks/useChat';
import ChatDrawer from './ChatDrawer';
import { useSelector } from 'react-redux';
import { RootState } from '../../modules';
import ChattingList from './ChattingList';
import { useRouter } from 'next/router';
import { useSelectLoginStates } from '../../hooks/select/useSelectLoginStates';

var stompClient: CompatClient;

const ChattingTemplate = ({
  previousChatting,
}: {
  previousChatting: ChattingListResponse;
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const chatListDivRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { user_id, accessToken } = useSelectLoginStates();
  const [messageList, setMessageList] = useState<ChattingListItem[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const socket = new SockJS(`${process.env.NEXT_PUBLIC_API_URL}/chat`);
  const { chatRoomInfo } = useSelector(
    (state: RootState) => state.chattingRoomState,
  );

  const onError = (e) => {
    if (e.headers.message) {
      console.log(e.header.message);
    }
    alert('나가세요');
    location.href = '/';
  };

  function onEnter() {
    const sendData = {
      chatMain_id: router.query.id,
      sender: user_id,
      contents: '님이 입장하셨습니다.',
      type: 'WELCOME',
    };

    stompClient.send('/app/chat/enter', {}, JSON.stringify(sendData));
  }

  const connect = (socket) => {
    stompClient = Stomp.over(socket);
    stompClient.connect(
      {
        chatMain_id: router.query.id,
        sender: user_id,
        Authorization: `Bearer ${accessToken}`,
      },
      () => {
        const sessionId = /\/([^\\/]+)\/websocket/.exec(
          socket._transport.url,
        )[1];

        stompClient.subscribe(
          `/topic/${router.query.id}`,
          (data) => {
            const newMessage = JSON.parse(data.body);

            setMessageList((prev) => prev.concat(newMessage));
          },
          { chatMain_id: router.query.id as string },
        );
        onEnter();
      },
      onError,
    );
  };

  const disconnect = () => {
    stompClient.disconnect();
  };

  useEffect(() => {
    chatListDivRef.current.scroll({
      top: scrollRef.current.offsetTop,
      behavior: 'smooth',
    });
    connect(socket);
    return () => disconnect();
  }, [messageList]);

  return (
    <Container>
      <Header
        chatRoomInfo={chatRoomInfo}
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
      />
      {chatRoomInfo?.state !== 'END' && <GoInfoBtn />}
      <Content ref={chatListDivRef}>
        <ChattingList messageList={previousChatting.messages} />
        {/* <ChattingList messageList={messageList} /> */}
        <div ref={scrollRef} />
      </Content>
      {/* <QuickMessageComp stompClient={stompClient} /> */}
      <SubmitForm stompClient={stompClient} />
      <ChatDrawer
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
