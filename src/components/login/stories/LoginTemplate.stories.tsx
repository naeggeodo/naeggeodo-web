import { ComponentMeta } from '@storybook/react';
import LoginTemplate from '../LoginTemplate';

export default {
  title: 'login/페이지',
  component: LoginTemplate,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof LoginTemplate>;

export const LoginPage = () => <LoginTemplate />;
LoginPage.storyName = '로그인 페이지';
