import { ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '../../../modules';
import SearchTag from '../SearchTag';

export default {
  title: 'search/컴포넌트',
  component: SearchTag,
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
} as ComponentMeta<typeof SearchTag>;

export const SearchTags = () => {
  return (
    <>
      <SearchTag selected='피자' dataValue='피자' handleClick={() => {}}>
        피자
      </SearchTag>
      <SearchTag selected='치킨' dataValue='치킨' handleClick={() => {}}>
        치킨
      </SearchTag>

      <SearchTag selected='버거' dataValue='스크류바' handleClick={() => {}}>
        햄버거
      </SearchTag>
      <SearchTag selected='콤보' dataValue='스크류바' handleClick={() => {}}>
        허니콤보
      </SearchTag>
    </>
  );
};

SearchTags.storyName = '검색 태그 버튼';
