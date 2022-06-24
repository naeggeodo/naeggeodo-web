import { ComponentMeta } from '@storybook/react';
import TitleText from '../createForm/TitleText';

export default {
  title: 'create/컴포넌트',
  component: TitleText,
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: 'white',
          padding: '10px',
          height: '100vh',
        }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof TitleText>;

const Template = (args) => <TitleText {...args} />;
export const TitleTextStory = Template.bind({});

TitleTextStory.args = {
  children: '채팅방 최대 인원',
};
TitleTextStory.storyName = '내꺼톡 생성폼 제목 텍스트';
