import { ComponentMeta } from '@storybook/react';
import Chatting from '../../../pages/chatting';

export default {
  title: 'chatting/페이지',
  component: Chatting,
  parameters: {
    layout: 'fullscreen',
  },
<<<<<<< HEAD
};
=======
} as ComponentMeta<typeof Chatting>;
>>>>>>> refactor/0329-code-review

export const ChattingPage = () => <Chatting />;
ChattingPage.storyName = '채팅 페이지';
