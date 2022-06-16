import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { QuickChatting } from '../../../modules/quick-chatting/types';

const QuickChatModalItem = ({ quickChat }: { quickChat: QuickChatting }) => {
  return (
    <Wrap>
      <Message>{quickChat.msg}</Message>
      <RemoveButton>
        <Image src='/assets/images/remove.svg' width={20} height={20} />
      </RemoveButton>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Message = styled.p``;

const RemoveButton = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  background: none;
`;

export default QuickChatModalItem;
