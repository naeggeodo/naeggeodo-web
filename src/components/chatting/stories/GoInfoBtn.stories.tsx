import { ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '../../../modules';
import GoInfoBtn from '../GoInfoBtn';

export default {
  title: 'chatting/컴포넌트',
  component: GoInfoBtn,
  decorators: [
    (Story) => (
      <Provider store={configureStore()}>
        <div style={{ height: '8vh', width: '100vw' }}>
          <Story />
        </div>
      </Provider>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof GoInfoBtn>;

export const GoInfo = () => <GoInfoBtn />;

GoInfo.storyName = '돈을받으셨나요 버튼';
