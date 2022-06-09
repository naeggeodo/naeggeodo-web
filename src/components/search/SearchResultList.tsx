import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useInfiniteScroll } from '../../hooks/reder/useInfiniteScroll';
import { RootState } from '../../modules';
import ChatRoomItem from '../main/ChatRoomItem';

const SearchResultList = () => {
  const { searchResultList } = useSelector(
    (state: RootState) => state.searchPageState,
  );

  const { target, dataList } = useInfiniteScroll(searchResultList.chatRoom);

  return (
    <Wrap>
      {dataList.map((data, i) => (
        <ChatRoomItem
          id={data.id}
          key={i}
          title={data.title}
          link={data.link}
          maxCount={data.maxCount}
          createDate={data.createDate}
          currentCount={data.currentCount}
        />
      ))}

      <div ref={target} />
    </Wrap>
  );
};

export default SearchResultList;

const Wrap = styled.div`
  padding-bottom: 50px;
`;
