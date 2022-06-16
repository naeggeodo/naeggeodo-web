import { ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore, wrapper } from '../../../modules';
import SearchResultList from '../SearchResultList';

//TODO 안댐,,

export default {
  title: 'search/컴포넌트',
  component: SearchResultList,
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
} as ComponentMeta<typeof SearchResultList>;

export const SearchResultListStory = () => <SearchResultList />;

// SearchResultListStory.loaders = [
//   async () => {
//     wrapper.getServerSideProps((store) => async () => {
//       store.dispatch(getResultByTagActions.request(decodeURI('피자')));
//       store.dispatch(END);
//       await store.sagaTask.toPromise();
//       return {
//         props: {
//           searchResultList: store.getState().searchPageState.searchResultList,
//         },
//       };
//     });
//   },
// ];

SearchResultListStory.storyName = '검색 결과 리스트';
