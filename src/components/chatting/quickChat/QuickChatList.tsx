import { useCallback, useState } from 'react';
import styled from 'styled-components';
import { CompatClient } from '@stomp/stompjs';
import { useSelector } from 'react-redux';
import Image from 'next/image';

import { useChat } from '../../../hooks/useChat';
import palette from '../../../styles/palette';
import { RootState } from '../../../modules';
import { useRouter } from 'next/router';
import { useSelectLoginStates } from '../../../hooks/select/useSelectLoginStates';
import QuickChatListEditModal from './QuickChatListEditModal';
import { QuickChattingListResponse } from '../../../modules/quick-chatting/types';

type StyledType = {
  isActive: boolean;
  length: number;
};

const QuickChatList = ({
  stompClient,
  isQuickChatOpen,
}: {
  stompClient: CompatClient;
  isQuickChatOpen: boolean;
}) => {
  const { onSendMessage } = useChat();
  const router = useRouter();

  const { nickname } = useSelector(
    (state: RootState) => state.chattingRoomState,
  );

  const quickChatList: QuickChattingListResponse = useSelector(
    (state: RootState) => state.quickChatStates.quickChatResponse,
  );
  const { user_id } = useSelectLoginStates();

  const [isQuickChatEditModalOpen, setIsQuickChatEditModalOpen] =
    useState(false);

  const sendMessage = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>,
  ) => {
    const clickTarget = e.target as HTMLParagraphElement;
    const data = {
      chatMain_id: String(router.query.id),
      sender: user_id,
      contents: clickTarget.innerHTML,
      type: 'TEXT',
      nickname,
    };

    onSendMessage(stompClient, data);
  };

  const openQuickChatEditModal = useCallback(() => {
    setIsQuickChatEditModalOpen(true);
  }, [isQuickChatEditModalOpen]);

  return (
    <Container
      isActive={isQuickChatOpen}
      length={quickChatList.quickChat.length}>
      {quickChatList.quickChat &&
        quickChatList.quickChat.map((quickChat) => (
          <Item key={quickChat.idx} onClick={sendMessage}>
            {quickChat.msg}
          </Item>
        ))}
      <EditBtn onClick={openQuickChatEditModal}>
        <p>편집하기</p>
        <Image
          src='/assets/images/setting.svg'
          alt='setting icon'
          width={15}
          height={20}
        />
      </EditBtn>
      {isQuickChatEditModalOpen && <QuickChatListEditModal />}
    </Container>
  );
};

const Container = styled.div<StyledType>`
  position: absolute;
  bottom: 50px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  height: ${(props) => (props.isActive ? `${65 * props.length}px` : '0')};

  padding: 0 6% 10px;

  transition: 0.3s;

  border-bottom: 1px solid ${palette.LineGray};
  border-radius: 20px 20px 0px 0px;
  overflow: hidden;

  background-color: #fff;

  & > img {
    display: block;
    margin: 0 auto;
  }
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

export default QuickChatList;
