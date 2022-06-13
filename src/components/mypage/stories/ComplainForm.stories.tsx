import { ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '../../../modules';
import ComplainForm from '../report/ComplainForm';

export default {
  title: 'mypage/컴포넌트',
  component: ComplainForm,
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
} as ComponentMeta<typeof ComplainForm>;

const Template = (args) => <ComplainForm {...args} />;

export const ComplainFormStory = Template.bind({});

ComplainFormStory.args = {};

ComplainFormStory.storyName = '신고하기 팝업';
