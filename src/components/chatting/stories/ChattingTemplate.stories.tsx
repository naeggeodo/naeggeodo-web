import { ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '../../../modules';
import { getServerSideProps } from '../../../pages/chatting/[id]';
import ChattingTemplate from '../ChattingTemplate';

// TODO
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

export const ChattingPageStory = () => <ChattingTemplate />;

ChattingPageStory.loaders = [
  async (context) => {
    console.log('context', context);
    const data = await getServerSideProps(context);
    return data;
  },
];

ChattingPageStory.storyName = '채팅 페이지';
