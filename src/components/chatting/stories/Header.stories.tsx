import { ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '../../../modules';
import Header from '../Header';

export default {
  title: 'chatting/컴포넌트',
  component: Header,
  decorators: [
    (Story) => (
      <Provider store={configureStore()}>
        <div style={{ height: '100vh', width: '100vw' }}>
          <Story />
        </div>
      </Provider>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Header>;

const HeaderStory = (args) => <Header {...args} />;
export const HeaderComp = HeaderStory.bind({});

HeaderComp.args = {};

HeaderComp.storyName = '채팅방 헤더';
