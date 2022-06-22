export type QuickChatting = {
  msg: string;
  idx: number;
};

export type QuickChattingListResponse = {
  quickChat: QuickChatting[];
  user_id: string;
};

type quickChat = string;

export type QuickChattingListRequest = {
  quickChat: quickChat[];
  user_id: string;
};
