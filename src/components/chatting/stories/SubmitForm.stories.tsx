import { ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '../../../modules';
import SubmitForm from '../SubmitForm';

type Args = {
  stompClient: null;
};

export default {
  title: 'chatting/컴포넌트',
  component: SubmitForm,
  decorators: [
    (Story) => (
      <Provider store={configureStore()}>
        <div
          style={{
            height: '100vh',
            width: '100vw',
            display: 'flex',
            alignItems: 'flex-end',
          }}>
          <Story />
        </div>
      </Provider>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof SubmitForm>;

export const SubmitFormStory = (args: Args) => (
  <SubmitForm stompClient={null} {...args} />
);

SubmitFormStory.storyName = '채팅 전송 인풋';
