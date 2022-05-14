import CategoryMenuSlide from '../CategoryMenuSlide';
import { ComponentMeta, Story } from '@storybook/react';
import { rest } from 'msw';
import { configureStore } from '../../../modules';
import { handlers } from '../../../mocks/handlers';

export default {
  title: 'main/컴포넌트',
  component: CategoryMenuSlide,
  decorators: [(Story) => <Story />],
} as ComponentMeta<typeof CategoryMenuSlide>;

const Template = (args) => <CategoryMenuSlide {...args} />;

export const CategoryMenuStory = Template.bind({});
CategoryMenuStory.args = {};

CategoryMenuStory.parameters = {
  msw: handlers,
};

CategoryMenuStory.storyName = '카테고리 메뉴 슬라이드';
