import { Category, ChatRoomItemResponse } from '../../../modules/main/types';
import { TabItem } from '../types';

export const tabDatas: TabItem[] = [
  {
    id: 1,
    title: '홈',
    altText: '홈버튼',
    image: '/assets/images/homegray.svg',
    link: '/chatRooms',
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
    title: '전체',
    altText: '더보기 버튼',
    image: '/assets/images/moregray.svg',
    link: '/mypage',
  },
];

// ** 메인페이지 카테고리 목데이터 **
export const categoryMockData: string[] = [
  '전체',
  '치킨',
  '버거',
  '한식',
  '일식/돈까스',
  '카페/디저트',
  '족발/보쌈',
  '고기/구이',
];

// ** 메인페이지 카테고리 채팅방리스트 **

export const chatListMockData: ChatRoomItemResponse[] = [
  {
    address: null,
    endDate: null,
    buildingCode: '123123',
    link: null,
    title: '교촌치킨 드실분',
    maxCount: 3,
    user_id: '1',
    imgPath: '',
    currentCount: 2,
    id: 1,
    state: 'CREATE',
    place: '서울',
    category: 'CHICKEN',
    idx: 12,
    createDate: '2022-05-04T17:11',
  },
  {
    address: null,
    endDate: null,
    buildingCode: '123123',
    link: null,
    title: '교촌치킨 드실분',
    maxCount: 3,
    user_id: '1',
    imgPath: '',
    currentCount: 2,
    id: 1,
    state: 'CREATE',
    place: '서울',
    category: 'CHICKEN',
    idx: 12,
    createDate: '2022-02-04T17:11',
  },
  {
    address: null,
    endDate: null,
    buildingCode: '123123',
    link: null,
    title: '도미노피자 드실분',
    maxCount: 3,
    user_id: '1',
    imgPath: '',
    currentCount: 2,
    id: 1,
    state: 'CREATE',
    place: '서울',
    category: 'CHICKEN',
    idx: 12,
    createDate: '2022-05-04T17:11',
  },
  {
    address: null,
    endDate: null,
    buildingCode: '123123',
    link: null,
    title: '탐탐 드실분',
    maxCount: 3,
    user_id: '1',
    imgPath: '',
    currentCount: 2,
    id: 1,
    state: 'CREATE',
    place: '서울',
    category: 'CHICKEN',
    idx: 12,
    createDate: '2022-05-04T17:11',
  },
];

export const mockFoodCategories: { idx: number; category: Category }[] = [
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
