import { ComponentMeta } from '@storybook/react';
import { PreviousChattingItemResponse } from '../../../modules/chatting/types';
import ChatItem from '../ChatItem';

type Args = {
  message: PreviousChattingItemResponse;
  date: string;
};

export default {
  title: 'chatting/컴포넌트',
  component: ChatItem,
  decorators: [
    (Story) => (
      <div style={{ margin: '20px' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof ChatItem>;

const ChatItemStory = (args: Args) => <ChatItem {...args} />;
export const ChatItemComp = ChatItemStory.bind({});

ChatItemComp.args = {
  message: {
    chatMain_id: 1,
    contents: '안녕하세요',
    type: 'TEXT',
  },
  date: '2022-05-13T15:52:52',
};

ChatItemComp.storyName = '채팅 내용';
