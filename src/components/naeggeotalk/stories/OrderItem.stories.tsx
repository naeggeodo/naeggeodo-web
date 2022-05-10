import { ComponentMeta } from '@storybook/react';
import OrderItem from '../NaeggeotalkListItem';

export default {
  title: 'naeggeotalk/컴포넌트',
  component: OrderItem,
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
} as ComponentMeta<typeof OrderItem>;

export const NaeggeotalkListItemStory = () => <OrderItem />;

NaeggeotalkListItemStory.storyName = '내꺼도 주문내역 아이템';
