import { ComponentMeta } from '@storybook/react';
import ChatDrawer from '../ChatDrawer';

type Args = {
  drawerOpen: boolean;
  setDrawerOpen: null;
};

export default {
  title: 'chatting/컴포넌트',
  component: ChatDrawer,
  decorators: [
    (Story) => (
      <div style={{ height: '100vh', width: '100vw' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof ChatDrawer>;

const ChatDrawerStory = (args: Args) => <ChatDrawer {...args} />;
export const ChatDrawerComp = ChatDrawerStory.bind({});

ChatDrawerComp.args = {
  drawerOpen: true,
};

ChatDrawerComp.storyName = '채팅 서랍';
