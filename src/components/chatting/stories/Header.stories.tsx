import Header from '../Header';

export default {
  title: 'chatting/컴포넌트',
  component: Header,
  decorators: [
    () => (
      <div style={{ height: '100vh', width: '100vw' }}>
        <Header />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
};

export const HeaderComp = () => <Header />;
HeaderComp.storyName = '채팅방 헤더';
