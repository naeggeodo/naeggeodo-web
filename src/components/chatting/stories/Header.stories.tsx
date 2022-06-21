import { ComponentMeta } from '@storybook/react';
import Header from '../Header';

type Args = {
  setIsDrawerOpen: null;
  isDrawerOpen: true;
  currentCount: number;
  maxCount: number;
  link: string;
  imgPath: string;
  title: string;
};

export default {
  title: 'chatting/컴포넌트',
  component: Header,
  decorators: [(Story) => <Story />],
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Header>;

const Template = (args: Args) => <Header {...args} />;
export const HeaderStory = Template.bind({});

HeaderStory.args = {
  imgPath: '/assets/images/heart.svg',
  link: 'string',
  title: '햄버거 먹을분',
  maxCount: 3,
  currentCount: 1,
  endDate: '2021-04-19T14:02:18.809Z',
};

HeaderStory.storyName = '채팅방 헤더';
