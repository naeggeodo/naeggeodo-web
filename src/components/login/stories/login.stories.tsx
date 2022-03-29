import { ComponentMeta } from '@storybook/react';
import Login from '../../../pages/login';

export default {
  title: 'login/페이지',
  component: Login,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Login>;

export const LoginPage = () => <Login />;
LoginPage.storyName = '로그인 페이지';
