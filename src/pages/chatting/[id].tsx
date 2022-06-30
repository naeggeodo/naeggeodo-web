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
import { removeCookiesServerside } from '../../utils/removeCookiesServerside';
import cookies from 'next-cookies';

const chatting = () => {
  return <ChattingTemplate />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    saveCookies(store, context);

    const rootState: RootState = store.getState();
    const user_id = rootState.loginState.user_id;

    const stateAccessToken = rootState.loginState.accessToken;

    const allCookies = cookies(context);
    const accessToken = allCookies.accessToken;
    removeCookiesServerside(context);
    if (!accessToken) {
      return {
        redirect: {
          permanent: false,
          destination: '/login',
        },
      };
    }
    // axiosInstance.interceptors.request.use(
    //   async function (config) {
    //     try {
    //       config.headers = createCustomHeader(stateAccessToken);
    //       return config;
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   },
    //   function (error) {
    //     return Promise.reject(error);
    //   }
    // );

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
