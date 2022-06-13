import { ComponentMeta } from '@storybook/react';
import SubmitForm from '../SubmitForm';

type Args = {
  stompClient: null;
};

export default {
  title: 'chatting/컴포넌트',
  component: SubmitForm,
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
} as ComponentMeta<typeof SubmitForm>;

export const SubmitFormStory = (args: Args) => <SubmitForm {...args} />;

SubmitFormStory.storyName = '채팅 전송 인풋';
