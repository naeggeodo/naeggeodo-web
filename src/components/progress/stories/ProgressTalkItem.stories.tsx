import { ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '../../../modules';
import ProgressTalkItem from '../ProgressTalkItem';

export default {
  title: 'progress/컴포넌트',
  component: ProgressTalkItem,
  decorators: [
    (Story) => (
      <Provider store={configureStore()}>
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
      </Provider>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof ProgressTalkItem>;

const Template = (args) => <ProgressTalkItem {...args} />;
export const ProgressTalkItemStory = Template.bind({});

ProgressTalkItemStory.args = {
  id: 0,
  imgPath: '/assets/images/hamburger.svg',
  index: 1,
  title: '교촌먹을분',
  latestMessage: '교촌주세요',
  user_id: '재연',
};

ProgressTalkItemStory.storyName = '진행중인 채팅 아이템';
