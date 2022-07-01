import React, { FormEvent, useCallback, useState } from 'react';
import styled, { css } from 'styled-components';
import Image from 'next/image';
import { CompatClient } from '@stomp/stompjs';

import QuickChatList from './quickChat/QuickChatList';

type StyledType = {
  isActive: boolean;
};

interface SubmitFormProps {
  stompClient: CompatClient;
  changeMessage: (e: React.ChangeEvent<HTMLInputElement>) => void;
  message: string;
  sendMessage: (e: FormEvent<HTMLFormElement>) => void;
  sendImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SubmitForm = ({
  stompClient,
  changeMessage,
  message,
  sendMessage,
  sendImage,
}: SubmitFormProps) => {
  const [isQuickChatOpen, setIsQuickChatOpen] = useState(false);

  const onQuickChatOpen = useCallback(() => {
    setIsQuickChatOpen(!isQuickChatOpen);
  }, [isQuickChatOpen]);

  const onQuickChatClose = useCallback(() => {
    if (!isQuickChatOpen) return;
    setIsQuickChatOpen(false);
  }, [isQuickChatOpen]);

  return (
    <Container>
      <QuickChatList
        stompClient={stompClient}
        isQuickChatOpen={isQuickChatOpen}
      />
      <FormContainer>
        <QuickChatButton
          isActive={isQuickChatOpen}
          onClick={onQuickChatOpen}
          title="채팅 빠르게 보내기 버튼">
          <Image
            src="/assets/images/toparrow.svg"
            alt="채팅 빠르게 보내기 버튼"
            width={30}
            height={30}
          />
        </QuickChatButton>

        <ContentWrap onSubmit={sendMessage}>
          <ImgAddLabel htmlFor="image" title="이미지 추가 아이콘">
            <Image
              src="/assets/images/imgaddbtn.svg"
              alt="이미지 추가 아이콘"
              width={19}
              height={24}
            />
          </ImgAddLabel>
          <ImgAddInput
            type="file"
            accept=".jpg, .png, .jpeg"
            id="image"
            onChange={sendImage}
          />
          <TextField
            value={message}
            onClick={onQuickChatClose}
            onChange={changeMessage}
            title="채팅 텍스트 전송 input"
          />
          <SubmitButton title="채팅 전송 버튼">
            <Image
              src="/assets/images/submitbtn.svg"
              alt="전송 버튼"
              width={23}
              height={24}
            />
          </SubmitButton>
        </ContentWrap>
      </FormContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background: #fff;
`;

const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;

const ContentWrap = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;

  padding: 0 10px;
  height: 52px;
`;

const TextField = styled.input`
  width: 94%;
  height: 40px;

  font-size: 0.9375rem;
  resize: none;

  border: none;
  border-radius: 10px;
  background-color: #f2f2f8;
  padding: 10px 10px;
  outline: none;

  overflow-y: auto;

  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ImgAddLabel = styled.label`
  cursor: pointer;
`;

const ImgAddInput = styled.input`
  display: none;
`;

const SubmitButton = styled.button`
  all: unset;
  cursor: pointer;
  background-color: #fff;
`;

const QuickChatButton = styled.button<StyledType>`
  all: unset;
  cursor: pointer;
  background-color: #fff;
  opacity: 0.6;
  ${(props) =>
    props.isActive
      ? css`
          transform: rotate(180deg);
        `
      : css`
          transform: rotate(0deg);
        `}
  transition: 0.3s;
`;

export default SubmitForm;
