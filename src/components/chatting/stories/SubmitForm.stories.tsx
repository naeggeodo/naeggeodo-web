import SubmitForm from '../SubmitForm';

export default {
  title: 'chatting/컴포넌트',
  component: SubmitForm,
  decorators: [
    () => (
      <div style={{ height: '100vh', width: '100vw' }}>
        <SubmitForm />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
};

export const SubmitFormComp = () => <SubmitForm />;
SubmitFormComp.storyName = '채팅 전송 인풋';
