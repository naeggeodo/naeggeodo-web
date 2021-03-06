import { Provider } from 'react-redux';
import { configureStore } from '../../../modules';
import ChatRooms from '../../../pages/chat-rooms';

export default {
  title: 'main/페이지',
  component: ChatRooms,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <Provider store={configureStore()}>
        <Story />
      </Provider>
    ),
  ],
};

export const Main = () => {
  return <ChatRooms foodCategories={[]} />;
};

Main.storyName = '메인페이지';
