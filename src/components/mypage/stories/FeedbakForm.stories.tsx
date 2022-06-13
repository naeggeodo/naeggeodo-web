import { ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '../../../modules';
import FeedbackForm from '../report/FeedbackForm';

export default {
  title: 'mypage/컴포넌트',
  component: FeedbackForm,
  decorators: [
    (Story) => (
      <Provider store={configureStore()}>
        <div style={{ backgroundColor: '#fff' }}>
          <Story />
        </div>
      </Provider>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof FeedbackForm>;

const Template = (args) => <FeedbackForm {...args} />;

export const FeedbackFormStory = Template.bind({});

FeedbackFormStory.args = {};

FeedbackFormStory.storyName = '건의하기 팝업';
