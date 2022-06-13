import { call, put, takeLatest } from 'redux-saga/effects';
import { CreateService } from '../../service/api/create/CreateService';
import { openCompleteModal, openCopyCompleteModal } from '../modal/actions';
import {
  copyPrevChatRoomDataActions,
  COPY_PREV_CHATROOM_DATA_REQUEST,
  createChatRoomActions,
  CREATE_CHAT_ROOM_REQUEST,
  getPrevCreatedListActions,
  GET_PREV_CREATED_LIST_REQUEST,
  initializeCreateStates,
  patchPrevChatRoomBookMarkActions,
  PATCH_PREV_CHATROOM_BOOKMARK_REQUEST,
} from './actions';
import { CreateChatRoomResponse, PrevCreatedListResponses } from './types';

function* createChatRoomGenerator(
  action: ReturnType<typeof createChatRoomActions.request>,
) {
  try {
    const { data }: { data: CreateChatRoomResponse } = yield call(
      CreateService.asyncCreateChatRoom,
      action.payload,
    );
    yield put(createChatRoomActions.success(data));
    yield put(openCompleteModal());
    yield put(initializeCreateStates());
  } catch (error) {
    console.log(error);
  }
}

function* getPrevCreatedListGenerator(
  action: ReturnType<typeof getPrevCreatedListActions.request>,
) {
  try {
    const { data }: { data: PrevCreatedListResponses } = yield call(
      CreateService.asyncGetPrevCreatedList,
      action.payload,
    );
    yield put(getPrevCreatedListActions.success(data));
  } catch (error) {
    console.log(error);
  }
}

// ** 이전내역 복사 기능
function* copyPrevChatRoomDataGenerator(
  action: ReturnType<typeof copyPrevChatRoomDataActions.request>,
) {
  try {
    const { data } = yield call(
      CreateService.asyncCopyPrevCreatedData,
      action.payload.id,
      action.payload.orderTimeType,
    );
    yield put(copyPrevChatRoomDataActions.success(data.chatMain_id));
    yield put(openCopyCompleteModal());
  } catch (error) {
    console.log(error);
  }
}

// ** bookmark 기능
function* patchPrevChatRoomBookMarkGenerator(
  action: ReturnType<typeof patchPrevChatRoomBookMarkActions.request>,
) {
  const { data }: { data: { bookmarks: 'Y' | 'N'; chatMain_id: number } } =
    yield call(
      CreateService.asyncPatchPrevChatRoomBookmark,
      action.payload.chatMainId,
      action.payload.userId,
    );
  yield put(patchPrevChatRoomBookMarkActions.success(data));
}

export function* createChatRoomSaga() {
  yield* [
    takeLatest(CREATE_CHAT_ROOM_REQUEST, createChatRoomGenerator),
    takeLatest(GET_PREV_CREATED_LIST_REQUEST, getPrevCreatedListGenerator),
    takeLatest(COPY_PREV_CHATROOM_DATA_REQUEST, copyPrevChatRoomDataGenerator),
    takeLatest(
      PATCH_PREV_CHATROOM_BOOKMARK_REQUEST,
      patchPrevChatRoomBookMarkGenerator,
    ),
  ];
}
