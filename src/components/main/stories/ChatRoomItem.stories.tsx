import ChatRoomItem from '../ChatRoomItem';
import { ChatRoomItemProps } from '../types';

export default {
  title: 'main/컴포넌트',
  component: '채팅룸',
};

const Template = (args: ChatRoomItemProps) => <ChatRoomItem {...args} />;

export const Example1 = Template.bind({});
Example1.args = {
  title: '버거킹 백석 이마트점',
  total: 2,
  numOfPeople: 1,
  chattingUrl: 'login',
  registerTime: 34,
};
Example1.storyName = '버거킹 백석 이마트점 샘플';

export const Example2 = Template.bind({});
Example2.args = {
  title: '샐러드킹 백마점',
  total: 3,
  numOfPeople: 1,
  chattingUrl: 'login',
  registerTime: 50,
};

Example2.storyName = '샐러드킹 백마점 샘플';
