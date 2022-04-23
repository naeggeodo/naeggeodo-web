import { RootState, wrapper } from '../../modules';
import { END } from 'redux-saga';

import {
  ChatHistoryListType,
  ChattingRoomInfoResponsePayload,
} from '../../modules/chatting/types';
import ChattingTemplate from '../../components/chatting/ChattingTemplate';
import { getCurrentChatRoomAsyncActions } from '../../modules/chatting/actions';

const chatting = ({
  chatList,
  currentChattingRoomInfo,
}: {
  chatList: ChatHistoryListType | null;
  currentChattingRoomInfo: ChattingRoomInfoResponsePayload;
}) => {
  return <ChattingTemplate chatList={chatList} />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const rootState: RootState = store.getState();

    store.dispatch(
      getCurrentChatRoomAsyncActions.request({
        chattingRoomId: Number(context.params.id),
      }),
    );

    // const chatListResponse = await axios.get(
    //   `http://15.165.248.39:9090/chat/messages/${context.params.id}/1`,
    // );
    // const chatListData = await chatListResponse.data;

    const currentChattingRoomInfo = rootState.chattingRoomState;

    store.dispatch(END);
    await store.sagaTask.toPromise();

    return {
      props: {
        currentChattingRoomInfo,
        chatList: 123,
      },
    };
  },
);
export default chatting;
