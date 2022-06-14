import { ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import { action } from 'typesafe-actions';
import SearchResultList from '../SearchResultList';

const store = {
  getState: () => {
    return {
      searchPageState: {
        searchResultList: {
          chatRoom: [
            {
              address: '서울',
              endDate: '2021-04-19T14:02:18.809Z',
              buildingCode: '서울 아파트 1층',
              link: 'www',
              orderTimeType: 'FREEDOM',
              title: '교촌치킨',
              maxCount: 3,
              tags: ['치킨'],
              bookmarks: 'Y',
              user_id: '1',
              imgPath: '/assets/images/hamburger.svg',
              currentCount: 1,
              bookmarksDate: 'string',
              id: 2,
              state: 'CREATE',
              place: '서울 아파트 1층',
              category: '서양음식',
              idx: 1,
              createDate: '2021-04-19T14:02:18.809Z',
            },
          ],
        },
      },
    };
  },
  subscribe: () => 0,
  dispatch: action('dispatch'),
};

export default {
  title: 'search/컴포넌트',
  component: SearchResultList,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof SearchResultList>;

export const SearchResultListStory = (args) => <SearchResultList {...args} />;

SearchResultListStory.storyName = '검색 결과 리스트';
