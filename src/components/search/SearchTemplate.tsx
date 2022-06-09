import Image from 'next/image';
import { FormEvent, PointerEvent, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import TabMenu from '../../components/main/TabMenu';
import { RootState } from '../../modules';
import {
  getResultByInputActions,
  getResultByTagActions,
} from '../../modules/search/actions';
import palette from '../../styles/palette';
import SearchTag from './SearchTag';
import SearchResultList from './SearchResultList';

const SearchTemplate = () => {
  const dispatch = useDispatch();
  const tags = useSelector(
    (state: RootState) => state.searchPageState?.searchTagList?.tags,
  );

  const { searchResultList } = useSelector(
    (state: RootState) => state.searchPageState,
  );
  const selected = useSelector(
    (state: RootState) => state.searchPageState.selected,
  );

  const [keyWord, setKeyWord] = useState('');

  const getSearchListByInput = useCallback<
    (e: FormEvent<HTMLFormElement>) => void
  >(
    (e) => {
      e.preventDefault();
      dispatch(getResultByInputActions.request(keyWord));
    },
    [dispatch],
  );

  const getSearchListByTag = useCallback<
    (e: PointerEvent<HTMLButtonElement>) => void
  >(
    (e) => {
      const target = e.target as HTMLButtonElement;
      dispatch(getResultByTagActions.request(target.innerText));
    },
    [dispatch],
  );

  return (
    <>
      <Container>
        <SearchForm onSubmit={getSearchListByInput}>
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
        {searchResultList && searchResultList.chatRoom.length > 0 ? (
          <SearchResultList />
        ) : (
          <SearchTagList>
            {tags &&
              tags.map((tag, i) => (
                <SearchTag
                  key={i}
                  handleClick={getSearchListByTag}
                  selected={selected}
                  dataValue={tag.msg}>
                  {tag.msg}
                </SearchTag>
              ))}
          </SearchTagList>
        )}
      </Container>
      <TabMenu />
    </>
  );
};

const Container = styled.div`
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

export default SearchTemplate;
