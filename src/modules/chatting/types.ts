export type ChattingRoomInfoRequest = {
  chattingRoomId: string;
};

export type ChattingRoomInfoResponse = {
  imgPath: string;
  link: string | null;
  title: string;
  maxCount: number;
  currentCount: number;
  chatUser: string[];
  endDate: null;
  id: number;
  state: string;
  place: string;
  address: string;
  category: string;
  dealHistory: null;
  user: null;
  createDate: Date;
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

export type MessageTypes =
  | 'TEXT'
  | 'IMAGE'
  | 'WELCOME'
  | 'EXIT'
  | 'CNT'
  | 'BAN'
  | 'ALERT'
  | 'SYSTEM';

export type ChattingListItem = {
  chatMain_id: number;
  contents: string;
  id?: number;
  idx?: number;
  regDate: string;
  type: MessageTypes;
  user_id?: string;
  nickname?: string;
};

export type ChattingListResponse = {
  messages: ChattingListItem[];
};

export type UserId = {
  userId: string;
};

type QuickChatting = {
  msg: string;
  idx: number;
};

export type QuickChattingListResponse = {
  quickChat: QuickChatting[];
  user_id: string;
};

export type CurrentChatUser = {
  user_id: string;
  idx: number;
  remittanceState: 'N' | 'Y';
  nickname: string;
};

export type CurrentChatUserListResponse = { users: CurrentChatUser[] };
