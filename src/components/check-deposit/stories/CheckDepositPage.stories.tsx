import { ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '../../../modules';
import { CurrentChatUser } from '../../../modules/chatting/types';
import CheckDepositTemplate from '../CheckDepositTemplate';

type Args = {
  users: CurrentChatUser[];
};

export default {
  title: 'check-deposit/페이지',
  component: CheckDepositTemplate,
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
} as ComponentMeta<typeof CheckDepositTemplate>;

const CheckDepositPageStory = (args: Args) => (
  <CheckDepositTemplate {...args} />
);

export const CheckDepositPage = CheckDepositPageStory.bind({});

CheckDepositPage.args = {
  users: [
    { user_id: '2', idx: 0, remittanceState: 'Y' },
    { user_id: '3', idx: 1, remittanceState: 'Y' },
  ],
};

CheckDepositPage.storyName = '돈을 받으셨나요 페이지';
