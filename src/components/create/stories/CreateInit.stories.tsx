import { ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '../../../modules';
import CreateInit from '../CreateInit';

export default {
  title: 'create/컴포넌트',
  component: CreateInit,
  decorators: [
    (Story) => (
      <Provider store={configureStore()}>
        <Story />
      </Provider>
    ),
  ],
} as ComponentMeta<typeof CreateInit>;

export const CreateInitStory = () => <CreateInit />;

CreateInitStory.storyName = '내꺼톡 생성 주문시간선택';
