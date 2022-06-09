export type NaeggeotalkItem = {
  buildingCode: string;
  link: string;
  title: string;
  maxCount: number;
  tags: string;
  bookmarks: string;
  user_id: number;
  currentCount: 0;
  bookmarksDate: string;
  id: number;
  state: string;
  place: string;
  category: string;
  idx: number;
  createDate: string;
};
export type NaeggeotalkListResponse = {
  chatRooms: string[];
};

export type NaeggeotalkItemBookmarkRequest = {
  chatMainId: string;
  userId: string;
};
