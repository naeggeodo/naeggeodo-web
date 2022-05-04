import { wrapper } from '../../modules';
import { END } from 'redux-saga';

import ChattingTemplate from '../../components/chatting/ChattingTemplate';
import {
  getCurrentChatRoomAsyncActions,
  getPreviousChattingListActions,
} from '../../modules/chatting/actions';
import { PreviousChattingListResponse } from '../../modules/chatting/types';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const chatting = ({}: // previousChatting,
{
  // previousChatting: PreviousChattingListResponse;
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getPreviousChattingListActions.request({
        chattingRoomId: '1',
        userId: '1',
      }),
    );
  }, []);

  return <ChattingTemplate />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    // store.dispatch(
    //   getCurrentChatRoomAsyncActions.request({
    //     chattingRoomId: String(context.params.id),
    //   }),
    // );

    // store.dispatch(
    //   getPreviousChattingListActions.request({
    //     chattingRoomId: String(context.params.id),
    //     userId: '1',
    //   }),
    // );

    store.dispatch(END);
    await store.sagaTask.toPromise();

    return {
      props: {
        // previousChatting: store.getState().chattingRoomState.previousChatting,
      },
    };
  },
);

export default chatting;
