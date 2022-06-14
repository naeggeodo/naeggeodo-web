import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../chatting/Header';
import GoInfoBtn from '../chatting/GoInfoBtn';
import SubmitForm from '../chatting/SubmitForm';
import ChatDrawer from './ChatDrawer';
import { RootState } from '../../modules';
import ChattingList from './ChattingList';
import { useSelectLoginStates } from '../../hooks/select/useSelectLoginStates';
import { setCurrentChattingList } from '../../modules/chatting/actions';
import DateFormatter from '../../utils/DateFormatter';

var stompClient;

const ChattingTemplate = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const chatListDivRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { user_id, accessToken } = useSelectLoginStates();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const dispatch = useDispatch();

  const { chatRoomInfo, chattingList, nickname } = useSelector(
    (state: RootState) => state.chattingRoomState,
  );

  const onError = (e) => {
    if (e.headers.message) {
      console.log(e.headers.message);
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
      nickname,
    };

    stompClient.send('/app/chat/enter', {}, JSON.stringify(sendData));
  }

  function exit() {
    const data = {
      chatMain_id: router.query.id,
      sender: user_id,
      contents: '님이 퇴장하셨습니다.',
      type: 'EXIT',
      nickname,
    };
    stompClient.send('/app/chat/exit', {}, JSON.stringify(data));
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
            const body = {
              chatMain_id: newMessage.chatMain_id,
              contents: newMessage.contents,
              regDate: DateFormatter.getNowDate(),
              type: newMessage.type,
              user_id: newMessage.sender,
              nickname: newMessage.nickname,
            };
            dispatch(setCurrentChattingList(body));
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
  }, [chattingList.messages]);

  useEffect(() => {
    const socket = new SockJS(`${process.env.NEXT_PUBLIC_API_URL}/chat`);
    connect(socket);
    return () => disconnect();
  }, []);

  return (
    <Container>
      <Header
        chatRoomInfo={chatRoomInfo}
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
      />
      {chatRoomInfo?.state !== 'END' && <GoInfoBtn />}
      <Content ref={chatListDivRef}>
        <ChattingList messageList={chattingList.messages} />
        <div ref={scrollRef} />
      </Content>
      {/* <QuickMessageComp stompClient={stompClient} /> */}
      <SubmitForm stompClient={stompClient} />
      <ChatDrawer
        exit={exit}
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
