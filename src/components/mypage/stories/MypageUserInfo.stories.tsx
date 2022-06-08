import { ComponentMeta } from '@storybook/react';
import MypageUserInfo from '../MypageUserInfo';

export default {
  title: 'mypage/컴포넌트',
  component: MypageUserInfo,
  decorators: [
    (Story) => (
      <div
        style={{
          paddingTop: '30px',
          height: '100vh',
          backgroundColor: '#fff',
        }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof MypageUserInfo>;

export const MypageUserInfoStory = () => <MypageUserInfo />;

MypageUserInfoStory.storyName = '마이페이지 유저정보';
