import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useInfiniteScroll } from '../../hooks/reder/useInfiniteScroll';
import { RootState } from '../../modules';
import ChatRoomItem from './ChatRoomItem';

const ChatRoomList = () => {
  const chatRooms = useSelector(
    (state: RootState) => state.mainPageState.chatRooms,
  );
  const { target, dataList } = useInfiniteScroll(chatRooms);

  return (
    <Wrap>
      {dataList.map((item) => (
        <ChatRoomItem
          id={item.id}
          key={item.id}
          title={item.title}
          link={item.link}
          maxCount={item.maxCount}
          currentCount={item.currentCount}
          createDate={item.createDate}
        />
      ))}
      <div ref={target}></div>
    </Wrap>
  );
};

export default ChatRoomList;
const Wrap = styled.div`
  padding: 10px 16px 50px;
  background-color: #ffffff;
`;