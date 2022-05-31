import { Category } from '../main/types';

type OrderTimeType = 'ONE_HOUR' | 'ASAP' | 'I_DONT_CARE';

export interface CreateStates {
  addr: string; //주소
  category: Category; // 카테고리
  link: string; // 카카오페이 링크
  place: string; // 수령지
  title: string; //방제
  user_id: string; // 방장 id
  tags: string[];
  orderTimeType: OrderTimeType;
}

export interface ButtonValue {
  text: '1시간 이내' | '최대한 빨리' | '상관없음 (인원이 모집되는대로)';
  value: OrderTimeType;
}
