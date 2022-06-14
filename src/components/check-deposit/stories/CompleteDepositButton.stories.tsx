import { ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '../../../modules';
import CompleteDepositButton from '../CompleteDepositButton';

// type Args = {
//   user: {
//     user_id: string;
//     idx: number;
//     remittanceState: 'N' | 'Y';
//   };
// };

export default {
  title: 'check-deposit/컴포넌트',
  component: CompleteDepositButton,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <Provider store={configureStore()}>
        <Story />
      </Provider>
    ),
  ],
} as ComponentMeta<typeof CompleteDepositButton>;

const Template = (args) => <CompleteDepositButton {...args} />;

export const CompleteButton = Template.bind({});

CompleteButton.args = {
  user: {
    user_id: '신길호랑이',
    idx: 1,
    remittanceState: 'N',
  },
};

CompleteButton.storyName = '수령 완료 버튼';
