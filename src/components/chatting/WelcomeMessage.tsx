import React from 'react';
import styled from 'styled-components';
import { ChattingListItem } from '../../modules/chatting/types';

const WelcomeMessage = ({ message }: { message: ChattingListItem }) => {
  return (
    <Container>
      <Content>
        {message.nickname} {message.contents}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  background-color: #e4e4e4;
  font-size: 0.75rem;
  border-radius: 10px;
  padding: 5px 10px;
`;

export default WelcomeMessage;
