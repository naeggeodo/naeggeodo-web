import { ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '../../../modules';
import SelectCategoryDrawer from '../createForm/SelectCategoryDrawer';

export default {
  title: 'create/컴포넌트',
  component: SelectCategoryDrawer,
  decorators: [
    (Story) => (
      <Provider store={configureStore()}>
        <Story />
      </Provider>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof SelectCategoryDrawer>;

const Template = (args) => <SelectCategoryDrawer {...args} />;

export const SelectCategoryDrawerStory = Template.bind({});

SelectCategoryDrawerStory.args = {
  isOpen: true,
};

SelectCategoryDrawerStory.storyName = '카테고리 선택 드로워';
