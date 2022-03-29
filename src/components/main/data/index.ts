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
