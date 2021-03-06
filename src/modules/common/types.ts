export type ChatState = 'CREATE' | 'PROGRESS' | 'END' | 'FULL' | 'INCOMPLETE';

export type OrderTimeType = 'ONE_HOUR' | 'QUICK' | 'FREEDOM';
export type OrderTimeTypeKr = '1시간 이내' | '최대한 빨리';

export type BanState = 'ALLOWED' | 'BANNED';

export type Bookmarks = 'Y' | 'N';

export type RemittanceState = 'Y' | 'N';

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

export type ChatDetailType =
  | 'TEXT'
  | 'IMAGE'
  | 'WELCOME'
  | 'EXIT'
  | 'CNT'
  | 'BAN'
  | 'ALERT'
  | 'SYSTEM';

export type ReportType = 'CHATMAIN' | 'CHATDETAIL' | 'FEEDBACK';

export interface ChatRoomItemResponse {
  address: string | null;
  endDate: string | null;
  buildingCode: string;
  link: string | null;
  orderTimeType: OrderTimeType;
  title: string;
  maxCount: number;
  tags: string[];
  bookmarks: Bookmarks;
  user_id: string;
  imgPath: string;
  currentCount: number;
  bookmarksDate: string;
  id: number;
  state: ChatState;
  place: string;
  category: Category;
  idx: number;
  createDate: string;
}
