import { ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import { END } from 'redux-saga';
import { configureStore, wrapper } from '../../../modules';
import {
  getChattingListActions,
  getCurrentChatRoomAsyncActions,
  getCurrentChatUserListActions,
  getUserNicknameActions,
} from '../../../modules/chatting/actions';
import { saveCookies } from '../../../utils/saveCookies';
import ChattingTemplate from '../ChattingTemplate';

// TODO loaders해도 안되는듯
export default {
  title: 'chatting/페이지',
  component: ChattingTemplate,
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
} as ComponentMeta<typeof ChattingTemplate>;

export const ChattingPageStory = () => <ChattingTemplate />;

// ChattingPageStory.loaders = [
//   async (context) => {
//     console.log('context', context);
//     const data = await getServerSideProps(context);
//     return data;
//   },
// ];

ChattingPageStory.loaders = [
  async () => {
    wrapper.getServerSideProps((store) => async (context) => {
      store.dispatch(
        getCurrentChatRoomAsyncActions.request({
          chattingRoomId: '276',
        }),
      );
      store.dispatch(
        getChattingListActions.request({
          chattingRoomId: '276',
          userId: '다혜',
        }),
      );
      store.dispatch(
        getCurrentChatUserListActions.request({
          chattingRoomId: '276',
        }),
      );
      store.dispatch(getUserNicknameActions.request('다혜'));
      store.dispatch(END);
      await store.sagaTask.toPromise();
      return {
        props: {
          chattingList: store.getState().chattingRoomState.chattingList,
        },
      };
    });
  },
];

ChattingPageStory.storyName = '채팅 페이지';
