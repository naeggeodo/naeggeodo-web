import { ComponentMeta } from '@storybook/react';
import { Provider, useSelector } from 'react-redux';
import { configureStore, RootState } from '../../../modules';
import Header from '../Header';

type Args = {
  setDrawerOpen: null;
};

export default {
  title: 'chatting/컴포넌트',
  component: Header,
  decorators: [
    (Story) => (
      <Provider store={configureStore()}>
        <div style={{ margin: '20px' }}>
          <Story />
        </div>
      </Provider>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Header>;

export const HeaderStory = (args: Args) => <Header {...args} />;

HeaderStory.storyName = '채팅방 헤더';
