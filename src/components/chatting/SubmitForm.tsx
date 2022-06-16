import React, { useCallback, useState } from 'react';
import styled, { css } from 'styled-components';
import Image from 'next/image';
import QuickChatList from './quickChat/QuickChatList';

type StyledType = {
  isActive: boolean;
};

const SubmitForm = ({
  stompClient,
  changeMessage,
  message,
  sendMessage,
  sendImage,
}: any) => {
  const [isQuickChatOpen, setIsQuickChatOpen] = useState(false);

  const onQuickChatOpen = useCallback(() => {
    setIsQuickChatOpen(!isQuickChatOpen);
  }, [isQuickChatOpen]);

  return (
    <Container>
      <QuickChatList
        stompClient={stompClient}
        isQuickChatOpen={isQuickChatOpen}
      />
      <FormContainer>
        <QuickChatButton isActive={isQuickChatOpen} onClick={onQuickChatOpen}>
          <Image
            src='/assets/images/toparrow.svg'
            alt='submit button'
            width={30}
            height={30}
          />
        </QuickChatButton>
        <ContentWrap onSubmit={sendMessage}>
          <ImgAddLabel htmlFor='image'>
            <Image
              src='/assets/images/imgaddbtn.svg'
              alt='img add icon'
              width={19}
              height={24}
            />
          </ImgAddLabel>
          <ImgAddInput
            type='file'
            accept='image/*'
            id='image'
            onChange={sendImage}
          />
          <TextField value={message} onChange={changeMessage} />
          <SubmitButton>
            <Image
              src='/assets/images/submitbtn.svg'
              alt='submit button'
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
  display: flex;
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
          transform: rotate(-180deg);
        `
      : css`
          transform: rotate(360deg);
        `}
  transition: 0.3s;
`;

export default SubmitForm;
