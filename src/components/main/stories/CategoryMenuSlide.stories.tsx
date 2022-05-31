import CategoryMenuSlide from '../CategoryMenuSlide';
import { ComponentMeta } from '@storybook/react';
import { mockFoodCategories } from '../data';
import { configureStore } from '../../../modules';
import { Provider } from 'react-redux';

export default {
  title: 'main/컴포넌트',
  component: CategoryMenuSlide,
  decorators: [(Story) => <Story />],
} as ComponentMeta<typeof CategoryMenuSlide>;

const Template = (args) => (
  <Provider store={configureStore()}>
    <CategoryMenuSlide {...args} />
  </Provider>
);

export const CategoryMenuStory = Template.bind({});

CategoryMenuStory.args = {
  foodCategories: mockFoodCategories,
};

CategoryMenuStory.storyName = '카테고리 메뉴 슬라이드';
