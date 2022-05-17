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

export const SearchTabTemplate = () => <SearchTemplate />;

SearchTabTemplate.storyName = '검색 탭 페이지';
