import React from 'react';
import styled from 'styled-components';
import Header from '../chatting/Header';
import GoInfoBtn from '../chatting/GoInfoBtn';
import SubmitForm from '../chatting/SubmitForm';
import ChatItem from '../chatting/ChatItem';
import QuickMessageComp from '../chatting/QuickMessageComp';
import MyChatItem from '../chatting/MyChatItem';
const ChattingTemplate = () => {
  return (
    <Wrap>
      <Header />
      <Div>
        <GoInfoBtn />
      </Div>
      <Content>
        <ChatItem />
        <MyChatItem />
        <MyChatItem />
        <MyChatItem />
        <QuickMessageComp />
      </Content>
      <SubmitForm />
    </Wrap>
  );
};

export default ChattingTemplate;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background: #f2f2f8;
  overflow: hidden;
`;
const Div = styled.div`
  width: 100%;
  height: 10%;
  padding: 10px 0 18px;
`;
const Content = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 72%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
