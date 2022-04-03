import { ComponentMeta } from '@storybook/react';
import ConvertToCompletedButton from '../ConvertToCompletedButton';

export default {
  title: 'check-deposit/컴포넌트',
  component: ConvertToCompletedButton,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof ConvertToCompletedButton>;

const Template = (args) => <ConvertToCompletedButton {...args} />;

export const ConvertCompletion = Template.bind({});

ConvertCompletion.args = {};

ConvertCompletion.storyName = '완료된 거래로 전환하기 버튼';
