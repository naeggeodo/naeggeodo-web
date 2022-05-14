import { ComponentMeta } from '@storybook/react';
import { rest } from 'msw';
import { Provider } from 'react-redux';
import { configureStore } from '../../../modules';
import ChattingTemplate from '../ChattingTemplate';

export default {
  title: 'chatting/페이지',
  component: ChattingTemplate,
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
} as ComponentMeta<typeof ChattingTemplate>;

const ChattingPageStory = (args) => <ChattingTemplate {...args} />;

export const ChattingPage = ChattingPageStory.bind({});
ChattingPage.args = {
  previousChatting: {
    messages: [
      {
        user_id: 1,
        id: 1,
        idx: 1,
        chatMain_id: 1,
        regDate: '2022-05-13T15:52:52',
        sender: 2,
        contents: 'asdfas',
        type: 'TEXT',
      },
    ],
  },
};

ChattingPage.storyName = '채팅 페이지';
