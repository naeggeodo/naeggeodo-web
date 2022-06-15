import { ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '../../../modules';
import MypageTemplate from '../MypageTemplate';

export default {
  title: 'mypage/페이지',
  component: MypageTemplate,
  decorators: [
    (Story) => (
      <Provider store={configureStore()}>
        <Story />
      </Provider>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof MypageTemplate>;

export const MypageStory = () => <MypageTemplate />;

MypageStory.storyName = '마이페이지';
