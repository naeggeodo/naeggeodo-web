import { ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '../../../modules';
import OrderListTemplate from '../OrderListTemplate';

export default {
  title: 'orderlist/페이지',
  component: OrderListTemplate,
  decorators: [
    (Story) => (
      <Provider store={configureStore()}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}>
          <Story />
        </div>
      </Provider>
    ),
  ],
} as ComponentMeta<typeof OrderListTemplate>;

export const OrderlistTab = () => <OrderListTemplate />;

OrderlistTab.storyName = '내꺼도 주문내역 탭 페이지';
