import { call, put, takeLatest } from 'redux-saga/effects';
import MainService from '../../service/api/main/MainService';
import {
  getFoodCategoriesActions,
  GET_FOOD_CATEGORIES_REQUEST,
} from './actions';
import { CategoriesResponse } from './types';

function* getFoodCategoriesGenerator(
  action: ReturnType<typeof getFoodCategoriesActions.request>,
) {
  const { data }: { data: CategoriesResponse[] } = yield call(
    MainService.asyncGetCategories,
  );
  yield put(getFoodCategoriesActions.success(data));
}

export function* getFoodCategoriesSaga() {
  yield* [takeLatest(GET_FOOD_CATEGORIES_REQUEST, getFoodCategoriesGenerator)];
}
