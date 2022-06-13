import { ComponentMeta } from '@storybook/react';
import QuickMessageComp from '../QuickMessageComp';

type Args = {
  stompClient: null;
};

export default {
  title: 'chatting/컴포넌트',
  component: QuickMessageComp,
  decorators: [(Story) => <Story />],
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof QuickMessageComp>;

const Template = (args: Args) => <QuickMessageComp {...args} />;
export const QuickMessageStory = Template.bind({});

QuickMessageStory.storyName = '빠른 메시지 전송';
