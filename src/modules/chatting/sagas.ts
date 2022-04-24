import { call, put, takeLatest } from 'redux-saga/effects';
import ChattingService from '../../service/api/chatting/ChattingService';
import {
  getCurrentChatRoomAsyncActions,
  GET_CURRENT_CHATROOM_INFO_REQUEST,
} from './actions';
import { ChattingRoomInfoResponsePayload } from './types';

function* getChattingRoomInfoGenerator(
  action: ReturnType<typeof getCurrentChatRoomAsyncActions.request>,
) {
  const { data }: { data: ChattingRoomInfoResponsePayload } = yield call(
    ChattingService.asyncGetChattingRoomInfo,
    action.payload.chattingRoomId,
  );

  yield put(getCurrentChatRoomAsyncActions.success(data));
}

export function* getChattingRoomInfoSaga() {
  yield takeLatest(
    GET_CURRENT_CHATROOM_INFO_REQUEST,
    getChattingRoomInfoGenerator,
  );
}
