import { ComponentMeta } from '@storybook/react';

import RegisterTime from '../RegisterTime';

export default {
  title: 'main/컴포넌트',
  component: RegisterTime,
  decorators: [
    (Story) => (
      <div
        style={{
          height: '100vh',
          width: '100vw',
          display: 'flex',
          alignItems: 'center',
        }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof RegisterTime>;

const Template = (args) => <RegisterTime {...args} />;

export const RegisterTimeStory = Template.bind({});
RegisterTimeStory.args = {
  children: '안녕하세요',
};

RegisterTimeStory.storyName = '가입 시간';
