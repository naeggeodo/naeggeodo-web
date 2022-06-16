import { call, put, takeLatest } from 'redux-saga/effects';
import ChattingService from '../../service/api/chatting/ChattingService';
import {
  getChattingListActions,
  getCurrentChatRoomAsyncActions,
  getCurrentChatUserListActions,
  getQuickChattingListActions,
  getUserNicknameActions,
  GET_CHATTING_LIST_REQUEST,
  GET_CURRENT_CHATROOM_INFO_REQUEST,
  GET_CURRENT_CHAT_USER_LIST_REQUEST,
  GET_QUICK_MESSAGE_LIST_REQUEST,
  GET_USER_NICKNAME_REQUEST,
} from './actions';
import {
  ChattingListResponse,
  ChattingRoomInfoResponse,
  CurrentChatUserListResponse,
  QuickChattingListResponse,
} from './types';

function* getChattingRoomInfoGenerator(
  action: ReturnType<typeof getCurrentChatRoomAsyncActions.request>,
) {
  const { data }: { data: ChattingRoomInfoResponse } = yield call(
    ChattingService.asyncGetChattingRoomInfo,
    action.payload.chattingRoomId,
  );
  yield put(getCurrentChatRoomAsyncActions.success(data));
}

function* getPreviousChattingListGenerator(
  action: ReturnType<typeof getChattingListActions.request>,
) {
  const { data }: { data: ChattingListResponse } = yield call(
    ChattingService.asyncGetPreviousChattingList,
    action.payload.chattingRoomId,
    action.payload.userId,
  );
  yield put(getChattingListActions.success(data));
}

function* getQuickChattingListGenerator(
  action: ReturnType<typeof getQuickChattingListActions.request>,
) {
  try {
    const { data }: { data: QuickChattingListResponse } = yield call(
      ChattingService.asyncGetQuickChattingList,
      action.payload.userId,
    );
    console.log(data, 'jayden');
    yield put(getQuickChattingListActions.success(data));
  } catch (error) {
    console.log(error);
  }
}

export function* getCurrentChatUserListGenerator(
  action: ReturnType<typeof getCurrentChatUserListActions.request>,
) {
  const { data }: { data: CurrentChatUserListResponse } = yield call(
    ChattingService.asyncGetCurrentChatUserList,
    action.payload.chattingRoomId,
  );
  yield put(getCurrentChatUserListActions.success(data));
}

export function* getUserNicknameGenerator(
  action: ReturnType<typeof getUserNicknameActions.request>,
) {
  const { data }: { data: any } = yield call(
    ChattingService.asyncGetUserNickname,
    action.payload,
  );
  yield put(getUserNicknameActions.success(data.nickname));
}

export function* getChattingRoomInfoSaga() {
  yield* [
    takeLatest(GET_CURRENT_CHATROOM_INFO_REQUEST, getChattingRoomInfoGenerator),
    takeLatest(GET_CHATTING_LIST_REQUEST, getPreviousChattingListGenerator),
    takeLatest(GET_QUICK_MESSAGE_LIST_REQUEST, getQuickChattingListGenerator),
    takeLatest(
      GET_CURRENT_CHAT_USER_LIST_REQUEST,
      getCurrentChatUserListGenerator,
    ),
    takeLatest(GET_USER_NICKNAME_REQUEST, getUserNicknameGenerator),
  ];
}
