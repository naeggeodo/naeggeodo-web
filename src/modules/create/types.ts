import { Category } from '../main/types';
import {
  addTag,
  insertLink,
  insertTitle,
  selectCategory,
  selectOrderTimeType,
} from './actions';

// * Actions type
export type SelectOrderTimeTypeAction = ReturnType<typeof selectOrderTimeType>;
export type InsertTitleAction = ReturnType<typeof insertTitle>;
export type InsertLinkAction = ReturnType<typeof insertLink>;
export type SelectCategoryAction = ReturnType<typeof selectCategory>;
export type AddTagAction = ReturnType<typeof addTag>;

export type OrderTimeType = 'ONE_HOUR' | 'ASAP' | 'I_DONT_CARE';

export interface CreateStates {
  addr: string; //주소
  category: Category; // 카테고리
  link: string; // 카카오페이 링크
  place: string; // 수령지
  title: string; //방제
  user_id: string; // 방장 id
  tag: string[];
  orderTimeType: OrderTimeType;
}

export interface ButtonValue {
  text: '1시간 이내' | '최대한 빨리' | '상관없음 (인원이 모집되는대로)';
  value: OrderTimeType;
}
