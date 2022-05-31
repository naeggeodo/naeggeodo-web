import Image from 'next/image';
import { FormEvent, PointerEvent, useEffect, useRef, useState } from 'react';
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
import { SearchResult } from '../../modules/search/types';

const SearchTemplate = ({ tags }: SearchTagListResponse) => {
  const dispatch = useDispatch();

  const target = useRef<HTMLDivElement>(null);

  const { searchResultList } = useSelector(
    (state: RootState) => state.searchPageState,
  );

  const limit = 5;

  const [keyWord, setKeyWord] = useState('');
  const [skip, setSkip] = useState(0);
  const [dataList, setDataList] = useState<SearchResult[]>([]);

  useEffect(() => {
    if (searchResultList) {
      const observer = new IntersectionObserver(callback, { threshold: 0.8 });
      observer.observe(target.current);

      return () => {
        observer && observer.disconnect();
      };
    }
  }, [searchResultList]);

  useEffect(() => {
    if (searchResultList && skip <= searchResultList.chatRoom.length) {
      const arr = [];
      for (let i = skip; i < searchResultList.chatRoom.length; i++) {
        if (arr.length > limit) break;
        arr.push(searchResultList.chatRoom[i]);
      }
      console.log(arr);
      setDataList((prev) => prev.concat(arr));
    }
  }, [skip, searchResultList]);

  const callback = async ([entry], observer: IntersectionObserver) => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      setSkip((prev) => prev + limit + 1);
      observer.observe(entry.target);
    }
  };

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
        {dataList.length > 0 ? (
          <ResultList>
            {dataList.map((v, i) => (
              <ChatRoomItem
                id={v.id}
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
        <Target ref={target}></Target>
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
  cursor: pointer;
`;

const ResultList = styled.div``;

const Target = styled.div`
  width: 100%;
  height: 100px;
`;

export default SearchTemplate;
