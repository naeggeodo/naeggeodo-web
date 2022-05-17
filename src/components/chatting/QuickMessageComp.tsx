import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { CompatClient } from '@stomp/stompjs';
import { useSelector } from 'react-redux';
import Image from 'next/image';

import { useChat } from '../../hooks/useChat';
import { useSlideMessage } from '../../hooks/useSlideMessage';
import palette from '../../styles/palette';
import { RootState } from '../../modules';

const QuickMessageComp = ({ stompClient }: { stompClient: CompatClient }) => {
  const target = useRef<HTMLDivElement>(null);
  const slideBar = useRef<HTMLDivElement>(null);

  const { onSendMessage } = useChat();
  const { slideEvent, slideDown } = useSlideMessage();

  const { quickChatList } = useSelector(
    (state: RootState) => state.chattingRoomState,
  );
  const { quickChat } = quickChatList;

  useEffect(() => {
    slideEvent(slideBar, target);
  }, []);

  const sendMessage = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>,
  ) => {
    const clickTarget = e.target as HTMLParagraphElement;
    const data = {
      chatMain_id: 1,
      sender: 1,
      contents: clickTarget.innerHTML,
      type: 'TEXT',
    };
    onSendMessage(stompClient, data);
    slideDown(target);
  };
  return (
    <Wrap ref={target}>
      <Div ref={slideBar}>
        <Image
          src='/assets/images/slidedown.svg'
          alt='icon'
          width={36}
          height={3}
        />
      </Div>
      {quickChat &&
        quickChat.map((v) => (
          <Item key={v.idx} onClick={sendMessage}>
            {v.msg}
          </Item>
        ))}
      <EditBtn>
        <p>편집하기</p>
        <Image
          src='/assets/images/setting.svg'
          alt='setting icon'
          width={15}
          height={20}
        />
      </EditBtn>
    </Wrap>
  );
};

const Wrap = styled.div`
  position: fixed;
  bottom: 8%;
  width: 100%;
  background-color: #fff;

  border-bottom: 1px solid ${palette.LineGray};
  border-radius: 20px 20px 0px 0px;
  overflow: hidden;
  padding: 0 6% 14px;

  touch-action: none;

  & > img {
    display: block;
    margin: 0 auto;
  }
`;

const Div = styled.div`
  padding: 10px 0 22px;

  text-align: center;
  cursor: grab;
  touch-action: none;
`;

const Item = styled.p`
  font-size: 0.9375rem;
  line-height: 20px;
  margin-bottom: 22px;
  cursor: pointer;
`;

const EditBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 3px;

  color: #ef6212;
  background-color: transparent;

  font-size: 0.75rem;

  padding: 0;

  cursor: pointer;
  outline: none;
  border: none;
`;

export default QuickMessageComp;
