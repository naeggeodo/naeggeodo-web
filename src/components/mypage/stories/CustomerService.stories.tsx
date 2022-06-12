import { ComponentMeta } from '@storybook/react';
import CustomerServiceSection from '../CustomerServiceSection';

export default {
  title: 'mypage/컴포넌트',
  component: CustomerServiceSection,
  decorators: [
    (Story) => (
      <div
        style={{ height: '100vh', backgroundColor: '#fff', padding: '30px 0' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof CustomerServiceSection>;

export const CustomerServiceStory = () => <CustomerServiceSection />;

CustomerServiceStory.storyName = '고객센터';
