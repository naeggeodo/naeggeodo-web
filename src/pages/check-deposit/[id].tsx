import { END } from 'redux-saga';

import CheckDepositTemplate from '../../components/check-deposit/CheckDepositTemplate';
import { RootState, wrapper } from '../../modules';
import {
  getCurrentChatRoomAsyncActions,
  getCurrentChatUserListActions,
} from '../../modules/chatting/actions';
import { saveCookies } from '../../utils/saveCookies';

const checkDeposit = () => <CheckDepositTemplate />;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    saveCookies(store, context);

    const rootState: RootState = store.getState();
    const master_id = rootState.chattingRoomState.chatRoomInfo.user_id;
    const user_id = rootState.loginState.user_id;

    if (master_id !== user_id) {
      return {
        props: {},
        redirect: {
          permanent: false,
          destination: '/chat-rooms',
        },
      };
    }

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
