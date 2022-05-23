import { ComponentMeta } from '@storybook/react';
import LoginModalBox from '../LoginModalBox';

export default {
  title: 'login/컴포넌트',
  component: LoginModalBox,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof LoginModalBox>;

export const LoginModalStory = () => <LoginModalBox />;

LoginModalStory.storyName = '로그인 모달';
