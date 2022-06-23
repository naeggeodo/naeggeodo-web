import { Category } from '../modules/common/types';

export const convertEngCategoryToKor = (category: Category): string => {
  switch (category) {
    case 'ALL':
      return '전체';
    case 'CHICKEN':
      return '치킨';
    case 'CHINESE':
      return '중식';
    case 'DESSERT':
      return '디저트';
    case 'FASTFOOD':
      return '패스트푸드';
    case 'GRILLED_MEAT':
      return '구이/고기';
    case 'JAPANESE':
      return '일식';
    case 'KOREAN':
      return '한식';
    case 'PIZZA':
      return '피자';
    case 'PORK_FEET':
      return '족발';
    case 'SNACKS':
      return '분식';
    case 'STEW':
      return '찌개';
    case 'WESTERN':
      return '양식';
    case 'HAMBURGER':
      return '햄버거';
    default:
      return '카테고리 선택';
  }
};
