import { END } from 'redux-saga';

import { RootState, wrapper } from '../../modules';
import ChattingTemplate from '../../components/chatting/ChattingTemplate';
import {
  getChattingListActions,
  getCurrentChatRoomAsyncActions,
  getUserNicknameActions,
} from '../../modules/chatting/actions';
import { saveCookies } from '../../utils/saveCookies';
import { getQuickChattingListActions } from '../../modules/quick-chatting/actions';
import { axiosInstance } from '../../service/api';
import { createCustomHeader } from '../../utils/createCustomHeader';
import cookies from 'next-cookies';
import axios from 'axios';

const chatting = () => {
  return <ChattingTemplate />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    saveCookies(store, context);

    const rootState: RootState = store.getState();
    const user_id = rootState.loginState.user_id;
    const accessToken = rootState.loginState.accessToken;

    axios.defaults.headers['Authorization'] = '';
    if (context.req && context.req.headers.cookie) {
      axios.defaults.headers['Authorization'] = `Bearer ${accessToken}`;
    }

    if (!accessToken) {
      return {
        redirect: {
          permanent: false,
          destination: '/login',
        },
      };
    }

    store.dispatch(
      getCurrentChatRoomAsyncActions.request({
        chattingRoomId: context.params.id as string,
      }),
    );
    store.dispatch(
      getChattingListActions.request({
        chattingRoomId: context.params.id as string,
        userId: user_id,
      }),
    );

    store.dispatch(getUserNicknameActions.request(user_id));

    store.dispatch(
      getQuickChattingListActions.request({
        userId: user_id,
      }),
    );

    store.dispatch(END);
    await store.sagaTask.toPromise();

    return {
      props: {},
    };
  },
);

export default chatting;
