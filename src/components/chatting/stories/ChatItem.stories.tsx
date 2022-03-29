import ChatItem from '../ChatItem';

export default {
  title: 'chatting/컴포넌트',
  component: ChatItem,
  decorators: [
    () => (
      <div style={{ height: '100vh', width: '100vw' }}>
        <ChatItem />
      </div>
    ),
  ],
};

export const ChatItemComp = () => <ChatItem />;
ChatItemComp.storyName = '채팅 내용';
