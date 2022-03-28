import { categoryMockData } from '../../../pages';
import CategoryMenuSlide from '../CategoryMenuSlide';
import { ComponentMeta } from '@storybook/react';

export default {
  title: 'main/컴포넌트',
  component: CategoryMenuSlide,
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof CategoryMenuSlide>;

export const CategoryMenu = () => (
  <CategoryMenuSlide categories={categoryMockData} />
);

CategoryMenu.storyName = '카테고리 메뉴 슬라이드';
