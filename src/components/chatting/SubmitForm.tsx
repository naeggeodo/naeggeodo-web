import { useState } from 'react';
import styled from 'styled-components';
import { CompatClient } from '@stomp/stompjs';
import Image from 'next/image';
import { useChat } from '../../hooks/useChat';

const SubmitForm = ({ stompClient }: { stompClient: CompatClient }) => {
  const [message, setMessage] = useState('');
  const { onSendMessage } = useChat();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!message) return;
    const data = {
      chatMain_id: 1,
      sender: 2,
      contents: message,
      type: 'TEXT',
    };
    onSendMessage(stompClient, data);
    setMessage('');
  };

  const onImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();
    const imgFile = e.target.files[0];

    fileReader.readAsDataURL(imgFile);
    fileReader.onload = (e) => {
      const result = e.target.result;

      const data = {
        chatMain_id: 1,
        sender: 2,
        contents: result as string,
        type: 'TEXT',
      };
      onSendMessage(stompClient, data);
    };
  };

  return (
    <Wrap>
      <ContentWrap onSubmit={onSubmit}>
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
          onChange={onImgChange}
        />
        <TextField
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button>
          <Image
            src='/assets/images/submitbtn.svg'
            alt='submit button'
            width={23}
            height={24}
          />
        </Button>
      </ContentWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 6%;
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

const TextField = styled.textarea`
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
