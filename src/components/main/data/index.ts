import { TabItem } from '../types';

export const mockFoodCategories = [
  {
    idx: 0,
    category: 'ALL',
  },
  {
    idx: 1,
    category: 'CHICKEN',
  },
  {
    idx: 2,
    category: 'JAPANESE',
  },
  {
    idx: 3,
    category: 'CHINESE',
  },
  {
    idx: 4,
    category: 'KOREAN',
  },
  {
    idx: 5,
    category: 'SNACKS',
  },
  {
    idx: 6,
    category: 'STEW',
  },
  {
    idx: 7,
    category: 'PIZZA',
  },
  {
    idx: 8,
    category: 'WESTERN',
  },
  {
    idx: 9,
    category: 'GRILLED_MEAT',
  },
  {
    idx: 10,
    category: 'PORK_FEET',
  },
  {
    idx: 11,
    category: 'DESSERT',
  },
  {
    idx: 12,
    category: 'FASTFOOD',
  },
];

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
    title: '내꺼톡',
    altText: '채팅방 버튼',
    image: '/assets/images/chatgray.svg',
    link: '/progress',
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
    title: '검색',
    altText: '검색버튼',
    image: '/assets/images/searchgray.svg',
    link: '/search',
  },
  {
    id: 5,
    title: '더보기',
    altText: '더보기 버튼',
    image: '/assets/images/moregray.svg',
    link: '/mypage',
  },
];
