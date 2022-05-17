import { ComponentMeta } from '@storybook/react';
import { PreviousChattingItemResponse } from '../../../modules/chatting/types';
import MyChatItem from '../MyChatItem';

type Args = {
  message: PreviousChattingItemResponse;
  date: string;
};

export default {
  title: 'chatting/컴포넌트',
  component: MyChatItem,
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
} as ComponentMeta<typeof MyChatItem>;

const MyChatItemStory = (args: Args) => <MyChatItem {...args} />;
export const MyChatItemComp = MyChatItemStory.bind({});

MyChatItemComp.args = {
  message: {
    chatMain_id: 1,
    contents: '안녕하세요',
    type: 'TEXT',
  },
  date: '2022-05-13T15:52:52',
};

MyChatItemComp.storyName = '내 채팅 내용';
