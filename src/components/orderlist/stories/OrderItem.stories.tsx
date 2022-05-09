import { ComponentMeta } from '@storybook/react';
import OrderItem from '../OrderItem';

export default {
  title: 'orderlist/컴포넌트',
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

export const OrderlistTabItem = () => <OrderItem />;

OrderlistTabItem.storyName = '내꺼도 주문내역 아이템';
