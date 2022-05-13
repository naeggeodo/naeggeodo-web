import { ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '../../../modules';
import CreateTemplate from '../CreateTemplate';

export default {
  title: 'create/페이지',
  component: CreateTemplate,
  decorators: [
    (Story) => (
      <Provider store={configureStore()}>
        <Story />
      </Provider>
    ),
  ],
} as ComponentMeta<typeof CreateTemplate>;

export const CreateTemplateStory = () => <CreateTemplate />;

CreateTemplateStory.storyName = '내꺼톡 생성 페이지';
