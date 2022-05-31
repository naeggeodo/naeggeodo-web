import { ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '../../../modules';
import LoginModalBox from '../LoginModalBox';

export default {
  title: 'login/컴포넌트',
  component: LoginModalBox,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <Provider store={configureStore()}>
        <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
          <Story />
        </div>
      </Provider>
    ),
  ],
} as ComponentMeta<typeof LoginModalBox>;

export const LoginModalStory = () => <LoginModalBox />;

LoginModalStory.storyName = '로그인 모달';
