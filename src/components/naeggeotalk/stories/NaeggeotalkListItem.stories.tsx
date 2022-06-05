import { ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '../../../modules';
import NaeggeotalkListItem from '../NaeggeotalkListItem';

export default {
  title: 'naeggeotalk/컴포넌트',
  component: NaeggeotalkListItem,
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
