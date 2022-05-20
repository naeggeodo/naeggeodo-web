import { call, put, takeLatest } from 'redux-saga/effects';
import SearchService from '../../service/api/search/SearchService';
import {
  getSearchTagListActions,
  GET_SEARCH_TAG_LIST_REQUEST,
} from './actions';

function* getSearchTagListGenerator() {
  const { data } = yield call(SearchService.asyncGetSearchTags);
  yield put(getSearchTagListActions.success(data));
}

export function* getSearchPageInfoSaga() {
  yield* [takeLatest(GET_SEARCH_TAG_LIST_REQUEST, getSearchTagListGenerator)];
}
