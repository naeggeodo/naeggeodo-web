import { ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '../../../modules';
import { ChattingListItem } from '../../../modules/chatting/types';
import ChatItem from '../ChatItem';

type Args = {
  message: ChattingListItem;
  date: string;
};

export default {
  title: 'chatting/컴포넌트',
  component: ChatItem,
  decorators: [
    (Story) => (
      <Provider store={configureStore()}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100vw',
          }}>
          <Story />
        </div>
      </Provider>
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
