import Router from "next/router";
import { call, delay, put, takeLatest } from "redux-saga/effects";
import { CreateService } from "../../service/api/create/CreateService";
import { closeCompleteModal, openCompleteModal } from "../modal/actions";
import {
  copyPrevChatRoomDataActions,
  COPY_PREV_CHATROOM_DATA_REQUEST,
  createChatRoomActions,
  CREATE_CHAT_ROOM_REQUEST,
  deletePrevChatRoomActions,
  DELETE_PREV_CREATED_CHATROOM_REQUEST,
  getPrevCreatedListActions,
  GET_PREV_CREATED_LIST_REQUEST,
  initializeCreateStates,
  patchPrevChatRoomBookMarkActions,
  PATCH_PREV_CHATROOM_BOOKMARK_REQUEST,
} from "./actions";
import { CreateChatRoomResponse, PrevCreatedListResponses } from "./types";

// ** 정보 입력해서 생성하는 기능
function* createChatRoomGenerator(
  action: ReturnType<typeof createChatRoomActions.request>
) {
  try {
    const { data }: { data: CreateChatRoomResponse } = yield call(
      CreateService.asyncCreateChatRoom,
      action.payload
    );
    yield put(createChatRoomActions.success(data));

    yield put(openCompleteModal());
    yield delay(2000);
    put(closeCompleteModal());

    yield put(initializeCreateStates());
    // yield call(Router.push, `/chatting/${data.chatMain_id}`);
  } catch (error) {
    console.log(error);
  }
}

// ** 이전 생성 내용 불러오기 api SSR
function* getPrevCreatedListGenerator(
  action: ReturnType<typeof getPrevCreatedListActions.request>
) {
  try {
    const { data }: { data: PrevCreatedListResponses } = yield call(
      CreateService.asyncGetPrevCreatedList,
      action.payload
    );
    yield put(getPrevCreatedListActions.success(data));
  } catch (error) {
    console.log(error);
  }
}

// ** 이전내역 복사 기능
function* copyPrevChatRoomDataGenerator(
  action: ReturnType<typeof copyPrevChatRoomDataActions.request>
) {
  try {
    const { data } = yield call(
      CreateService.asyncCopyPrevCreatedData,
      action.payload.id,
      action.payload.orderTimeType
    );
    yield put(copyPrevChatRoomDataActions.success(data.chatMain_id));

    yield put(openCompleteModal());
    yield delay(2000);
    put(closeCompleteModal());

    yield call(Router.push, `/chatting/${data.chatMain_id}`);
  } catch (error) {
    console.log(error);
  }
}

// ** 이전내역 아이템 삭제
function* deletePrevChatRoomGenerator(
  action: ReturnType<typeof deletePrevChatRoomActions.request>
) {
  try {
    yield call(
      CreateService.asyncDeletePrevCreatedChatRoom,
      action.payload.chatMainId
    );
    const { data }: { data: PrevCreatedListResponses } = yield call(
      CreateService.asyncCsrGetPrevCreatedList,
      action.payload.userId
    );
    yield put(getPrevCreatedListActions.success(data));

    //TODO 다시 이전생성내역 불러오기
  } catch (error) {
    console.log(error);
  }
}

// ** bookmark 기능
function* patchPrevChatRoomBookMarkGenerator(
  action: ReturnType<typeof patchPrevChatRoomBookMarkActions.request>
) {
  const { data }: { data: { bookmarks: "Y" | "N"; chatMain_id: number } } =
    yield call(
      CreateService.asyncPatchPrevChatRoomBookmark,
      action.payload.chatMainId,
      action.payload.userId
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
      patchPrevChatRoomBookMarkGenerator
    ),
    takeLatest(
      DELETE_PREV_CREATED_CHATROOM_REQUEST,
      deletePrevChatRoomGenerator
    ),
  ];
}
