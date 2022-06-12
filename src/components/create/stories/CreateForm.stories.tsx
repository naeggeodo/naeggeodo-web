import { ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '../../../modules';
import CreateForm from '../createForm/CreateForm';

export default {
  title: 'create/페이지',
  component: CreateForm,
  decorators: [
    (Story) => (
      <Provider store={configureStore()}>
        <div style={{ backgroundColor: '#fff' }}>
          <Story />
        </div>
      </Provider>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof CreateForm>;

export const CreateFormStory = () => <CreateForm />;

CreateFormStory.storyName = '내꺼톡 생성 페이지';
