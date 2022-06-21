import { AxiosResponse } from 'axios';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import MainService from '../../service/api/main/MainService';
import { CategoriesResponse, ChatRoomItemResponse } from '../common/types';
import {
  getAllChatRoomsListRequest,
  getChatRoomListWithCategoryRequest,
  getChatRoomsListSuccess,
  getFoodCategoriesActions,
  getLikesCountActions,
  GET_ALL_CHAT_ROOMS_LIST_REQUEST,
  GET_CHAT_ROOMS_LIST_WITH_CATEGORY_REQUEST,
  GET_FOOD_CATEGORIES_REQUEST,
  GET_LIKES_COUNT_REQUEST,
} from './actions';

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

// ? 좋아요 갯수 불러오기
function* getLikesCountGenerator(
  action: ReturnType<typeof getLikesCountActions.request>,
) {
  const { data } = yield call(MainService.asyncGetLikesCount);
  console.log(data, 'heelo');

  yield put(getLikesCountActions.success(data));
}

export function* getMainPageInfoSaga() {
  yield* [
    takeLatest(GET_FOOD_CATEGORIES_REQUEST, getFoodCategoriesGenerator),
    takeLatest(GET_ALL_CHAT_ROOMS_LIST_REQUEST, getAllChatRoomsListGenerator),
    takeLatest(
      GET_CHAT_ROOMS_LIST_WITH_CATEGORY_REQUEST,
      getChatRoomsListWithCategoryGenerator,
    ),
    takeEvery(GET_LIKES_COUNT_REQUEST, getLikesCountGenerator),
  ];
}
