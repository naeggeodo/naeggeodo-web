import styled from 'styled-components';
import CategoryMenuSlide from '../components/main/CategoryMenuSlide';
import ChatRoomItem from '../components/main/ChatRoomItem';
import { categoryMockData } from '../components/main/stories/CategoryMenuSlide.stories';
import TabMenu from '../components/main/TabMenu';

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <CategoryMenuSlide categories={categoryMockData} />
        <TabMenu />
      </Container>
    </>
  );
};

const Container = styled.div`
  height: 100vh;
`;

export default Home;
