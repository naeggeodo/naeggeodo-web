import { CompatClient } from '@stomp/stompjs';
import Image from 'next/image';
import { useState } from 'react';
import styled from 'styled-components';

import { useChat } from '../../hooks/useChat';

const SubmitForm = ({ stompClient }: { stompClient: CompatClient }) => {
  const { onSendMessage } = useChat();
  const [message, setMessage] = useState('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!message) return;
    const data = {
      chatMain_id: 1,
      sender: 1,
      contents: message,
      type: 'TEXT',
    };

    onSendMessage(stompClient, data);
    setMessage('');
  };
  const onImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    // if (!e.target.files || !e.target.files[0]) return;
    const imgFile = e.target.files[0];
    console.log('이미지', imgFile);
    reader.onload = function () {
      const result = reader.result;
      const data = {
        chatMain_id: 1,
        sender: 1,
        contents: result as string,
        type: 'IMAGE',
      };
      onSendMessage(stompClient, data);
    };
    reader.readAsDataURL(imgFile);
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
        <Input
          type='text'
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
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

export default SubmitForm;
const Wrap = styled.div`
  background: #fff;
  width: 100%;
  height: 8%;
`;
const ContentWrap = styled.form`
  display: flex;
  align-items: center;
  width: 90%;
  height: 100%;
  margin: 0 auto;
  justify-content: center;
  gap: 3%;
`;
const Input = styled.input`
  background: #f2f2f8;
  outline: none;
  border: none;
  border-radius: 10px;
  width: 90%;
  height: 70%;
  padding: 0 10px;
`;
const ImgAddLabel = styled.label`
  cursor: pointer;
`;
const ImgAddInput = styled.input`
  display: none;
`;
const Button = styled.button`
  outline: none;
  cursor: pointer;
  background: #fff;
  border: none;
`;
