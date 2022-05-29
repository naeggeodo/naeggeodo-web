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

export interface ChatRoomRequestPayload {
  buildingCode: string | string[];
  category: Category | string[] | string;
}

export interface CategoriesResponse {
  idx: number;
  category: Category;
}

export interface ChatRoomItemResponse {
  address: string | null;
  endDate: string | null;
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
  createDate: string;
}

// ** 채팅 방 리스트 개별 아이템에 사용되는 타입 & 스토리북에서도 사용 **
export type ChatRoomItemProps = {
  title: string;
  maxCount: number;
  currentCount: number;
  createDate: string;
  link: string;
  id: number;
};
