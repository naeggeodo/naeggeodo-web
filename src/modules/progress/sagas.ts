import { call, put, takeLatest } from 'redux-saga/effects';
import { ProgressService } from '../../service/api/progress/ProgressService';
import {
  getProgressingActions,
  GET_PROGRESSING_CHATROOM_REQUEST,
  setProgressingChatRoomTitleActions,
  SET_PROGRESSING_CHATROOM_TITLE_REQUEST,
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

function* setProgressingChatRoomTitleGenerator(
  action: ReturnType<typeof setProgressingChatRoomTitleActions.request>,
) {
  try {
    const { data } = yield call(
      ProgressService.asyncSetProgressingChatRoomTitle,
      action.payload,
    );
    console.log('data', data);
    yield put(setProgressingChatRoomTitleActions.success(data));
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
    takeLatest(
      SET_PROGRESSING_CHATROOM_TITLE_REQUEST,
      setProgressingChatRoomTitleGenerator,
    ),
  ];
}
