import cookies from "next-cookies";
import { END } from "redux-saga";

import CheckDepositTemplate from "../../components/check-deposit/CheckDepositTemplate";
import { RootState, wrapper } from "../../modules";
import {
  getCurrentChatRoomAsyncActions,
  getCurrentChatUserListActions,
} from "../../modules/chatting/actions";
import { axiosInstance } from "../../service/api";
import { createCustomHeader } from "../../utils/createCustomHeader";
import { removeCookiesServerside } from "../../utils/removeCookiesServerside";
import { saveCookies } from "../../utils/saveCookies";

const checkDeposit = () => <CheckDepositTemplate />;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    saveCookies(store, context);

    const rootState: RootState = store.getState();

    const allCookies = cookies(context);
    const accessToken = allCookies.accessToken;
    removeCookiesServerside(context);
    if (!accessToken) {
      return {
        redirect: {
          permanent: false,
          destination: "/login",
        },
      };
    }
    axiosInstance.interceptors.request.use(
      async function (config) {
        try {
          config.headers = createCustomHeader(accessToken);
          return config;
        } catch (error) {
          console.log(error);
        }
      },
      function (error) {
        return Promise.reject(error);
      }
    );

    store.dispatch(
      getCurrentChatUserListActions.request({
        chattingRoomId: String(context.params.id),
      })
    );

    store.dispatch(
      getCurrentChatRoomAsyncActions.request({
        chattingRoomId: context.params.id as string,
      })
    );

    store.dispatch(END);

    await store.sagaTask.toPromise();

    const master_id = store.getState().chattingRoomState.chatRoomInfo.user_id;
    const user_id = store.getState().loginState.user_id;

    if (master_id !== user_id) {
      return {
        props: {
          chatRoomInfo: store.getState().chattingRoomState.chatRoomInfo,
        },
        redirect: {
          permanent: false,
          destination: "/chat-rooms",
        },
      };
    }

    if (master_id)
      return {
        props: {
          chatRoomInfo: store.getState().chattingRoomState.chatRoomInfo,
        },
      };
  }
);

export default checkDeposit;
