import { ComponentMeta } from '@storybook/react';
import { ChattingRoomInfoResponse } from '../../../modules/chatting/types';
import Header from '../Header';

// TODO
type Args = {
  setIsDrawerOpen: null;
  isDrawerOpen: true;
  chatRoomInfo: ChattingRoomInfoResponse;
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
  chatRoomInfo: {
    imgPath: '/assets/images/hamburger.svg',
    link: 'string',
    title: '햄버거 먹을분',
    maxCount: 3,
    currentCount: 1,
    chatUser: ['호랑이'],
    endDate: '2021-04-19T14:02:18.809Z',
    id: 1,
    state: 'string',
    place: '아파트 1층',
    address: '서울',
    category: '치킨',
    dealHistory: 'null',
    user: '유저',
    createDate: '2021-04-19T14:02:18.809Z',
  },
};

HeaderStory.storyName = '채팅방 헤더';
