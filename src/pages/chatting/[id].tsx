import axios from 'axios';
import { END } from 'redux-saga';
import { ChatHistoryListType } from '../../../types/dataTypes';
import ChattingTemplate from '../../components/chatting/ChattingTemplate';
import { wrapper } from '../../modules';
import { setCurrentChatRoom } from '../../modules/chatting';
const chatting = ({ chatList }: { chatList: ChatHistoryListType | null }) => {
  return <ChattingTemplate chatList={chatList} />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const response = await axios.get(
      `http://15.165.248.39:9090/chat/rooms/${context.params.id}`,
    );
    const data = await response.data;
    const chatListResponse = await axios.get(
      `http://15.165.248.39:9090/chat/messages/${context.params.id}/1`,
    );
    const chatListData = await chatListResponse.data;
    store.dispatch(setCurrentChatRoom(data));
    store.dispatch(END);
    await store.sagaTask.toPromise();
    return {
      props: {
        chat: data,
        chatList: chatListData,
      },
    };
  },
);
export default chatting;
