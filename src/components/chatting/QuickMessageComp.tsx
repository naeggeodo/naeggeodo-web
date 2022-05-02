import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { CompatClient } from '@stomp/stompjs';
import Image from 'next/image';
import { useChat } from '../../hooks/useChat';
import { useSlideMessage } from '../../hooks/useSlideMessage';
import palette from '../../styles/palette';

const QuickMessageComp = ({ stompClient }: { stompClient: CompatClient }) => {
  const target = useRef<HTMLDivElement>(null);
  const slideBar = useRef<HTMLDivElement>(null);

  const { onSendMessage } = useChat();
  const { slideEvent, slideDown } = useSlideMessage();

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
      <Item onClick={sendMessage}>안녕하세요. 지금 주문 가능하신가요?</Item>
      <Item onClick={sendMessage}>
        백석고등학교 정문 앞에서 만나고 싶습니다.
      </Item>
      <Item onClick={sendMessage}>
        잠시 메뉴를 고르겠습니다. 2분만 기다려주세요!
      </Item>
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
  max-height: 200px;

  background-color: #fff;

  border-bottom: 1px solid ${palette.LineGray};
  border-radius: 20px 20px 0px 0px;

  padding: 0 6% 14px;

  overflow: hidden;
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
