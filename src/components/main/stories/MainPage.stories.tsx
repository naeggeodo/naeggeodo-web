import ChatRoomItem from '../ChatRoomItem';
import { Tab } from './TabMenu.stories';

const MockData = [
  {
    title: '버거킹 하남 미사점',
    chattingUrl: 'login',
    total: 3,
    numOfPeople: 2,
    registerTime: 45,
  },
  {
    title: '버거킹 하남 미사점',
    chattingUrl: 'login',
    total: 3,
    numOfPeople: 2,
    registerTime: 45,
  },
  {
    title: '버거킹 하남 미사점',
    chattingUrl: 'login',
    total: 3,
    numOfPeople: 2,
    registerTime: 45,
  },
  {
    title: '버거킹 하남 미사점',
    chattingUrl: 'login',
    total: 3,
    numOfPeople: 2,
    registerTime: 45,
  },
  {
    title: '버거킹 하남 미사점',
    chattingUrl: 'login',
    total: 3,
    numOfPeople: 2,
    registerTime: 45,
  },
  {
    title: '버거킹 하남 미사점',
    chattingUrl: 'login',
    total: 3,
    numOfPeople: 2,
    registerTime: 45,
  },
  {
    title: '버거킹 하남 미사점',
    chattingUrl: 'login',
    total: 3,
    numOfPeople: 2,
    registerTime: 45,
  },
];

export default {
  title: 'main/page',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Main = () => (
  <div>
    {MockData.map((item) => (
      <ChatRoomItem
        title={item.title}
        chattingUrl={item.chattingUrl}
        total={item.total}
        numOfPeople={item.numOfPeople}
        registerTime={item.registerTime}
      />
    ))}
    <Tab />
  </div>
);

Main.storyName = '메인페이지';
