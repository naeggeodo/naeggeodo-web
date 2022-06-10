import { OrderTimeType, OrderTimeTypeKr } from '../modules/create/types';

export function converOrderTimeType(
  orderTimeType: OrderTimeType,
): OrderTimeTypeKr | '인원이 모집되는 대로' {
  switch (orderTimeType) {
    case 'ONE_HOUR':
      return '1시간 이내';
    case 'QUICK':
      return '최대한 빨리';
    case 'FREEDOM':
      return '인원이 모집되는 대로';
  }
}
