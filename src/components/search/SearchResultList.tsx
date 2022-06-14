import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useInfiniteScroll } from '../../hooks/render/useInfiniteScroll';
import { RootState } from '../../modules';
import { ChatRoomItemResponse } from '../../modules/main/types';
import ChatRoomItem from '../main/ChatRoomItem';

const SearchResultList = () => {
  const { searchResultList } = useSelector(
    (state: RootState) => state.searchPageState,
  );

  const { target, dataList } = useInfiniteScroll<ChatRoomItemResponse>(
    searchResultList.chatRoom,
  );

  return (
    <Container>
      {dataList.length > 0 ? (
        dataList.map((data, i) => (
          <ChatRoomItem
            id={data.id}
            key={i}
            title={data.title}
            link={data.link}
            maxCount={data.maxCount}
            createDate={data.createDate}
            currentCount={data.currentCount}
            orderTimeType={data.orderTimeType}
            imgPath={data.imgPath}
            address={data.address}
          />
        ))
      ) : (
        <p>검색 결과가 없습니다😥</p>
      )}
      {dataList.length < searchResultList.chatRoom.length && (
        <div ref={target} />
      )}
    </Container>
  );
};

const Container = styled.div`
  padding-bottom: 50px;
`;

export default SearchResultList;
