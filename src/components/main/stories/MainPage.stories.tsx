import { Provider } from 'react-redux';
import { configureStore } from '../../../modules';
import Home from '../../../pages';
import { chatListMockData, mockFoodCategories } from '../data';

export default {
  title: 'main/페이지',
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <Provider store={configureStore()}>
        <div style={{ height: '100vh', backgroundColor: '#fff' }}>
          <Story />
        </div>
      </Provider>
    ),
  ],
};

// export const Main = () => <Home />;

// Main.storyName = '메인페이지';
