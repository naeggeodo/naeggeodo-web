import { ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '../../../modules';
import CompleteDepositButton from '../CompleteDepositButton';

type Args = {
  user: {
    user_id: string;
    idx: number;
    remittanceState: 'N' | 'Y';
  };
};

export default {
  title: 'check-deposit/컴포넌트',
  component: CompleteDepositButton,
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
} as ComponentMeta<typeof CompleteDepositButton>;

// const Template = (args: Props) => <CheckDepositItem {...args} />;

// export const CompleteButton = Template.bind({});

// CompleteButton.args = {
//   userNickName: '신길동 호랑이',
// };

// CompleteButton.storyName = '수령 완료 버튼';
