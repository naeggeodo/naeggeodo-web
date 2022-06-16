import { ComponentMeta } from '@storybook/react';
import TabButtonItem from '../TabButtonItem';
export default {
  title: 'main/컴포넌트',
  component: TabButtonItem,
  decorators: [
    (Story) => (
      <div
        style={{
          margin: '20px',
        }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
    nextRouter: {
      path: '/',
    },
  },
} as ComponentMeta<typeof TabButtonItem>;

const TabButton = (args) => <TabButtonItem {...args} />;

export const TabButton1 = TabButton.bind({});
TabButton1.args = {
  id: 1,
  title: '홈',
  altText: '홈버튼',
  image: '/assets/images/homegray.svg',
  link: '/chatRooms',
};
TabButton1.storyName = '하단 탭버튼 홈';

export const TabButton2 = TabButton.bind({});
TabButton2.args = {
  id: 2,
  title: '검색',
  altText: '검색버튼',
  image: '/assets/images/searchgray.svg',
  link: '/search',
};
TabButton2.storyName = '하단 탭버튼 검색';

export const TabButton3 = TabButton.bind({});
TabButton3.args = {
  id: 3,
  title: '내꺼톡 생성',
  altText: '추가하기 버튼',
  image: '/assets/images/plusgray.svg',
  link: '/create',
};
TabButton3.storyName = '하단 탭버튼 내꺼톡생성';
