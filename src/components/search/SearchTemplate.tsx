import Image from 'next/image';
import styled from 'styled-components';
import TabMenu from '../../components/main/TabMenu';
import { SearchTagListResponse } from '../../modules/search/types';
import palette from '../../styles/palette';

const SearchTemplate = ({ tags }: SearchTagListResponse) => {
  return (
    <>
      <Wrap>
        <SearchForm>
          <Button>
            <Image
              src='/assets/images/searchgray.svg'
              alt='검색 아이콘'
              width={22}
              height={21}
            />
          </Button>
          <Input type='text' placeholder='검색어를 입력해주세요' />
        </SearchForm>
        <SearchHistoryList>
          {tags &&
            tags.map((v, i) => (
              <SearchHistoryItem key={i}>{v.msg}</SearchHistoryItem>
            ))}
        </SearchHistoryList>
      </Wrap>
      <TabMenu />
    </>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fff;

  padding: 30px 24px 83px;
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

const SearchHistoryList = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;
const SearchHistoryItem = styled.span`
  display: inline-block;

  background: #f5f5f5;
  margin: 5px;
  padding: 10px;
  border-radius: 5px;
  font-size: 0.9375rem;
`;

export default SearchTemplate;
