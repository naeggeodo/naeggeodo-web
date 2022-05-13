import { ComponentMeta } from '@storybook/react';
import NaeggeotalkListItem from '../NaeggeotalkListItem';

export default {
  title: 'naeggeotalk/컴포넌트',
  component: NaeggeotalkListItem,
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof NaeggeotalkListItem>;

const NaeggeotalkListItemStory = (args) => <NaeggeotalkListItem {...args} />;
export const NaeggeotalkListItemStory1 = NaeggeotalkListItemStory.bind({});
NaeggeotalkListItemStory1.args = {
  data: {
    title: '버거킹 백석 이마트점',
    date: '하루 전',
    populate: '1/2명',
  },
};

NaeggeotalkListItemStory.storyName = '내꺼도 주문내역 아이템';
