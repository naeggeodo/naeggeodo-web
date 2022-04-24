import { ComponentMeta } from '@storybook/react';
import Header from '../Header';

export default {
  title: 'chatting/컴포넌트',
  component: Header,
  decorators: [
    (Story) => (
      <div style={{ height: '100vh', width: '100vw' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Header>;

// export const HeaderComp = () => <Header />;
// HeaderComp.storyName = '채팅방 헤더';
