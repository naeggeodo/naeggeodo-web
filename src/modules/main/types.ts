import { Category, OrderTimeType } from '../common/types';

export interface ChatRoomRequestPayload {
  buildingCode: string | string[];
  category: Category | string[] | string;
}

// ** 채팅 방 리스트 개별 아이템에 사용되는 타입 & 스토리북에서도 사용 **
export type ChatRoomItemProps = {
  address: string;
  title: string;
  maxCount: number;
  currentCount: number;
  createDate: string;
  link: string;
  id: number;
  imgPath: string;
  orderTimeType: OrderTimeType;
};
