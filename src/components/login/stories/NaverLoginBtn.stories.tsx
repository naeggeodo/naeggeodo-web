import { ComponentMeta } from '@storybook/react';
import NaverLoginBtn from '../NaverLoginBtn';

export default {
  title: 'login/컴포넌트',
  component: NaverLoginBtn,
  decorators: [
    (Story) => (
      <div style={{ height: '180px' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof NaverLoginBtn>;

export const NaverLogin = () => <NaverLoginBtn />;

NaverLogin.storyName = '네이버 로그인 버튼';
