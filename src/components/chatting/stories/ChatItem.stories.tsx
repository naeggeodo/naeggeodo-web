import { ComponentMeta } from '@storybook/react';
import ChatItem from '../ChatItem';

export default {
  title: 'chatting/컴포넌트',
  component: ChatItem,
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
} as ComponentMeta<typeof ChatItem>;

// export const ChatItemComp = () => <ChatItem />;
// ChatItemComp.storyName = '채팅 내용';
