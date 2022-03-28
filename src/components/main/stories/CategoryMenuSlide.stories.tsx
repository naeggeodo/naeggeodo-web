import CategoryMenuSlide from '../CategoryMenuSlide';

const MockData = [
  '전체',
  '치킨',
  '버거',
  '한식',
  '일식/돈까스',
  '카페/디저트',
  '족발/보쌈',
  '고기/구이',
];

export default {
  title: 'main/컴포넌트',
  component: CategoryMenuSlide,
};

export const CategoryMenu = () => <CategoryMenuSlide categories={MockData} />;

CategoryMenu.storyName = '카테고리 메뉴 슬라이드';
