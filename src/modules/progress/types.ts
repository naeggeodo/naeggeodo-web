import { BookMarks, OrderTimeType } from '../create/types';
import { Category } from '../main/types';

export interface ProgressStates {
  progressChatRoomList: ProgressChatRoomList;
}

export interface ProgressChatRoomItem {
  address: string;
  endDate: null;
  buildingCode: string;
  link: string;
  orderTimeType: OrderTimeType;
  title: string;
  maxCount: number;
  tags: string[];
  bookmarks: BookMarks;
  user_id: string;
  imgPath: string;
  currentCount: number;
  bookmarksDate: string;
  id: number;
  state: 'CREATE' | 'PROGRESS' | 'END' | 'FULL';
  place: string;
  category: Category;
  idx: number;
  createDate: string;
  latestMessage: string;
}

export interface ProgressChatRoomList {
  chatRoom: ProgressChatRoomItem[];
}

export type ProgressingChatRoomTitleRequest = {
  chatMain_id: string;
  title: string;
};
