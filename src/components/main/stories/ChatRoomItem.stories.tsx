import { ChatRoomItemProps } from '../../../modules/main/types';
import ChatRoomItem from '../ChatRoomItem';

export default {
  title: 'main/컴포넌트',
  component: '채팅룸',
};

const Template = (args: ChatRoomItemProps) => <ChatRoomItem {...args} />;

export const Example1 = Template.bind({});
Example1.args = {
  id: 'jayden',
  title: '버거킹 백석 이마트점',
  maxCount: 2,
  imgPath: '/assets/images/heart.svg',
  address: '양화대교',
  currentCount: 1,
  orderTimeType: 'ASAP',
  Link: '',
  createDate: '2022-05-04T17:11',
};

Example1.storyName = '버거킹 백석 이마트점 샘플';
