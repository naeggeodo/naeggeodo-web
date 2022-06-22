import { call, put, takeLatest } from 'redux-saga/effects';
import QuickChatService from '../../service/api/quick-chat/QuickChatService';
import {
  getQuickChattingListActions,
  GET_QUICK_MESSAGE_LIST_REQUEST,
  patchQuickChattingListActions,
  PATCH_QUICK_CHAT_LIST_REQUEST,
} from './actions';
import { QuickChattingListResponse } from './types';

function* getQuickChattingListGenerator(
  action: ReturnType<typeof getQuickChattingListActions.request>,
) {
  try {
    const { data }: { data: QuickChattingListResponse } = yield call(
      QuickChatService.asyncGetQuickChattingList,
      action.payload.userId,
    );
    yield put(getQuickChattingListActions.success(data));
  } catch (error) {
    console.log(error);
  }
}

function* patchQuickChattingListGenerator(
  action: ReturnType<typeof patchQuickChattingListActions.request>,
) {
  try {
    const { data } = yield call(
      QuickChatService.asyncPatchQuickChattingList,
      action.payload,
    );
    yield put(patchQuickChattingListActions.success(data));
  } catch (error) {
    console.log(error);
  }
}

export function* quickChatSaga() {
  yield* [
    takeLatest(GET_QUICK_MESSAGE_LIST_REQUEST, getQuickChattingListGenerator),
    takeLatest(PATCH_QUICK_CHAT_LIST_REQUEST, patchQuickChattingListGenerator),
  ];
}
