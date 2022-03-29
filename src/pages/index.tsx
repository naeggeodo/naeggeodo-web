import styled from 'styled-components';
import CategoryMenuSlide from '../components/main/CategoryMenuSlide';
import ChatRoomItem from '../components/main/ChatRoomItem';
import { categoryMockData, chatListMockData } from '../components/main/data';
import TabMenu from '../components/main/TabMenu';

const Home: React.FC = () => {
  console.log(123);
  return (
    <Container>
      <CategoryMenuSlide categories={categoryMockData} />
      <StyledUl>
        {chatListMockData.map((item) => (
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
`;

const StyledUl = styled.ul`
  padding: 10px 16px 50px;
  background-color: #ffffff;
`;

export default Home;
