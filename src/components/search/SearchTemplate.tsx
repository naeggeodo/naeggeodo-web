import Image from 'next/image';
import styled from 'styled-components';
import TabMenu from '../../components/main/TabMenu';
import palette from '../../styles/palette';

const SearchTemplate = () => {
  const searchHistoryList = [
    '떡볶이',
    '닭발',
    '교촌치킨',
    '허니콤보',
    '불닭치킨',
    'GS25',
    '무료배달',
    '테이크아웃',
    '파리바게트',
  ];

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
          {searchHistoryList.map((v, i) => (
            <SearchHistoryItem key={i}>{v}</SearchHistoryItem>
          ))}
        </SearchHistoryList>
      </Wrap>
      <TabMenu />
    </>
  );
};

const Wrap = styled.div`
  width: 90%;

  padding-bottom: 40px;
  margin: 0 auto;
  margin-top: 20px;
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
  padding: 10px;
  background: #f5f5f5;
  margin: 5px;
  border-radius: 5px;
  font-size: 0.9375rem;
`;

export default SearchTemplate;
