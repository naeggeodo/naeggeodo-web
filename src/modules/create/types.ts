import { Category } from '../main/types';
import {
  addTag,
  insertLink,
  insertPlace,
  insertTitle,
  removeTag,
  saveBuildingCode,
  saveUserId,
  selectCategory,
  selectOrderTimeType,
} from './actions';

// * Actions type
export type SelectOrderTimeTypeAction = ReturnType<typeof selectOrderTimeType>;
export type InsertTitleAction = ReturnType<typeof insertTitle>;
export type InsertLinkAction = ReturnType<typeof insertLink>;
export type SelectCategoryAction = ReturnType<typeof selectCategory>;
export type AddTagAction = ReturnType<typeof addTag>;
export type RemoveTagAction = ReturnType<typeof removeTag>;
export type InsertPlaceAction = ReturnType<typeof insertPlace>;
export type SaveUserIdAction = ReturnType<typeof saveUserId>;
export type SaveBuildingCodeAction = ReturnType<typeof saveBuildingCode>;

export type OrderTimeType = 'ONE_HOUR' | 'QUICK' | 'FREEDOM';

export interface CreateData {
  buildingCode: string;
  category: Category | null; // 카테고리
  link: string; // 카카오페이 링크
  place: string; // 수령지
  title: string; //방제
  user_id: string; // 방장 id
  tag: string[];
  orderTimeType: OrderTimeType | '';
  maxCount: number;
}

export interface CreateStates {
  createData: CreateData;
  createChatRoomResponse: CreateChatRoomResponse;
}

export interface ButtonValue {
  text: OrderTimeTypeKr | '상관없음 (인원이 모집되는대로)';
  value: OrderTimeType;
}

export type CreateChatRoomResponse = {
  chatMain_id: number;
};

export type OrderTimeTypeKr = '1시간 이내' | '최대한 빨리';
