import { END } from 'redux-saga';

import { RootState, wrapper } from '../../modules';
import ChattingTemplate from '../../components/chatting/ChattingTemplate';
import {
  getChattingListActions,
  getCurrentChatRoomAsyncActions,
} from '../../modules/chatting/actions';
import { saveCookies } from '../../utils/saveCookies';
import { ChattingListResponse } from '../../modules/chatting/types';

const chatting = ({
  previousChatting,
}: {
  previousChatting: ChattingListResponse;
}) => {
  console.log(previousChatting, 'eeee');
  return <ChattingTemplate previousChatting={previousChatting} />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    saveCookies(store, context);

    const rootState: RootState = store.getState();
    const user_id = rootState.loginState.user_id;

    store.dispatch(
      getCurrentChatRoomAsyncActions.request({
        chattingRoomId: context.params.id as string,
      }),
    );
    store.dispatch(
      getChattingListActions.request({
        chattingRoomId: context.params.id as string,
        userId: user_id,
      }),
    );

    // store.dispatch(
    //   getQuickChattingListActions.request({
    //     userId: String(context.params.id),
    //   }),
    // );

    store.dispatch(END);
    await store.sagaTask.toPromise();

    return {
      props: {
        previousChatting: store.getState().chattingRoomState.chattingList,
      },
    };
  },
);

export default chatting;
