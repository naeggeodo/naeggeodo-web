import {
  ChatDetailType,
  Bookmarks,
  RemittanceState,
  ChatState,
  Category,
} from "../common/types";

export type ChattingRoomInfoRequest = {
  chattingRoomId: string;
};

export type ChattingRoomInfoResponse = {
  address: string;
  endDate: null;
  buildingCode: string;
  link: string;
  orderTimeType: string;
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
  createDate: string;
};

export type ChattingSubmitBody = {
  sender: string;
  contents: string;
  chatMain_id: string;
  type: string;
  nickname: string;
};

export type CurrentChattingList = {
  messages: ChattingSubmitBody[];
};

export type ChattingListRequest = {
  chattingRoomId: string;
  userId: string;
};

export type ChattingListItem = {
  chatMain_id: number;
  contents: string;
  id?: number;
  idx?: number;
  regDate: string;
  type: ChatDetailType;
  user_id?: string;
  nickname?: string;
};

export type ChattingListResponse = {
  messages: ChattingListItem[];
};

export type UserId = {
  userId: string;
};

export type CurrentChatUser = {
  user_id: string;
  idx: number;
  remittanceState: RemittanceState;
  nickname: string;
};

export type CurrentChatUserListResponse = { users: CurrentChatUser[] };
