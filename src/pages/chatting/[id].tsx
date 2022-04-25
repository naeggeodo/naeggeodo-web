import { wrapper } from '../../modules';
import { END } from 'redux-saga';

import ChattingTemplate from '../../components/chatting/ChattingTemplate';
import {
  getCurrentChatRoomAsyncActions,
  getPreviousChattingListActions,
} from '../../modules/chatting/actions';

const chatting = () => {
  return <ChattingTemplate />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    store.dispatch(
      getCurrentChatRoomAsyncActions.request({
        chattingRoomId: Number(context.params.id),
      }),
    );

    store.dispatch(
      getPreviousChattingListActions.request({
        chattingRoomId: Number(context.params.id),
        userId: 1,
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
