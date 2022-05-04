import { ComponentMeta } from '@storybook/react';
import SubmitForm from '../SubmitForm';

export default {
  title: 'chatting/컴포넌트',
  component: SubmitForm,
  decorators: [
    (Story) => (
      <div style={{ height: '100vh', width: '100vw' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof SubmitForm>;

export const SubmitFormComp = () => <SubmitForm />;
SubmitFormComp.storyName = '채팅 전송 인풋';
