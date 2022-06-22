import { ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '../../../modules';
import PrevCreatedList from '../PrevCreatedList';

export default {
  title: 'create/컴포넌트',
  component: PrevCreatedList,
  decorators: [
    (Story) => (
      <Provider store={configureStore()}>
        <div style={{ height: '100vh', backgroundColor: '#fff' }}>
          <Story />
        </div>
      </Provider>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof PrevCreatedList>;

const Template = (args) => <PrevCreatedList {...args} />;

export const PrevCreatedListStory = Template.bind({});

PrevCreatedListStory.storyName = '이전 생성 내역 아이템리스트';
