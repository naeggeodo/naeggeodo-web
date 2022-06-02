import { ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '../../../modules';
import NoItemText from '../NoItemText';

export default {
  title: 'main/컴포넌트',
  component: NoItemText,
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#ffffff' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof NoItemText>;

const Template = (args) => (
  <Provider store={configureStore()}>
    <NoItemText {...args} />
  </Provider>
);

export const NoItemTextStory = Template.bind({});

NoItemTextStory.storyName = '리스트 없을 때';
