import { Provider } from 'react-redux';
import { configureStore } from '../../../modules';
import RendingPage from '../../../pages';

export default {
  title: 'main/페이지',
  component: RendingPage,
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

export const RendingPageStory = () => <RendingPage />;

RendingPageStory.storyName = '렌딩페이지';
