import Chatting from '../../../pages/chatting';

export default {
  title: 'chatting/페이지',
  component: Chatting,
  parameters: {
    layout: 'fullscreen',
  },
};

export const ChattingPage = () => <Chatting />;
ChattingPage.storyName = '채팅 페이지';
