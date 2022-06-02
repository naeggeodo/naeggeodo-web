import { ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '../../../modules';
import QuickMessageComp from '../QuickMessageComp';

type Args = {
  stompClient: null;
};

export default {
  title: 'chatting/컴포넌트',
  component: QuickMessageComp,
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
} as ComponentMeta<typeof QuickMessageComp>;

// const Template = (args: Args) => <QuickMessageComp {...args} />;
// export const QuickMessageStory = Template.bind({});

// QuickMessageStory.storyName = '빠른 메시지 전송';
