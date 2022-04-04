import React from 'react';
import styled from 'styled-components';
import Header from '../components/chatting/Header';
import GoInfoBtn from '../components/chatting/GoInfoBtn';
import SubmitForm from '../components/chatting/SubmitForm';
import ChatItem from '../components/chatting/ChatItem';
import QuickMessageComp from '../components/chatting/QuickMessageComp';
import MyChatItem from '../components/chatting/MyChatItem';
const chatting = () => {
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

export default chatting;

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
  gap: 20px;
`;
