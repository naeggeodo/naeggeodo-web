import { ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '../../../modules';
import ChattingList from '../ChattingList';

export default {
  title: 'chatting/컴포넌트',
  component: ChattingList,
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
} as ComponentMeta<typeof ChattingList>;

const ChattingListStory = (args) => <ChattingList {...args} />;
export const ChattingListComp = ChattingListStory.bind({});

ChattingListComp.args = {
  messageList: [
    {
      chatMain_id: 1,
      user_id: 1,
      contents: '안녕하세요',
      type: 'TEXT',
      regDate: '2022-05-13T15:52:52',
    },
    {
      chatMain_id: 1,
      user_id: 1,
      contents: '안녕하세요',
      type: 'TEXT',
      regDate: '2022-05-13T15:52:52',
    },
  ],
};

ChattingListComp.storyName = '채팅 리스트';
