import { call, put, takeLatest } from 'redux-saga/effects';
import ChattingService from '../../service/api/chatting/ChattingService';
import {
  getCurrentChatRoomAsyncActions,
  getCurrentChatUserListActions,
  getPreviousChattingListActions,
  getQuickChattingListActions,
  GET_CURRENT_CHATROOM_INFO_REQUEST,
  GET_CURRENT_CHAT_USER_LIST_REQUEST,
  GET_PREVIOUS_CHATTING_LIST_REQUEST,
  GET_QUICK_MESSAGE_LIST_REQUEST,
} from './actions';
import {
  ChattingRoomInfoResponse,
  CurrentChatUserListResponse,
  PreviousChattingListResponse,
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
  action: ReturnType<typeof getPreviousChattingListActions.request>,
) {
  const { data }: { data: PreviousChattingListResponse } = yield call(
    ChattingService.asyncGetPreviousChattingList,
    action.payload.chattingRoomId,
    action.payload.userId,
  );
  yield put(getPreviousChattingListActions.success(data));
}

function* getQuickChattingListGenerator(
  action: ReturnType<typeof getQuickChattingListActions.request>,
) {
  const { data }: { data: QuickChattingListResponse } = yield call(
    ChattingService.asyncGetQuickChattingList,
    action.payload.userId,
  );
  yield put(getQuickChattingListActions.success(data));
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

export function* getChattingRoomInfoSaga() {
  yield* [
    takeLatest(GET_CURRENT_CHATROOM_INFO_REQUEST, getChattingRoomInfoGenerator),
    takeLatest(
      GET_PREVIOUS_CHATTING_LIST_REQUEST,
      getPreviousChattingListGenerator,
    ),
    takeLatest(GET_QUICK_MESSAGE_LIST_REQUEST, getQuickChattingListGenerator),
    takeLatest(
      GET_CURRENT_CHAT_USER_LIST_REQUEST,
      getCurrentChatUserListGenerator,
    ),
  ];
}
