export interface CreateStates {
  orderType:
    | '1시간 이내'
    | '최대한 빨리'
    | '상관없음 (인원이 모집되는대로)'
    | '선택하지 않음'
    | '';
  storeName: string;
  storeLink: string;
  tags: string[];
  maxCount: number;
}
