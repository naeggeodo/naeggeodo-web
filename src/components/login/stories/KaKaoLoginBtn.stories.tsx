import { ComponentMeta } from '@storybook/react';
import KaKaoLoginBtn from '../KaKaoLoginBtn';

export default {
  title: 'login/컴포넌트',
  component: KaKaoLoginBtn,
  decorators: [
    (Story) => (
      <div style={{ height: '180px' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof KaKaoLoginBtn>;

export const KaKaoLogin = () => <KaKaoLoginBtn />;
KaKaoLogin.storyName = '카카오 로그인 버튼';
