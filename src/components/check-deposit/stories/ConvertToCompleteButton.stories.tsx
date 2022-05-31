import { ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '../../../modules';
import ConvertToCompletedButton from '../ConvertToCompletedButton';

const store = configureStore();

export default {
  title: 'check-deposit/컴포넌트',
  component: ConvertToCompletedButton,
  parameters: {
    layout: 'fullscreen',
  },
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
} as ComponentMeta<typeof ConvertToCompletedButton>;

const Template = (args) => <ConvertToCompletedButton {...args} />;

export const ConvertCompletion = Template.bind({});

ConvertCompletion.storyName = '완료된 거래로 전환하기 버튼';
