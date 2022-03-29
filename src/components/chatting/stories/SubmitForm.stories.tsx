import { ComponentMeta } from '@storybook/react';
import SubmitForm from '../SubmitForm';

export default {
  title: 'chatting/컴포넌트',
  component: SubmitForm,
  decorators: [
<<<<<<< HEAD
    () => (
      <div style={{ height: '100vh', width: '100vw' }}>
        <SubmitForm />
=======
    (Story) => (
      <div style={{ height: '100vh', width: '100vw' }}>
        <Story />
>>>>>>> refactor/0329-code-review
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
<<<<<<< HEAD
};
=======
} as ComponentMeta<typeof SubmitForm>;
>>>>>>> refactor/0329-code-review

export const SubmitFormComp = () => <SubmitForm />;
SubmitFormComp.storyName = '채팅 전송 인풋';
