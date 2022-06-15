import { ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import { action } from 'typesafe-actions';
import { configureStore } from '../../../modules';
import CheckDepositTemplate from '../CheckDepositTemplate';

const store = {
  getState: () => {
    return {
      chattingRoomState: {
        currentChatUserList: {
          //   users: [{ user_id: '뚱이', idx: 1, remittanceState: 'N' }],
          users: null,
        },
      },
    };
  },
  subscribe: () => 0,
  dispatch: action('dispatch'),
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

export const CheckDepositTemplateStory = () => <CheckDepositTemplate />;

CheckDepositTemplateStory.storyName = '수령완료 페이지';
