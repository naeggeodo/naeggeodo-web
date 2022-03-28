import { categoryMockData } from '../../../pages';
import CategoryMenuSlide from '../CategoryMenuSlide';

export default {
  title: 'main/컴포넌트',
  component: CategoryMenuSlide,
};

export const CategoryMenu = () => (
  <CategoryMenuSlide categories={categoryMockData} />
);

CategoryMenu.storyName = '카테고리 메뉴 슬라이드';
