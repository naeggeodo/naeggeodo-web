import { ComponentMeta } from '@storybook/react';
import ChattingTemplate from '../ChattingTemplate';

export default {
  title: 'chatting/페이지',
  component: ChattingTemplate,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof ChattingTemplate>;

// export const ChattingPage = () => <ChattingTemplate />;
// ChattingPage.storyName = '채팅 페이지';
