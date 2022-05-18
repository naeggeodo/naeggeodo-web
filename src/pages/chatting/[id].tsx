import { END } from 'redux-saga';

import { wrapper } from '../../modules';
import ChattingTemplate from '../../components/chatting/ChattingTemplate';
import {
  getCurrentChatRoomAsyncActions,
  getPreviousChattingListActions,
  getQuickChattingListActions,
} from '../../modules/chatting/actions';
import { PreviousChattingListResponse } from '../../modules/chatting/types';
import { useEffect } from 'react';
import axios from 'axios';

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
        chattingRoomId: context.params.id as string,
      }),
    );
    store.dispatch(
      getPreviousChattingListActions.request({
        chattingRoomId: context.params.id as string,
        userId: '2',
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
