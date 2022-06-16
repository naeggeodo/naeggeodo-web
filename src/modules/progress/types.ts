import { Bookmarks, Category, ChatState, OrderTimeType } from '../common/types';

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
  bookmarks: Bookmarks;
  user_id: string;
  imgPath: string;
  currentCount: number;
  bookmarksDate: string;
  id: number;
  state: ChatState;
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
