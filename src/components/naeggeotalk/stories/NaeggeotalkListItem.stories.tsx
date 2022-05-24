import { ComponentMeta } from '@storybook/react';
import NaeggeotalkListItem from '../NaeggeotalkListItem';

export default {
  title: 'naeggeotalk/컴포넌트',
  component: NaeggeotalkListItem,
  decorators: [(Story) => <Story />],
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof NaeggeotalkListItem>;

const Template = (args) => <NaeggeotalkListItem {...args} />;
export const NaeggeotalkListItemStory = Template.bind({});

NaeggeotalkListItemStory.args = {
  data: {
    title: '버거킹 백석 이마트점',
    date: '하루 전',
  },
};

NaeggeotalkListItemStory.storyName = '내꺼도 주문내역 아이템';
