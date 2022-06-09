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

const SearchTabStory = (args) => <SearchTemplate {...args} />;

export const SearchTabTemplate = SearchTabStory.bind({});

SearchTabTemplate.args = {
  tags: [
    { msg: '치킨', idx: 0 },
    { msg: '피자', idx: 1 },
  ],
};

SearchTabTemplate.storyName = '검색 탭 페이지';
