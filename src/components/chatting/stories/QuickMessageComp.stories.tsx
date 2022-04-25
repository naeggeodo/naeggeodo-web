import { ComponentMeta } from '@storybook/react';
import QuickMessageComp from '../QuickMessageComp';

export default {
  title: 'chatting/컴포넌트',
  component: QuickMessageComp,
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
} as ComponentMeta<typeof QuickMessageComp>;

export const QuickMessageList = () => <QuickMessageComp />;
QuickMessageList.storyName = '빠른 메시지 전송';
