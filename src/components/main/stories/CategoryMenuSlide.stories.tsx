import CategoryMenuSlide from '../CategoryMenuSlide';
import { ComponentMeta } from '@storybook/react';
import { handlers } from '../../../mocks/handlers';

export default {
  title: 'main/컴포넌트',
  component: CategoryMenuSlide,
  decorators: [(Story) => <Story />],
} as ComponentMeta<typeof CategoryMenuSlide>;

const Template = (args) => <CategoryMenuSlide {...args} />;

export const CategoryMenuStory = Template.bind({});

CategoryMenuStory.args = {
  foodCategories: [
    {
      idx: 0,
      category: 'ALL',
    },
    {
      idx: 1,
      category: 'CHICKEN',
    },
    {
      idx: 2,
      category: 'JAPANESE',
    },
    {
      idx: 3,
      category: 'CHINESE',
    },
    {
      idx: 4,
      category: 'KOREAN',
    },
    {
      idx: 5,
      category: 'SNACKS',
    },
    {
      idx: 6,
      category: 'STEW',
    },
    {
      idx: 7,
      category: 'PIZZA',
    },
    {
      idx: 8,
      category: 'WESTERN',
    },
    {
      idx: 9,
      category: 'GRILLED_MEAT',
    },
    {
      idx: 10,
      category: 'PORK_FEET',
    },
    {
      idx: 11,
      category: 'DESSERT',
    },
    {
      idx: 12,
      category: 'FASTFOOD',
    },
  ],
};

CategoryMenuStory.parameters = {
  msw: handlers,
};

CategoryMenuStory.storyName = '카테고리 메뉴 슬라이드';
