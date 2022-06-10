import { END } from 'redux-saga';

import CheckDepositTemplate from '../../components/check-deposit/CheckDepositTemplate';
import { wrapper } from '../../modules';
import {
  getCurrentChatRoomAsyncActions,
  getCurrentChatUserListActions,
} from '../../modules/chatting/actions';
import { saveCookies } from '../../utils/saveCookies';

const checkDeposit = () => <CheckDepositTemplate />;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    saveCookies(store, context);

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
