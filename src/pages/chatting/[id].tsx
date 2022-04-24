import { RootState, wrapper } from '../../modules';
import { END } from 'redux-saga';

import ChattingTemplate from '../../components/chatting/ChattingTemplate';
import {
  getCurrentChatRoomAsyncActions,
  getPreviousChattingListActions,
} from '../../modules/chatting/actions';
import { PreviousChattingListResponse } from '../../modules/chatting/types';

const chatting = ({
  previousChattingList,
}: {
  previousChattingList: PreviousChattingListResponse | null;
}) => {
  return <ChattingTemplate previousChattingList={previousChattingList} />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const rootState: RootState = store.getState();

    store.dispatch(
      getCurrentChatRoomAsyncActions.request({
        chattingRoomId: Number(context.params.id),
      }),
    );

    store.dispatch(
      getPreviousChattingListActions.request({
        chattingRoomId: Number(context.params.id),
        chattingId: Number(context.params.id),
      }),
    );

    const currentChattingRoomInfo = rootState.chattingRoomState;
    const previousChattingList = rootState.chattingRoomState.previousChatting;

    store.dispatch(END);
    await store.sagaTask.toPromise();

    return {
      props: {
        currentChattingRoomInfo,
        previousChattingList,
      },
    };
  },
);
export default chatting;
