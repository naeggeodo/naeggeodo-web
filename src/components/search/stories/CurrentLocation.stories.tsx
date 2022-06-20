import { ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '../../../modules';
import CurrentLocation from '../CurrentLocation';

export default {
  title: 'search/페이지',
  component: CurrentLocation,
  decorators: [
    (Story) => (
      <Provider store={configureStore()}>
        <div
          style={{
            paddingTop: '30px',
            backgroundColor: '#fff',
            height: '100vh',
          }}>
          <Story />
        </div>
      </Provider>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof CurrentLocation>;

export const CurrentLocationStory = () => <CurrentLocation />;

CurrentLocationStory.storyName = '현재 장소';
