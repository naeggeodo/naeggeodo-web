import { ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '../../../modules';
import SearchTemplate from '../SearchTemplate';

export default {
  title: 'search/페이지',
  component: SearchTemplate,
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
} as ComponentMeta<typeof SearchTemplate>;

export const SearchTabStory = () => <SearchTemplate />;

SearchTabStory.storyName = '검색 탭 페이지';
