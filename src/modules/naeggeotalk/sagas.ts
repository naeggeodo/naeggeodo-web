import { call, put, takeLatest } from 'redux-saga/effects';

import NaeggeotalkService from '../../service/api/naeggeotalk/NaeggeotalkService';
import {
  setNaeggeotalkItemBookmarkActions,
  SET_NAEGGEOTALK_ITEM_BOOKMARK_REQUEST,
} from './actions';
import { NaeggeotalkListResponse } from './types';

function* setNaeggeotalkItemBookmarkGenerator(
  action: ReturnType<typeof setNaeggeotalkItemBookmarkActions.request>,
) {
  yield call(
    NaeggeotalkService.asyncSetNaeggeotalkItemBookmark,
    action.payload.chatMainId,
    action.payload.userId,
  );
  yield put(setNaeggeotalkItemBookmarkActions.success());
}

export function* getNaeggeotalkSaga() {
  yield* [
    takeLatest(
      SET_NAEGGEOTALK_ITEM_BOOKMARK_REQUEST,
      setNaeggeotalkItemBookmarkGenerator,
    ),
  ];
}
