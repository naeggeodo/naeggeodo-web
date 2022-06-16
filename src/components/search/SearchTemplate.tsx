import Image from 'next/image';
import styled from 'styled-components';
import palette from '../../styles/palette';

import TabMenu from '../../components/main/TabMenu';
import SearchTag from './SearchTag';
import SearchResultList from './SearchResultList';

import { useLoadLib } from '../../hooks/utils/useLoadLib';
import { useSearchChatRoom } from '../../hooks/search/useSearchChatRoom';
import CurrentLocation from './CurrentLocation';
import LoginModal from '../login/LoginModalTemplate';
import { useSelector } from 'react-redux';
import { RootState } from '../../modules';

const SearchTemplate = () => {
  const { router, dispatch } = useLoadLib();
  const {
    searchValue,
    handleChangeSearchValue,
    getSearchListByTag,
    getSearchListByInput,
    tags,
    searchResultList,
    selected,
  } = useSearchChatRoom(dispatch, router);

  const loginModalIsClicked = useSelector(
    (state: RootState) => state.modalStates.loginModalIsClicked,
  );

  return (
    <>
      <Container>
        <CurrentLocation />
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
            value={searchValue}
            placeholder='검색어를 입력해주세요'
            onChange={handleChangeSearchValue}
          />
        </SearchForm>
        {searchResultList ? (
          <SearchResultList />
        ) : (
          <SearchTagContainer>
            <SearchTagTitle>많이 검색한 태그</SearchTagTitle>
            <SearchTagList>
              {tags?.length > 0 &&
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
          </SearchTagContainer>
        )}
      </Container>
      {loginModalIsClicked && <LoginModal />}

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

const SearchTagContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const SearchTagTitle = styled.p`
  font-size: 1rem;
  font-family: 'SpoqaBold';
`;

const SearchTagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
`;

export default SearchTemplate;
