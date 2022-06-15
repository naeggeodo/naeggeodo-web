import { ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '../../../modules';
import CheckDepositTemplate from '../CheckDepositTemplate';

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
