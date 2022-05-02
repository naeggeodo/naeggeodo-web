import { wrapper } from '../../modules';
import { END } from 'redux-saga';

import ChattingTemplate from '../../components/chatting/ChattingTemplate';
import {
  getCurrentChatRoomAsyncActions,
  getPreviousChattingListActions,
} from '../../modules/chatting/actions';
import { PreviousChattingListResponse } from '../../modules/chatting/types';

const chatting = ({
  previousChatting,
}: {
  previousChatting: PreviousChattingListResponse;
}) => {
  return <ChattingTemplate previousChatting={previousChatting} />;
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
      props: {
        previousChatting: store.getState().chattingRoomState.previousChatting,
      },
    };
  },
);
export default chatting;
