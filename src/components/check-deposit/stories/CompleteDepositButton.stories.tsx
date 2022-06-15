import { ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '../../../modules';
import { CurrentChatUser } from '../../../modules/chatting/types';
import CompleteDepositButton from '../CompleteDepositButton';

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

const Template = (args: { user: CurrentChatUser }) => (
  <CompleteDepositButton {...args} />
);

export const CompleteButton = Template.bind({});

CompleteButton.args = {
  user: {
    user_id: '신길동 호랑이',
    idx: 1,
    remittanceState: 'N',
    nickname: '신길동 호랑이',
  },
};

CompleteButton.storyName = '수령 완료 버튼';
