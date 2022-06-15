import { ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '../../../modules';
import ProgressTemplate from '../ProgressTemplate';

export default {
  title: 'progress/페이지',
  component: ProgressTemplate,
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
} as ComponentMeta<typeof ProgressTemplate>;

const Template = (args) => <ProgressTemplate {...args} />;
export const ProgressTemplateStory = Template.bind({});

ProgressTemplateStory.storyName = '진행중인 채팅 페이지';
