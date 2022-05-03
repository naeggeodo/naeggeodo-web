export type Category =
  | 'ALL'
  | 'CHICKEN'
  | 'JAPANESE'
  | 'CHINESE'
  | 'KOREAN'
  | 'SNACKS'
  | 'STEW'
  | 'PIZZA'
  | 'WESTERN'
  | 'GRILLED_MEAT'
  | 'PORK_FEET'
  | 'DESSERT'
  | 'FASTFOOD'
  | 'HAMBURGER';

export interface CategoriesResponse {
  idx: number;
  category: Category;
}

export interface ChatRoomItemResponse {
  address: string | null;
  endDate: Date | null;
  buildingCode: string;
  link: string | null;
  title: string;
  maxCount: number;
  user_id: string;
  imgPath: string;
  currentCount: number;
  id: number;
  state: 'CREATE' | 'PROGRESS' | 'END' | 'FULL';
  place: string;
  category: Category;
  idx: number;
  createDate: Date;
}
