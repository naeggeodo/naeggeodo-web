import { ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import { action } from 'typesafe-actions';
import { configureStore } from '../../../modules';
import ConvertToCompletedButton from '../ConvertToCompletedButton';

const store = {
  getState: () => {
    return {
      loginState: {
        accessToken: 'sampleToken',
      },
      chattingRoomState: {
        chatRoomInfo: {
          imgPath: '/assets/images/hamburger.svg',
          link: 'string',
          title: '햄버거 먹을분',
          maxCount: 3,
          currentCount: 1,
          chatUser: ['호랑이'],
          endDate: '2021-04-19T14:02:18.809Z',
          id: 1,
          state: 'string',
          place: '아파트 1층',
          address: '서울',
          category: '치킨',
          dealHistory: 'null',
          user: '유저',
          createDate: '2021-04-19T14:02:18.809Z',
        },
      },
    };
  },
  subscribe: () => 0,
  dispatch: action('dispatch'),
};

export default {
  title: 'check-deposit/컴포넌트',
  component: ConvertToCompletedButton,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <Provider store={configureStore()}>
        <Story />
      </Provider>
    ),
  ],
} as ComponentMeta<typeof ConvertToCompletedButton>;

const Template = (args) => <ConvertToCompletedButton {...args} />;

export const ConvertCompletion = Template.bind({});

ConvertCompletion.storyName = '완료된 거래로 전환하기 버튼';
