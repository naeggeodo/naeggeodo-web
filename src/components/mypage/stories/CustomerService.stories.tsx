import { ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '../../../modules';
import CustomerServiceSection from '../CustomerServiceSection';

export default {
  title: 'mypage/컴포넌트',
  component: CustomerServiceSection,
  decorators: [
    (Story) => (
      <Provider store={configureStore()}>
        <div
          style={{
            height: '100vh',
            backgroundColor: '#fff',
            padding: '30px 0',
          }}>
          <Story />
        </div>
      </Provider>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof CustomerServiceSection>;

export const CustomerServiceStory = () => <CustomerServiceSection />;

CustomerServiceStory.storyName = '고객센터';
