import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { useSelector } from 'react-redux';

import Header from '../chatting/Header';
import GoInfoBtn from '../chatting/GoInfoBtn';
import SubmitForm from '../chatting/SubmitForm';
import ChatDrawer from './ChatDrawer';
import { RootState } from '../../modules';
import ChattingList from './ChattingList';
import { useSelectLoginStates } from '../../hooks/select/useSelectLoginStates';
import {
  changeCurrentCountInChatting,
  setCurrentChattingList,
  setImageListInChatting,
} from '../../modules/chatting/actions';
import DateFormatter from '../../utils/DateFormatter';
import { useChat } from '../../hooks/useChat';
import { useSelectChatRoomInfo } from '../../hooks/select/useSelectChatRoomInfo';
import { useLoadLib } from '../../hooks/utils/useLoadLib';

var stompClient;

const ChattingTemplate = () => {
  const { onSendMessage } = useChat();
  const { dispatch, router } = useLoadLib();
  const { user_id, accessToken } = useSelectLoginStates();
  const scrollRef = useRef<HTMLDivElement>(null);
  const chatListDivRef = useRef<HTMLDivElement>(null);

  const { link, imgPath, currentCount, maxCount, title } =
    useSelectChatRoomInfo();
  const { chatRoomInfo, chattingList, nickname } = useSelector(
    (state: RootState) => state.chattingRoomState,
  );

  const [message, setMessage] = useState('');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const changeMessage = (e) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    chatListDivRef.current.scroll({
      top: scrollRef.current.offsetTop,
      behavior: 'smooth',
    });
  }, [chattingList.messages]);

  const onError = (e) => {
    if (e.headers.message) {
      console.log(e.headers.message);
    }
    alert('문제가 발생하여 채팅방에서 나가집니다.');
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

            if (newMessage.type === 'CNT') {
              dispatch(
                changeCurrentCountInChatting(
                  JSON.parse(newMessage.contents).currentCount,
                ),
              );
            } else if (newMessage.type === 'IMAGE') {
              dispatch(setImageListInChatting(newMessage.contents));
            }
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

  const sendMessage = (e) => {
    e.preventDefault();
    if (!message) return;

    const data = {
      chatMain_id: String(router.query.id),
      sender: user_id,
      contents: message,
      type: 'TEXT',
      nickname: nickname,
    };
    onSendMessage(stompClient, data);
    setMessage('');
  };

  const sendImage = (e) => {
    const fileReader = new FileReader();
    const imgFile = e.target.files[0];
    fileReader.readAsDataURL(imgFile);
    fileReader.onload = (e) => {
      const result = e.target.result;
      const data = {
        chatMain_id: String(router.query.id),
        sender: user_id,
        contents: result as string,
        type: 'IMAGE',
        nickname: nickname,
      };
      onSendMessage(stompClient, data);
    };
    e.target.value = '';
  };

  useEffect(() => {
    const socket = new SockJS(`${process.env.NEXT_PUBLIC_API_URL}/chat`);
    connect(socket);
    return () => {
      disconnect();
    };
  }, []);

  return (
    <Container>
      <Header
        imgPath={imgPath}
        currentCount={currentCount}
        maxCount={maxCount}
        link={link}
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
        title={title}
      />
      {chatRoomInfo?.state !== 'END' && chatRoomInfo?.user_id === user_id && (
        <GoInfoBtn />
      )}
      <Content ref={chatListDivRef}>
        <ChattingList messageList={chattingList.messages} />
        <div ref={scrollRef} />
      </Content>
      {/* <QuickMessageComp stompClient={stompClient} /> */}
      <SubmitForm
        changeMessage={changeMessage}
        message={message}
        sendMessage={sendMessage}
        sendImage={sendImage}
      />
      <ChatDrawer
        currentCount={currentCount}
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
  padding: 15px;
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
