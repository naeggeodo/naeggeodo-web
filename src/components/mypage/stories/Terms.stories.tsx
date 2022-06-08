import { ComponentMeta } from '@storybook/react';
import MypageTemplate from '../MypageTemplate';
import Terms from '../Terms';

export default {
  title: 'mypage/컴포넌트',
  component: Terms,
  decorators: [
    (Story) => (
      <div style={{ padding: '30px 0', backgroundColor: '#fff' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof MypageTemplate>;

export const TermsStory = () => <Terms />;

TermsStory.storyName = '이용약관';
