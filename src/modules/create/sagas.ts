import { call, put, takeLatest } from 'redux-saga/effects';
import { CreateService } from '../../service/api/create/CreateService';
import { openCompleteModal } from '../modal/actions';
import {
  createChatRoomActions,
  CREATE_CHAT_ROOM_REQUEST,
  initializeCreateStates,
} from './actions';
import { CreateChatRoomResponse } from './types';

function* createChatRoomGenerator(
  action: ReturnType<typeof createChatRoomActions.request>,
) {
  try {
    const { data }: { data: CreateChatRoomResponse } = yield call(
      CreateService.asyncCreateChatRoom,
      action.payload,
    );
    yield put(createChatRoomActions.success(data));
    yield put(openCompleteModal());
    yield put(initializeCreateStates());
  } catch (error) {
    console.log(error);
  }
}

export function* createChatRoomSaga() {
  yield* [takeLatest(CREATE_CHAT_ROOM_REQUEST, createChatRoomGenerator)];
}
