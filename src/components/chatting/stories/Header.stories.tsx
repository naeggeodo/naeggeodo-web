import Header from '../Header';

export default {
  title: 'chatting/components/Header',
  component: Header,
  decorators: [
    () => (
      <div style={{ height: '100vh', width: '100vw' }}>
        <Header />
      </div>
    ),
  ],
};

export const example = () => <Header />;
