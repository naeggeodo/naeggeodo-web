import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../chatting/Header';
import GoInfoBtn from '../chatting/GoInfoBtn';
import SubmitForm from '../chatting/SubmitForm';
import ChatItem from '../chatting/ChatItem';
import QuickMessageComp from '../chatting/QuickMessageComp';
import MyChatItem from '../chatting/MyChatItem';
import {
  PreviousChattingItemResponse,
  PreviousChattingListResponse,
} from '../../modules/chatting/types';

import { useChat } from '../../hooks/useChat';
import { Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import moment from 'moment';

const ChattingTemplate = ({
  previousChattingList,
}: {
  previousChattingList: PreviousChattingListResponse | null;
}) => {
  const [messageList, setMessageList] = useState<
    PreviousChattingItemResponse[]
  >([]);
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
        {previousChattingList?.messages &&
          previousChattingList?.messages.length > 0 &&
          previousChattingList?.messages.map((v, i) => {
            if (v.user_id === 1) {
              // 1은 내 아이디
              // 내 아이디랑 같으면
              return <MyChatItem key={i} v={v} date={v.regDate} />;
            } else {
              return <ChatItem key={i} v={v} date={v.regDate} />;
            }
          })}
        {messageList &&
          messageList.length > 0 &&
          messageList.map((v, i) => {
            if (1 === v.sender) {
              // 내 아이디랑 같으면
              return <MyChatItem key={i} v={v} date={moment().format()} />;
            } else {
              return <ChatItem key={i} v={v} date={moment().format()} />;
            }
          })}
      </Content>
      <QuickMessageComp />
      <SubmitForm stompClient={stompClient} setMessageList={setMessageList} />
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
