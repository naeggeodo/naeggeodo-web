export type Naeggeotalk = {
  buildingCode: string;
  link: string;
  title: string;
  maxCount: number;
  tags: string;
  bookmarks: string;
  user_id: number;
  currentCount: 0;
  bookmarksDate: Date;
  id: number;
  state: string;
  place: string;
  category: string;
  idx: number;
  createDate: Date;
};
export type NaeggeotalkListResponse = {
  chatRoom: Naeggeotalk[];
};
