import { call, put, takeLatest } from 'redux-saga/effects';
import { ProgressService } from '../../service/api/progress/ProgressService';
import {
  getProgressingActions,
  GET_PROGRESSING_CHATROOM_REQUEST,
} from './actions';

function* getProgressingChatRoomGenerator(
  action: ReturnType<typeof getProgressingActions.request>,
) {
  try {
    const { data } = yield call(
      ProgressService.asyncGetMypageUserInfo,
      action.payload,
    );

    yield put(getProgressingActions.success(data));
  } catch (error) {
    console.log(error);
  }
}

export function* progressingChatRoomSaga() {
  yield* [
    takeLatest(
      GET_PROGRESSING_CHATROOM_REQUEST,
      getProgressingChatRoomGenerator,
    ),
  ];
}
