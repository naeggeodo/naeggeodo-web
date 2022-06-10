import { TabItem } from '../types';

export const tabDatas: TabItem[] = [
  {
    id: 1,
    title: '홈',
    altText: '홈버튼',
    image: '/assets/images/homegray.svg',
    link: '/chat-rooms',
  },
  {
    id: 2,
    title: '검색',
    altText: '검색버튼',
    image: '/assets/images/searchgray.svg',
    link: '/search',
  },
  {
    id: 3,
    title: '내꺼톡 생성',
    altText: '추가하기 버튼',
    image: '/assets/images/plusgray.svg',
    link: '/create',
  },
  {
    id: 4,
    title: '내꺼톡',
    altText: '채팅방 버튼',
    image: '/assets/images/chatgray.svg',
    link: '/naeggeotalk',
  },
  {
    id: 5,
    title: '더보기',
    altText: '더보기 버튼',
    image: '/assets/images/moregray.svg',
    link: '/mypage',
  },
];
