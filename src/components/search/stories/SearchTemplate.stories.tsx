import { ComponentMeta } from '@storybook/react';
import SearchTemplate from '../SearchTemplate';

export default {
  title: 'search/페이지',
  component: SearchTemplate,
  decorators: [(Story) => <Story />],
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof SearchTemplate>;

const SearchTabStory = (args) => <SearchTemplate {...args} />;

export const SearchTabTemplate = SearchTabStory.bind({});
SearchTabTemplate.args = {
  tags: [
    { msg: '치킨', idx: 0 },
    { msg: '피자', idx: 1 },
  ],
};
SearchTabTemplate.storyName = '검색 탭 페이지';
