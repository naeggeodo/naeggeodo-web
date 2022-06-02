import { call, put, takeLatest } from 'redux-saga/effects';
import SearchService from '../../service/api/search/SearchService';
import {
  getResultByInputActions,
  getResultByTagActions,
  getSearchTagListActions,
  GET_RESULT_BY_INPUT_REQUEST,
  GET_RESULT_BY_TAG_REQUEST,
  GET_SEARCH_TAG_LIST_REQUEST,
  selectSearchTag,
} from './actions';
import { SearchResultListResponse } from './types';

function* getSearchTagListGenerator() {
  const { data } = yield call(SearchService.asyncGetSearchTags);
  yield put(getSearchTagListActions.success(data));
}

function* getResultByTagGenerator(
  action: ReturnType<typeof getResultByTagActions.request>,
) {
  yield put(selectSearchTag(action.payload));

  const { data }: { data: SearchResultListResponse } = yield call(
    SearchService.asyncGetSearchResultByTag,
    action.payload,
  );

  yield put(getResultByTagActions.success(data));
}

function* getResultByInputGenerator(
  action: ReturnType<typeof getResultByTagActions.request>,
) {
  const { data } = yield call(
    SearchService.asyncGetSearchResultByInput,
    action.payload,
  );
  yield put(getResultByInputActions.success(data));
}

export function* getSearchPageInfoSaga() {
  yield* [takeLatest(GET_SEARCH_TAG_LIST_REQUEST, getSearchTagListGenerator)];
  yield* [takeLatest(GET_RESULT_BY_TAG_REQUEST, getResultByTagGenerator)];
  yield* [takeLatest(GET_RESULT_BY_INPUT_REQUEST, getResultByInputGenerator)];
}
