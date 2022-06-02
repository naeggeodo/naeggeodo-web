import { ComponentMeta } from '@storybook/react';
import MypageTemplate from '../MypageTemplate';

export default {
  title: 'more/페이지',
  component: MypageTemplate,
  decorators: [(Story) => <Story />],
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof MypageTemplate>;

export const MypageStory = () => <MypageTemplate />;

MypageStory.storyName = '전체 탭 페이지';
