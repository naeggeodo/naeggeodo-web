import { ComponentMeta } from '@storybook/react';
import AppleLoginBtn from '../AppleLoginBtn';
export default {
  title: 'login/컴포넌트',
  component: AppleLoginBtn,
  decorators: [
    (Story) => (
      <div style={{ height: '180px' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof AppleLoginBtn>;

export const AppleLogin = () => <AppleLoginBtn />;

AppleLogin.storyName = '애플 로그인 버튼';
