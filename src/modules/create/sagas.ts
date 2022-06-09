import { call, put, takeLatest } from 'redux-saga/effects';
import { CreateService } from '../../service/api/create/CreateService';
import { createChatRoomActions, CREATE_CHAT_ROOM_REQUEST } from './actions';
import { CreateChatRoomResponse } from './types';

function* createChatRoomGenerator(
  action: ReturnType<typeof createChatRoomActions.request>,
) {
  const { data }: { data: CreateChatRoomResponse } = yield call(
    CreateService.asyncCreateChatRoom,
    action.payload,
  );
  console.log(data);
  yield put(createChatRoomActions.success(data));
}

export function* createChatRoomSaga() {
  yield* [takeLatest(CREATE_CHAT_ROOM_REQUEST, createChatRoomGenerator)];
}
