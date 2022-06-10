export type NaeggeotalkItem = {
  buildingCode: string;
  address: string;
  link?: string;
  title: string;
  maxCount: number;
  tags: string[];
  bookmarks: string;
  user_id: string;
  currentCount: 0;
  bookmarksDate: string;
  id: number;
  state: string;
  place: string;
  endData: string | null;
  category: string;
  idx: number;
  createDate: string;
  orderTimeType: string;
};
export type NaeggeotalkListResponse = {
  chatRooms: string[];
};

export type NaeggeotalkItemBookmarkRequest = {
  chatMainId: string;
  userId: string;
};
