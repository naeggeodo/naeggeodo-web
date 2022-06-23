import { ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '../../../modules';
import QuickChatList from '../quickChat/QuickChatList';

type Args = {
  stompClient: null;
};

// const store = {
//   getState: () => {
//     return {
//       chattingRoomState: {
//         quickChatList: [{ msg: '교촌먹고싶어요', idx: '1층으로 와주세요' }],
//       },
//     };
//   },
//   subscribe: () => 0,
//   dispatch: action('dispatch'),
// };

export default {
  title: 'chatting/컴포넌트',
  component: QuickChatList,
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
} as ComponentMeta<typeof QuickChatList>;

const Template = (args: Args) => (
  <QuickChatList isQuickChatOpen={true} {...args} />
);
export const QuickMessageStory = Template.bind({});

QuickMessageStory.storyName = '빠른 메시지 전송';
