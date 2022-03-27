import SubmitForm from '../SubmitForm';

export default {
  title: 'chatting/components/SubmitForm',
  component: SubmitForm,
  decorators: [
    () => (
      <div style={{ height: '100vh', width: '100vw', background: '#000' }}>
        <SubmitForm />
      </div>
    ),
  ],
};

export const example = () => <SubmitForm />;
