import { ComponentMeta } from '@storybook/react';
import CheckDeposit from '../../../pages/check-deposit/[id]';

export default {
  title: 'check-deposit/페이지',
  component: CheckDeposit,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [(Story) => <Story />],
} as ComponentMeta<typeof CheckDeposit>;

const Template = (args) => <CheckDeposit {...args} />;

export const CheckDepositPage = Template.bind({});

CheckDepositPage.args = {};

CheckDepositPage.storyName = '돈을 받으셨나요 페이지';
