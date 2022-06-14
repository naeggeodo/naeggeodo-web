import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { CompatClient } from '@stomp/stompjs';
import Image from 'next/image';
import { useChat } from '../../hooks/useChat';
import { useRouter } from 'next/router';
import { useSelectLoginStates } from '../../hooks/select/useSelectLoginStates';
import { useSelector } from 'react-redux';
import { RootState } from '../../modules';

const SubmitForm = ({ stompClient }: { stompClient: CompatClient }) => {
  const { onSendMessage } = useChat();

  const [message, setMessage] = useState('');
  const router = useRouter();
  const { user_id } = useSelectLoginStates();

  const { nickname } = useSelector(
    (state: RootState) => state.chattingRoomState,
  );

  const sendMessage = useCallback<
    (e: React.FormEvent<HTMLFormElement>) => void
  >(
    (e) => {
      e.preventDefault();

      if (!message) return;

      const data = {
        chatMain_id: String(router.query.id),
        sender: user_id,
        contents: message,
        type: 'TEXT',
        nickname,
      };
      onSendMessage(stompClient, data);
      setMessage('');
    },
    [message],
  );

  const sendImage = useCallback<
    (e: React.ChangeEvent<HTMLInputElement>) => void
  >((e) => {
    const fileReader = new FileReader();
    const imgFile = e.target.files[0];

    fileReader.readAsDataURL(imgFile);
    fileReader.onload = (e) => {
      const result = e.target.result;

      const data = {
        chatMain_id: String(router.query.id),
        sender: user_id,
        contents: result as string,
        type: 'TEXT',
        nickname,
      };
      onSendMessage(stompClient, data);
    };
  }, []);

  const changeMessage = useCallback<
    (e: React.ChangeEvent<HTMLInputElement>) => void
  >(
    (e) => {
      setMessage(e.target.value);
    },
    [message],
  );

  return (
    <Container>
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
        <Button>
          <Image
            src='/assets/images/submitbtn.svg'
            alt='submit button'
            width={23}
            height={24}
          />
        </Button>
      </ContentWrap>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background: #fff;
`;

const ContentWrap = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3%;

  width: 90%;
  height: 100%;

  margin: 0 auto;
`;

const TextField = styled.input`
  width: 90%;
  max-height: 70%;

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

const Button = styled.button`
  all: unset;
  background-color: #fff;
`;

export default SubmitForm;
