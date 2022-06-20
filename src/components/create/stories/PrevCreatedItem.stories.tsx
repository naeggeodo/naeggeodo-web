import { ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '../../../modules';
import { PrevCreatedListItem } from '../../../modules/create/types';
import PrevCreatedItem from '../PrevCreatedItem';

type Args = {
  data: PrevCreatedListItem;
};

export default {
  title: 'create/컴포넌트',
  component: PrevCreatedItem,
  decorators: [
    (Story) => (
      <Provider store={configureStore()}>
        <div style={{ backgroundColor: 'gray', height: '100vh' }}>
          <Story />
        </div>
      </Provider>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof PrevCreatedItem>;

const Template = (args: Args) => <PrevCreatedItem {...args} />;
export const PrevCreatedItemStory = Template.bind({});

PrevCreatedItemStory.args = {
  data: {
    buildingCode: '10213',
    address: '서울',
    title: '교촌먹을분',
    maxCount: 5,
    tags: ['치킨'],
    bookmarks: 'Y',
    user_id: '다혜',
    currentCount: 1,
    bookmarksDate: '',
    id: 1,
    state: 'PROGRESS',
    imgPath: '/assets/images/hamburger.svg',
    place: '메세나폴리스',
    endData: '2022-05-13T15:52:52',
    category: '양식',
    idx: 2,
    createDate: '2022-05-13T15:52:52',
    orderTimeType: 'FREEDOM',
  },
};
PrevCreatedItemStory.storyName = '이전 생성 내역 아이템';
