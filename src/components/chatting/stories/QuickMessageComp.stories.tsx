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
  ], // as 수정
  parameters: {
    layout: 'fullscreen',
  },
<<<<<<< HEAD
};
=======
} as ComponentMeta<typeof QuickMessageComp>;
>>>>>>> refactor/0329-code-review

export const QuickMessageList = () => <QuickMessageComp />;
QuickMessageList.storyName = '빠른 메시지 전송';
