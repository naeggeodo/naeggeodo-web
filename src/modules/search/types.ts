import { ChatRoomItemResponse } from '../main/types';

type Tag = {
  msg: string;
  idx: number;
};

export type SearchTagListResponse = {
  tags: Tag[];
};

export type SearchResultListResponse = {
  chatRoom: ChatRoomItemResponse[];
};
