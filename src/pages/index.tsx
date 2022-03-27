import styled from 'styled-components';
import ChatRoomItem from '../components/main/ChatRoomItem';
import TabMenu from '../components/main/TabMenu';

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <ChatRoomItem />
        <TabMenu />
      </Container>
    </>
  );
};

const Container = styled.div`
  height: 100vh;
`;

export default Home;
