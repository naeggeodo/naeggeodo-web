import { useRef } from 'react';
import styled from 'styled-components';
import { CompatClient } from '@stomp/stompjs';
import Image from 'next/image';
import { useChat } from '../../hooks/useChat';

const SubmitForm = ({ stompClient }: { stompClient: CompatClient }) => {
  const textFieldRef = useRef<HTMLDivElement>(null);
  const { onSendMessage } = useChat();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      chatMain_id: 1,
      sender: 1,
      contents: textFieldRef.current.innerHTML,
      type: 'TEXT',
    };
    onSendMessage(stompClient, data);
    textFieldRef.current.innerHTML = '';
  };

  const onImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    const imgFile = e.target.files[0];
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
        <TextField contentEditable='true' ref={textFieldRef} />
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
  height: 8%;
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

const TextField = styled.div`
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
