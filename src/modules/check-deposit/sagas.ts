import { call, put, takeLatest } from 'redux-saga/effects';
import ChattingService from '../../service/api/chatting/ChattingService';
import CheckDepositService from '../../service/api/check-deposit/CheckDepositService';
import { getCurrentChatUserListActions } from '../chatting/actions';
import { CurrentChatUserListResponse } from '../chatting/types';
import { setCheckDepositActions, SET_CHECK_DEPOSIT_REQUEST } from './actions';

function* setCheckDepositGenerator(
  action: ReturnType<typeof setCheckDepositActions.request>,
) {
  yield call(
    CheckDepositService.asyncDepositHandler,
    action.payload.chattingRoomId,
    action.payload.userId,
  );
  const { data }: { data: CurrentChatUserListResponse } = yield call(
    ChattingService.asyncGetCurrentChatUserList,
    action.payload.chattingRoomId,
  );
  yield put(setCheckDepositActions.success('Y'));
  yield put(getCurrentChatUserListActions.success(data));
}

export function* getCheckDepositPageInfoSaga() {
  yield* [takeLatest(SET_CHECK_DEPOSIT_REQUEST, setCheckDepositGenerator)];
}
