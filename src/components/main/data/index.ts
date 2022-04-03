import homeblack from '../../../assets/icons/homeblack.svg';
import searchgray from '../../../assets/icons/searchgray.svg';
import plusgray from '../../../assets/icons/plusgray.svg';
import chatgray from '../../../assets/icons/chatgray.svg';
import moregray from '../../../assets/icons/moregray.svg';
import { TabItem } from '../types';

export const tabDatas: TabItem[] = [
  {
    id: 1,
    title: '홈',
    altText: '홈버튼',
    image: homeblack,
  },
  {
    id: 2,
    title: '검색',
    altText: '검색버튼',
    image: searchgray,
  },
  {
    id: 3,
    title: '내꺼도 생성',
    altText: '추가하기 버튼',
    image: plusgray,
  },
  {
    id: 4,
    title: '내꺼도',
    altText: '채팅방 버튼',
    image: chatgray,
  },
  {
    id: 5,
    title: '전체',
    altText: '더보기 버튼',
    image: moregray,
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
export const chatListMockData = [
  {
    id: 1,
    title: '버거킹 하남 미사점',
    chattingUrl: 'login',
    total: 3,
    numOfPeople: 2,
    registerTime: 45,
  },
  {
    id: 2,
    title: '버거킹 하남 미사점',
    chattingUrl: 'login',
    total: 3,
    numOfPeople: 2,
    registerTime: 45,
  },
  {
    id: 3,
    title: '버거킹 하남 미사점',
    chattingUrl: 'login',
    total: 3,
    numOfPeople: 2,
    registerTime: 45,
  },
  {
    id: 4,
    title: '버거킹 하남 미사점',
    chattingUrl: 'login',
    total: 3,
    numOfPeople: 2,
    registerTime: 45,
  },
  {
    id: 5,
    title: '버거킹 하남 미사점',
    chattingUrl: 'login',
    total: 3,
    numOfPeople: 2,
    registerTime: 45,
  },
  {
    id: 6,
    title: '버거킹 하남 미사점',
    chattingUrl: 'login',
    total: 3,
    numOfPeople: 2,
    registerTime: 45,
  },
  {
    id: 7,
    title: '버거킹 하남 미사점',
    chattingUrl: 'login',
    total: 3,
    numOfPeople: 2,
    registerTime: 45,
  },
];