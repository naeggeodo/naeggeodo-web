import { END } from 'redux-saga';

import { wrapper } from '../../modules';
import ChattingTemplate from '../../components/chatting/ChattingTemplate';
import {
  getCurrentChatRoomAsyncActions,
  getPreviousChattingListActions,
  getQuickChattingListActions,
} from '../../modules/chatting/actions';
import { PreviousChattingListResponse } from '../../modules/chatting/types';
import { axiosInstance } from '../../service/api';
import cookies from 'next-cookies';
import { createCustomHeader } from '../../utils/createCustomHeader';

const chatting = ({
  previousChatting,
}: {
  previousChatting: PreviousChattingListResponse;
}) => {
  return <ChattingTemplate previousChatting={previousChatting} />;
};

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
      getCurrentChatRoomAsyncActions.request({
        chattingRoomId: context.params.id as string,
      }),
    );
    store.dispatch(
      getPreviousChattingListActions.request({
        chattingRoomId: context.params.id as string,
        userId: '1',
      }),
    );

    store.dispatch(
      getQuickChattingListActions.request({
        userId: String(context.params.id),
      }),
    );

    store.dispatch(END);
    await store.sagaTask.toPromise();

    return {
      props: {
        previousChatting: store.getState().chattingRoomState.previousChatting,
      },
    };
  },
);

export default chatting;
