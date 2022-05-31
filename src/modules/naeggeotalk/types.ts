export type Naeggeotalk = {
  buildingCode: string;
  category: string;
  createDate: string;
  id: number;
  idx: number;
  imgPath: string;
  maxCount: number;
  place: string;
  state: string;
  tags: string;
  title: string;
  user_id: string;
};
export type NaeggeotalkListResponse = {
  chatRoom: Naeggeotalk[];
};
