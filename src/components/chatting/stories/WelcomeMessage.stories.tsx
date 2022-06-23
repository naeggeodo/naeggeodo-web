import { ComponentMeta } from '@storybook/react';
import WelcomeMessage from '../WelcomeMessage';

export default {
  title: 'chatting/컴포넌트',
  component: WelcomeMessage,
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          width: '100vw',
        }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof WelcomeMessage>;

const WelcomeMessageTemplate = (args) => <WelcomeMessage {...args} />;

export const WelcomeMessageStory = WelcomeMessageTemplate.bind({});

WelcomeMessageStory.args = {
  message: {
    chatMain_id: 1,
    contents: '님이 입장하셨습니다.',
    regDate: 'ㅁㄴㅇㄹ',
    type: 'WELCOME',
    nickname: '조재연',
  },
};

WelcomeMessageStory.storyName = '입장시 메시지';
