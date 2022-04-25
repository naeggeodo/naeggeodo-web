import { ComponentMeta } from '@storybook/react';
import SearchPostCode from '../SearchPostCode';

export default {
  title: 'main/컴포넌트',
  component: SearchPostCode,
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof SearchPostCode>;

// export const SearchPostCodeStory = () => <SearchPostCode />;

// SearchPostCodeStory.storyName = '우편 번호 검색';
