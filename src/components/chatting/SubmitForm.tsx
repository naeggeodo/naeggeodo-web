import { CompatClient } from '@stomp/stompjs';
import Image from 'next/image';
import { useState } from 'react';
import styled from 'styled-components';
import { ChatItemType } from '../../modules/chatting/types';
import imgaddbtn from '../../assets/icons/imgaddbtn.svg';
import submitbtn from '../../assets/icons/submitbtn.svg';
import { useChat } from '../../hooks/useChat';

const SubmitForm = ({
  stompClient,
}: {
  stompClient: CompatClient;
  setMessageList: React.Dispatch<React.SetStateAction<ChatItemType[]>>;
}) => {
  const { onSendMessage } = useChat();
  const [message, setMessage] = useState('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      chatMain_id: 1,
      sender: 1,
      contents: message,
      type: 'TEXT',
    };
    onSendMessage(stompClient, data, setMessage);
  };
  return (
    <Wrap>
      <ContentWrap onSubmit={onSubmit}>
        <ImgAddLabel htmlFor='image'>
          <Image src={imgaddbtn} alt='img add icon' width={19} height={24} />
        </ImgAddLabel>
        <ImgAddBtn type='file' accept='image/*' id='image' />
        <Input
          type='text'
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <Button>
          <Image src={submitbtn} alt='submit button' width={23} height={24} />
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
const ImgAddBtn = styled.input`
  display: none;
`;
const Button = styled.button`
  outline: none;
  cursor: pointer;
  background: #fff;
  border: none;
`;
