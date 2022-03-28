import styled from 'styled-components';
import CategoryMenuSlide from '../components/main/CategoryMenuSlide';
import ChatRoomItem from '../components/main/ChatRoomItem';
import TabMenu from '../components/main/TabMenu';

const MockChatList = [
  {
    id: 1,
    title: '버거킹 하남 미사점',
    chattingUrl: 'login',
    total: 3,
    numOfPeople: 2,
    registerTime: 45,
  },
  {
    id: 2,
    title: '버거킹 하남 미사점',
    chattingUrl: 'login',
    total: 3,
    numOfPeople: 2,
    registerTime: 45,
  },
  {
    id: 3,
    title: '버거킹 하남 미사점',
    chattingUrl: 'login',
    total: 3,
    numOfPeople: 2,
    registerTime: 45,
  },
  {
    id: 4,
    title: '버거킹 하남 미사점',
    chattingUrl: 'login',
    total: 3,
    numOfPeople: 2,
    registerTime: 45,
  },
  {
    id: 5,
    title: '버거킹 하남 미사점',
    chattingUrl: 'login',
    total: 3,
    numOfPeople: 2,
    registerTime: 45,
  },
  {
    id: 6,
    title: '버거킹 하남 미사점',
    chattingUrl: 'login',
    total: 3,
    numOfPeople: 2,
    registerTime: 45,
  },
  {
    id: 7,
    title: '버거킹 하남 미사점',
    chattingUrl: 'login',
    total: 3,
    numOfPeople: 2,
    registerTime: 45,
  },
];

export const categoryMockData = [
  '전체',
  '치킨',
  '버거',
  '한식',
  '일식/돈까스',
  '카페/디저트',
  '족발/보쌈',
  '고기/구이',
];

const Home: React.FC = () => {
  return (
    <Container>
      <CategoryMenuSlide categories={categoryMockData} />
      <StyledUl>
        {MockChatList.map((item) => (
          <ChatRoomItem
            key={item.id}
            title={item.title + item.id}
            chattingUrl={item.chattingUrl}
            total={item.total}
            numOfPeople={item.numOfPeople}
            registerTime={item.registerTime}
          />
        ))}
      </StyledUl>
      <TabMenu />
    </Container>
  );
};

const Container = styled.div`
  background-color: #ffffff;
  padding-top: 30px;
`;

const StyledUl = styled.ul`
  padding: 10px 16px 50px;
  background-color: #ffffff;
`;

export default Home;
