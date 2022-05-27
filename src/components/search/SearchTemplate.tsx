import Image from 'next/image';
import { FormEvent, PointerEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import TabMenu from '../../components/main/TabMenu';

import { RootState } from '../../modules';
import {
  getResultByInputActions,
  getResultByTagActions,
} from '../../modules/search/actions';
import { SearchTagListResponse } from '../../modules/search/types';
import palette from '../../styles/palette';
import ChatRoomItem from '../main/ChatRoomItem';

const SearchTemplate = ({ tags }: SearchTagListResponse) => {
  const dispatch = useDispatch();

  const [keyWord, setKeyWord] = useState('');

  const { searchResultList } = useSelector(
    (state: RootState) => state.searchPageState,
  );

  const onSearchClick = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(getResultByInputActions.request(keyWord));
  };

  const onTagClick = (e: PointerEvent<HTMLSpanElement>) => {
    const target = e.target as HTMLSpanElement;
    dispatch(getResultByTagActions.request(target.innerText));
  };

  return (
    <>
      <Wrap>
        <SearchForm onSubmit={onSearchClick}>
          <Button>
            <Image
              src='/assets/images/searchgray.svg'
              alt='검색 아이콘'
              width={22}
              height={21}
            />
          </Button>
          <Input
            type='text'
            value={keyWord}
            placeholder='검색어를 입력해주세요'
            onChange={(e) => {
              setKeyWord(e.target.value);
            }}
          />
        </SearchForm>
        {searchResultList ? (
          <ResultList>
            {searchResultList.chatRoom.map((v, i) => (
              <ChatRoomItem
                key={i}
                title={v.title}
                link={v.link}
                maxCount={v.maxCount}
                createDate={v.createDate}
                currentCount={v.currentCount}
              />
            ))}
          </ResultList>
        ) : (
          <SearchTagList>
            {tags &&
              tags.map((v, i) => (
                <SearchTag key={i} onPointerDown={onTagClick}>
                  {v.msg}
                </SearchTag>
              ))}
          </SearchTagList>
        )}
      </Wrap>
      <TabMenu />
    </>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fff;

  padding: 35px 24px 83px;
`;

const SearchForm = styled.form`
  width: 100%;
  height: 35px;

  display: flex;

  border-radius: 10px;
  padding: 6px 10px;
  margin-bottom: 30px;
  background: ${palette.bgGray};
`;

const Input = styled.input`
  width: 100%;

  border: none;
  background: transparent;
  outline: none;
  font-size: 0.9375rem;
`;

const Button = styled.button`
  background: none;
  outline: none;
  border: none;
`;

const SearchTagList = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const SearchTag = styled.span`
  display: inline-block;

  background: #f5f5f5;
  margin: 5px;
  padding: 10px;
  border-radius: 5px;
  font-size: 0.9375rem;
`;

const ResultList = styled.div``;

export default SearchTemplate;
