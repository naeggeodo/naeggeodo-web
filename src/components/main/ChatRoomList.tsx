import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useInfiniteScroll } from '../../hooks/render/useInfiniteScroll';
import { RootState } from '../../modules';
import { ChatRoomItemResponse } from '../../modules/main/types';
import ChatRoomItem from './ChatRoomItem';

const ChatRoomList = () => {
  const chatRooms = useSelector(
    (state: RootState) => state.mainPageState.chatRooms,
  );
  const { target, dataList } =
    useInfiniteScroll<ChatRoomItemResponse>(chatRooms);

  return (
    <Container>
      {chatRooms.map((item) => (
        <ChatRoomItem
          id={item.id}
          key={item.id}
          title={item.title}
          link={item.link}
          maxCount={item.maxCount}
          currentCount={item.currentCount}
          createDate={item.createDate}
          orderTimeType={item.orderTimeType}
          imgPath={item.imgPath}
        />
      ))}
      <div ref={target}></div>
    </Container>
  );
};

const Container = styled.div`
  padding: 10px 16px 50px;
  background-color: #ffffff;
`;

export default React.memo(ChatRoomList);
