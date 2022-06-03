import { call, put, takeLatest } from 'redux-saga/effects';

import NaeggeotalkService from '../../service/api/naeggeotalk/NaeggeotalkService';
import {
  getNaeggeotalkListActions,
  GET_NAEGGEOTALK_LIST_REQUEST,
  setNaeggeotalkItemBookmarkActions,
  SET_NAEGGEOTALK_ITEM_BOOKMARK_REQUEST,
} from './actions';
import { NaeggeotalkListResponse } from './types';

function* getNaeggeotalkListGenerator(
  action: ReturnType<typeof getNaeggeotalkListActions.request>,
) {
  const { data }: { data: NaeggeotalkListResponse } = yield call(
    NaeggeotalkService.asyncGetNaeggeotalkList,
    action.payload,
  );
  yield put(getNaeggeotalkListActions.success(data));
}

function* setNaeggeotalkItemBookmarkGenerator(
  action: ReturnType<typeof setNaeggeotalkItemBookmarkActions.request>,
) {
  yield call(
    NaeggeotalkService.asyncSetNaeggeotalkItemBookmark,
    action.payload.chatMainId,
    action.payload.userId,
  );

  const { data }: { data: NaeggeotalkListResponse } = yield call(
    NaeggeotalkService.asyncGetNaeggeotalkList,
    action.payload.userId,
  );
  yield put(getNaeggeotalkListActions.success(data));
}

export function* getNaeggeotalkSaga() {
  yield* [
    takeLatest(GET_NAEGGEOTALK_LIST_REQUEST, getNaeggeotalkListGenerator),
    takeLatest(
      SET_NAEGGEOTALK_ITEM_BOOKMARK_REQUEST,
      setNaeggeotalkItemBookmarkGenerator,
    ),
  ];
}
