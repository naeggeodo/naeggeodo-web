import cookies from 'next-cookies';
import { END } from 'redux-saga';

import CheckDepositTemplate from '../../components/check-deposit/CheckDepositTemplate';
import { wrapper } from '../../modules';
import {
  getCurrentChatRoomAsyncActions,
  getCurrentChatUserListActions,
} from '../../modules/chatting/actions';
import { axiosInstance } from '../../service/api';
import { createCustomHeader } from '../../utils/createCustomHeader';

const checkDeposit = () => <CheckDepositTemplate />;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    axiosInstance.interceptors.request.use(
      async function (config) {
        try {
          const allCookies = cookies(context);
          const accessToken = allCookies.accessToken;
          config.headers = createCustomHeader(accessToken);
          return config;
        } catch (error) {
          console.log(error);
        }
      },
      function (error) {
        return Promise.reject(error);
      },
    );

    store.dispatch(
      getCurrentChatUserListActions.request({
        chattingRoomId: String(context.params.id),
      }),
    );

    store.dispatch(
      getCurrentChatRoomAsyncActions.request({
        chattingRoomId: context.params.id as string,
      }),
    );

    store.dispatch(END);

    await store.sagaTask.toPromise();

    return {
      props: {
        chatRoomInfo: store.getState().chattingRoomState.chatRoomInfo,
      },
    };
  },
);

export default checkDeposit;
