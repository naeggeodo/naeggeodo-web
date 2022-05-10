import { ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '../../../modules';
import NaeggeotalkTemplate from '../NaeggeotalkTemplate';

export default {
  title: 'naeggeotalk/페이지',
  component: NaeggeotalkTemplate,
  decorators: [
    (Story) => (
      <Provider store={configureStore()}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}>
          <Story />
        </div>
      </Provider>
    ),
  ],
} as ComponentMeta<typeof NaeggeotalkTemplate>;

export const NaeggeotalkStory = () => <NaeggeotalkTemplate />;

NaeggeotalkStory.storyName = '내꺼토ㄱ 주문내역 탭 페이지';
