import React, { useState, useEffect, useRef, FormEvent } from "react";
import styled from "styled-components";
import { CompatClient, Stomp } from "@stomp/stompjs";
import SockJS from "sockjs-client";
import { useSelector } from "react-redux";

import Header from "../chatting/Header";
import GoInfoBtn from "../chatting/GoInfoBtn";
import SubmitForm from "../chatting/SubmitForm";
import ChatDrawer from "./ChatDrawer";
import { RootState } from "../../modules";
import ChattingList from "./ChattingList";
import { useSelectLoginStates } from "../../hooks/select/useSelectLoginStates";
import {
  changeCurrentCountInChatting,
  setCurrentChattingList,
  setImageListInChatting,
  setParticipatingUsers,
} from "../../modules/chatting/actions";
import DateFormatter from "../../utils/DateFormatter";
import { useChat } from "../../hooks/useChat";
import { useSelectChatRoomInfo } from "../../hooks/select/useSelectChatRoomInfo";
import { useLoadLib } from "../../hooks/utils/useLoadLib";
import ExitModalTemplate from "./ExitModalTemplate";
import imageCompression from "browser-image-compression";

var stompClient: CompatClient;

const ChattingTemplate = () => {
  const { onSendMessage } = useChat();
  const { dispatch, router } = useLoadLib();
  const { user_id, accessToken } = useSelectLoginStates();
  const scrollRef = useRef<HTMLDivElement>(null);
  const chatListDivRef = useRef<HTMLDivElement>(null);

  const { link, imgPath, currentCount, maxCount, title } =
    useSelectChatRoomInfo();
  const { chatRoomInfo, chattingList, nickname } = useSelector(
    (state: RootState) => state.chattingRoomState
  );
  const exitModalIsOpen = useSelector(
    (state: RootState) => state.modalStates.exitModalIsOpen
  );

  const [message, setMessage] = useState<string>("");
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const changeMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    chatListDivRef.current.scroll({
      top: scrollRef.current.offsetTop,
      behavior: "smooth",
    });
  }, [chattingList.messages]);

  const onError = (e) => {
    const errorMessage = e.headers.message;
    switch (errorMessage) {
      case "SESSION_DUPLICATION":
        alert("중복된 아이디로 접속하실 수 없습니다.");
        router.replace("/chat-rooms");
        return;
      case "INVALID_STATE":
        alert("입장할 수 없는 채팅방 입니다.");
        router.replace("/chat-rooms");
        return;
      case "BANNED_CHAT_USER":
        alert("강제퇴장 조치로 인해 입장이 불가합니다.");
        router.replace("/chat-rooms");
        return;
      case "BAD_REQUEST":
        alert("잘못된 요청입니다.");
        router.replace("/");
        return;
      case "UNAUTHORIZED":
        alert("인증되지 않은 아이디입니다. 다시 로그인 해주세요.");
        router.replace("/login");
        return;
      default:
        alert("잘못된 접근입니다.");
        router.replace("/");
        return;
    }
  };

  function onEnter() {
    const sendData = {
      chatMain_id: router.query.id,
      sender: user_id,
      contents: "님이 입장하셨습니다.",
      type: "WELCOME",
      nickname,
    };
    stompClient.send("/app/chat/enter", {}, JSON.stringify(sendData));
  }

  function exit() {
    const data = {
      chatMain_id: router.query.id,
      sender: user_id,
      contents: "님이 퇴장하셨습니다.",
      type: "EXIT",
      nickname,
    };
    stompClient.send("/app/chat/exit", {}, JSON.stringify(data));
  }

  const connect = () => {
    // stompClient = Stomp.over(
    //   () => new SockJS(`${process.env.NEXT_PUBLIC_API_URL}/chat`)
    // );

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
          socket._transport.url
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

            if (newMessage.type === "CNT") {
              console.log(newMessage);
              dispatch(
                changeCurrentCountInChatting(
                  JSON.parse(newMessage.contents).currentCount
                )
              );
              dispatch(
                setParticipatingUsers(JSON.parse(newMessage.contents).users)
              );
            } else if (newMessage.type === "IMAGE") {
              dispatch(setImageListInChatting(newMessage.contents));
            }
          },
          { chatMain_id: router.query.id as string }
        );

        stompClient.subscribe(`/user/queue/${sessionId}`, (e) => {
          const messageObj = JSON.parse(e.body);
          if (messageObj.type === "BAN") {
            window.alert("강제퇴장 당하셨습니다.");
            router.replace("/chat-rooms");
          } else if (messageObj === "ALERT") {
            window.alert(messageObj.contents);
          }
        });

        onEnter();
      },
      onError
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
      type: "TEXT",
      nickname: nickname,
    };
    onSendMessage(stompClient, data);
    setMessage("");
  };

  const sendImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      // const options = {
      //   maxSizeMB: 0.1,
      //   maxWidthOrHeight: 100,
      // };

      const imgFile = e.target.files[0];
      // if (imgFile.size >= 50000) {
      //   alert("보낼 수 없는 크기의 사이즈입니다");
      //   e.target.value = "";
      //   return;
      // }
      // if (imgFile.size >= 2000) {
      //   const compressedFile = await imageCompression(imgFile, options);
      //   fileReader.readAsDataURL(compressedFile);
      //   console.log("after", compressedFile.size);
      // } else {
      // fileReader.readAsDataURL(imgFile);
      // }
      imgFile.arrayBuffer().then((resp) => {
        const ui8 = new Uint8Array(resp);
        const newBlob = new Blob([ui8], { type: "image/png" });
        const chunkArray = [];
        const chunkSize = Math.ceil(newBlob.size / 10);
        for (let i = 0; i <= 10; i++) {
          const startByte = chunkSize * i;
          chunkArray.push(
            newBlob.slice(startByte, startByte + chunkSize, newBlob.type)
          );
        }
        const mergedBlob = new Blob(chunkArray, { type: newBlob.type });

        const fileReader = new FileReader();
        fileReader.onload = async (e) => {
          console.log(e.target.result);
        };
        fileReader.readAsText(newBlob);

        // const data = {
        //   chatMain_id: String(router.query.id),
        //   sender: user_id,
        //   contents: str,
        //   type: "IMAGE",
        //   nickname: nickname,
        // };
        // onSendMessage(stompClient, data);
      });

      // })

      // console.log(imgFile);

      // fileReader.onload = async (e) => {
      //   const result = e.target.result;
      //   const data = {
      //     chatMain_id: String(router.query.id),
      //     sender: user_id,
      //     contents: result as string,
      //     type: "IMAGE",
      //     nickname: nickname,
      //   };
      //   onSendMessage(stompClient, data);
      // };
      e.target.value = "";
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    connect();
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
      {chatRoomInfo?.state !== "END" && chatRoomInfo?.user_id === user_id && (
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
