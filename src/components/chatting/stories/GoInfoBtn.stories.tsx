import { ComponentMeta } from '@storybook/react';
import GoInfoBtn from '../GoInfoBtn';

export default {
  title: 'chatting/컴포넌트',
  component: GoInfoBtn,
  decorators: [
    (Story) => (
      <div style={{ height: '8vh', width: '100vw' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof GoInfoBtn>;

export const GoInfo = () => <GoInfoBtn />;
GoInfo.storyName = '돈을받으셨나요 버튼';
