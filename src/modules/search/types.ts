type Tag = {
  msg: string;
  idx: number;
};

export type SearchTagListResponse = {
  tags: Tag[];
};

type SearchResult = {
  buildingCode: string;
  link: string;
  title: string;
  maxCount: number;
  tags: string[];
  imgPath: string;
  currentCount: number;
  id: number;
  state: string;
  place: string;
  category: string;
  idx: number;
  createDate: string;
};

export type SearchResultListResponse = {
  chatRoom: SearchResult[];
};
