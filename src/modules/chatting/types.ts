export type ChattingRoomInfoRequestPayload = {
  chattingRoomId: number;
};

export type ChattingRoomInfoResponsePayload = {
  imgpath: string;
  link: string | null;
  title: string;
  maxCount: number;
  chatUser: string[];
  enddate: null;
  id: number;
  state: string;
  place: string;
  addr: string;
  category: string;
  dealHistory: null;
  user: null;
  createDate: Date;
};

export type PreviousChattingItemRequest = {
  chattingRoomId: number;
  userId: number;
};

export type PreviousChattingItemResponse = {
  user_id?: number;
  id?: number;
  idx?: number;
  chatMain_id: number;
  regDate?: string;
  sender?: number;
  contents: string;
  type: string;
};

export type PreviousChattingListResponse = {
  messages: PreviousChattingItemResponse[];
};
