import React, { useState, useEffect, useRef, FormEvent } from 'react';
import styled from 'styled-components';
import { CompatClient, Stomp } from '@stomp/stompjs';
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
  setParticipatingUsers,
} from '../../modules/chatting/actions';
import DateFormatter from '../../utils/DateFormatter';
import { useChat } from '../../hooks/useChat';
import { useSelectChatRoomInfo } from '../../hooks/select/useSelectChatRoomInfo';
import { useLoadLib } from '../../hooks/utils/useLoadLib';
import ExitModalTemplate from './ExitModalTemplate';
import { Options } from '../../../types/libType';

var stompClient: CompatClient;
let imageLength: number;
let imageResult = '';

const ChattingTemplate = () => {
  const { dispatch, router } = useLoadLib();
  const { onSendMessage, filterErrorMessage } = useChat(router);
  const { user_id, accessToken } = useSelectLoginStates();
  const scrollRef = useRef<HTMLDivElement>(null);
  const chatListDivRef = useRef<HTMLDivElement>(null);

  const { link, imgPath, currentCount, maxCount, title } =
    useSelectChatRoomInfo();
  const { chatRoomInfo, chattingList, nickname } = useSelector(
    (state: RootState) => state.chattingRoomState,
  );
  const exitModalIsOpen = useSelector(
    (state: RootState) => state.modalStates.exitModalIsOpen,
  );

  const [message, setMessage] = useState<string>('');
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const changeMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    connect();
    return () => {
      disconnect();
    };
  }, []);

  useEffect(() => {
    chatListDivRef.current.scroll({
      top: scrollRef.current.offsetTop,
      behavior: 'smooth',
    });
  }, [chattingList.messages]);

  const onError = (e) => {
    const errorMessage = e.headers.message;
    filterErrorMessage(errorMessage);
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

  const connect = () => {
    const socket: any = new SockJS(`${process.env.NEXT_PUBLIC_API_URL}/chat`);
    stompClient = Stomp.over(() => socket);
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
            if (newMessage.type !== 'IMAGE') {
              dispatch(setCurrentChattingList(body));
            }

            if (newMessage.type === 'CNT') {
              dispatch(
                changeCurrentCountInChatting(
                  JSON.parse(newMessage.contents).currentCount,
                ),
              );
              dispatch(
                setParticipatingUsers(JSON.parse(newMessage.contents).users),
              );
            } else if (newMessage.type === 'IMAGE') {
              if (newMessage.contents.length <= 10) {
                imageLength = Number(newMessage.contents);
              } else {
                imageResult += newMessage.contents;
              }

              if (imageResult.length === imageLength) {
                // dispatch(setImageListInChatting(imageResult));
                const chattingBody = {
                  ...body,
                  contents: imageResult,
                };
                dispatch(setCurrentChattingList(chattingBody));

                imageResult = '';
                imageLength = 0;
              }
            }
          },
          { chatMain_id: router.query.id as string },
        );

        stompClient.subscribe(`/user/queue/${sessionId}`, (e) => {
          const messageObj = JSON.parse(e.body);
          if (messageObj.type === 'BAN') {
            window.alert('강제퇴장 당하셨습니다.');
            router.replace('/chat-rooms');
          } else if (messageObj === 'ALERT') {
            window.alert(messageObj.contents);
          }
        });
        onEnter();
      },
      onError,
    );
  };

  const disconnect = () => {
    stompClient.disconnect();
  };

  const sendMessage = (e: FormEvent<HTMLFormElement>) => {
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

  const sendImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const imgFile = e.target.files[0];
      const fileReader = new FileReader();

      if (imgFile.size >= 3000000) {
        alert('보낼 수 없는 크기의 사이즈입니다');
        e.target.value = '';
        return;
      }

      fileReader.readAsDataURL(imgFile);
      fileReader.onload = async (e) => {
        const result = e.target.result as string;
        const chunkSize = 3000;
        const count = Math.ceil(result.length / chunkSize);

        const imageLength = {
          chatMain_id: String(router.query.id),
          sender: user_id,
          contents: String(result.length),
          type: 'IMAGE',
          nickname: nickname,
        };

        onSendMessage(stompClient, imageLength);

        for (let i = 1; i <= count; i++) {
          const substrImage = result.substring(
            (i - 1) * chunkSize,
            i * chunkSize,
          );

          const data = {
            chatMain_id: String(router.query.id),
            sender: user_id,
            contents: substrImage as string,
            type: 'IMAGE',
            nickname: nickname,
          };

          onSendMessage(stompClient, data);
        }
      };
      e.target.value = '';
    } catch (err) {
      console.log(err);
    }
  };

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
      <SubmitForm
        stompClient={stompClient}
        changeMessage={changeMessage}
        message={message}
        sendMessage={sendMessage}
        sendImage={sendImage}
      />
      <ChatDrawer
        masterId={chatRoomInfo.user_id}
        currentCount={currentCount}
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
        stompClient={stompClient}
      />
      {exitModalIsOpen ? <ExitModalTemplate exit={exit} /> : null}
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
