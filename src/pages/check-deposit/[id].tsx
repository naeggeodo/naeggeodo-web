import { END } from 'redux-saga';

import CheckDepositTemplate from '../../components/check-deposit/CheckDepositTemplate';
import { wrapper } from '../../modules';
import { getCurrentChatUserListActions } from '../../modules/chatting/actions';

const checkDeposit = () => <CheckDepositTemplate />;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    store.dispatch(
      getCurrentChatUserListActions.request({
        chattingRoomId: String(context.params.id),
      }),
    );
    store.dispatch(END);
    await store.sagaTask.toPromise();
    return {
      props: {
        currentChatUserList:
          store.getState().chattingRoomState.currentChatUserList,
      },
    };
  },
);

export default checkDeposit;
