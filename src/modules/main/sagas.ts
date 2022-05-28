import { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import MainService from '../../service/api/main/MainService';
import {
  getAllChatRoomsListRequest,
  getChatRoomListWithCategoryRequest,
  getChatRoomsListSuccess,
  getFoodCategoriesActions,
  GET_ALL_CHAT_ROOMS_LIST_REQUEST,
  GET_CHAT_ROOMS_LIST_WITH_CATEGORY_REQUEST,
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

function* getAllChatRoomsListGenerator(
  action: ReturnType<typeof getAllChatRoomsListRequest>,
) {
  const { buildingCode } = action.payload;
  const response: AxiosResponse<ChatRoomItemResponse[]> = yield call(
    MainService.asyncGetAllChatRooms,
    buildingCode,
  );

  yield put(getChatRoomsListSuccess(response.data));
}

function* getChatRoomsListWithCategoryGenerator(
  action: ReturnType<typeof getChatRoomListWithCategoryRequest>,
) {
  const { buildingCode, category } = action.payload;
  const response: AxiosResponse<ChatRoomItemResponse[]> = yield call(
    MainService.asyncGetChatRoomsWithCategory,
    buildingCode,
    category,
  );

  yield put(getChatRoomsListSuccess(response.data));
}

export function* getMainPageInfoSaga() {
  yield* [
    takeLatest(GET_FOOD_CATEGORIES_REQUEST, getFoodCategoriesGenerator),
    takeLatest(GET_ALL_CHAT_ROOMS_LIST_REQUEST, getAllChatRoomsListGenerator),
    takeLatest(
      GET_CHAT_ROOMS_LIST_WITH_CATEGORY_REQUEST,
      getChatRoomsListWithCategoryGenerator,
    ),
  ];
}
