import { ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '../../../modules';
import TabMenu from '../../main/TabMenu';
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
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof CreateInit>;

export const CreateInitStory = () => (
  <>
    <CreateInit />
    <TabMenu />
  </>
);

CreateInitStory.storyName = '내꺼톡 생성 주문시간선택';
