import { ComponentMeta } from '@storybook/react';
import MyChatItem from '../MyChatItem';

export default {
  title: 'chatting/컴포넌트',
  component: MyChatItem,
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
} as ComponentMeta<typeof MyChatItem>;

export const MyChatItemComp = () => <MyChatItem />;
MyChatItemComp.storyName = '내 채팅 내용';
