import { ComponentMeta } from '@storybook/react';
import { rest } from 'msw';
import { worker } from '../../../mocks/browser';
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
  // parameters: {
  //   data: {
  //     title: '버거킹 백석 이마트점',
  //     date: '하루 전',
  //     populate: '1/2명',
  //   },
  // },
} as ComponentMeta<typeof NaeggeotalkListItem>;

export const NaeggeotalkListItemStory = () => <NaeggeotalkListItem />;

NaeggeotalkListItemStory.storyName = '내꺼도 주문내역 아이템';

// NaeggeotalkListItemStory.parameters = {
//   title: '버거킹 백석 이마트점',
//   date: '하루 전',
//   populate: '1/2명',
// };
