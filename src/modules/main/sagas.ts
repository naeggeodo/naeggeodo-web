import { call, put, takeLatest } from 'redux-saga/effects';
import MainService from '../../service/api/main/MainService';
import {
  getChatRoomsListActions,
  getFoodCategoriesActions,
  GET_CHAT_ROOMS_LIST_REQUEST,
  GET_FOOD_CATEGORIES_REQUEST,
} from './actions';
import { CategoriesResponse, ChatRoomItemResponse } from './types';

function* getFoodCategoriesGenerator(
  action: ReturnType<typeof getFoodCategoriesActions.request>,
) {
  const { data }: { data: CategoriesResponse[] } = yield call(
    MainService.asyncGetCategories,
  );
  yield put(getFoodCategoriesActions.success(data));
}

function* getChatRoomsListGenerator(
  actions: ReturnType<typeof getChatRoomsListActions.request>,
) {
  const { data } = yield call(MainService.asyncGetChatRooms);
  console.log(data, 'eddy');
  yield put(getChatRoomsListActions.success(data));
}

export function* getMainPageInfoSaga() {
  yield* [
    takeLatest(GET_FOOD_CATEGORIES_REQUEST, getFoodCategoriesGenerator),
    takeLatest(GET_CHAT_ROOMS_LIST_REQUEST, getChatRoomsListGenerator),
  ];
}
