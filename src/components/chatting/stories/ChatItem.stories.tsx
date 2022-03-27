import ChatItem from '../ChatItem';

export default {
  title: 'chatting/components/ChatItem',
  component: ChatItem,
  decorators: [
    () => (
      <div style={{ height: '100vh', width: '100vw' }}>
        <ChatItem />
      </div>
    ),
  ],
};

export const example = () => <ChatItem />;
