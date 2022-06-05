import { ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '../../../modules';
import NaeggeotalkTemplate from '../NaeggeotalkTemplate';

export default {
  title: 'naeggeotalk/페이지',
  component: NaeggeotalkTemplate,
  decorators: [
    (Story) => (
      <Provider store={configureStore()}>
        <Story />
      </Provider>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof NaeggeotalkTemplate>;

// export const NaeggeotalkStory = () => <NaeggeotalkTemplate />;
// NaeggeotalkStory.storyName = '내꺼톡 주문내역 탭 페이지';
