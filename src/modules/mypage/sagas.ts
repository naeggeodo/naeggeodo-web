import { AxiosResponse } from 'axios';
import { call, delay, put, select, take, takeLatest } from 'redux-saga/effects';
import { RootState } from '..';
import { MypageService } from '../../service/api/mypage/MypageService';
import {
  closeReportConfirmModalActions,
  CLOSE_REPORT_CONFIRM_MODAL_REQUEST,
  getUserInfoInMypageRequest,
  getUserInfoInMypageSuccess,
  GET_USER_INFO_IN_MYPAGE_REQUEST,
  patchNickNameActions,
  PATCH_NICK_NAME_REQUEST,
  setModalAnimationStart,
  setReportConfirmModal,
  setReportModal,
  submitReportActions,
  SUBMIT_REPORT_REQUEST,
} from './actions';
import { ChangeNickNameResponse, MyPageUserInfoResponse } from './types';

function* getUserInfoInMypageGenerator(
  action: ReturnType<typeof getUserInfoInMypageRequest>,
) {
  try {
    const response: AxiosResponse<MyPageUserInfoResponse> = yield call(
      MypageService.asyncGetMypageUserInfo,
      action.payload,
    );
    yield put(getUserInfoInMypageSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}

function* submitReportGenerator(
  action: ReturnType<typeof submitReportActions.request>,
) {
  try {
    yield call(MypageService.asyncSubmitReport, action.payload);
    yield put(submitReportActions.success(action.payload));
    yield put(setReportModal(''));
    yield put(setReportConfirmModal('alert'));
    yield delay(1000);
    yield put(setModalAnimationStart(true));
    yield delay(500);
    yield put(setReportConfirmModal(''));
    yield put(setModalAnimationStart(false));
  } catch (error) {
    console.log(error);
  }
}

function* closeReportConfirmModalGenerator() {
  try {
    yield put(setModalAnimationStart(true));
    yield delay(1000);
    yield put(setReportConfirmModal(''));
    yield put(setModalAnimationStart(false));
  } catch (error) {
    console.log(error);
  }
}

function* changeNickNameGenerator(
  action: ReturnType<typeof patchNickNameActions.request>,
) {
  try {
    const response: AxiosResponse<ChangeNickNameResponse> = yield call(
      MypageService.asyncPatchNickName,
      action.payload.user_id,
      action.payload.nickname,
    );
    yield put(patchNickNameActions.success(response.data));
  } catch (error) {
    console.log(error);
  }
}

export function* getMypageInfoSaga() {
  yield takeLatest(
    GET_USER_INFO_IN_MYPAGE_REQUEST,
    getUserInfoInMypageGenerator,
  );
  yield takeLatest(SUBMIT_REPORT_REQUEST, submitReportGenerator);
  yield takeLatest(
    CLOSE_REPORT_CONFIRM_MODAL_REQUEST,
    closeReportConfirmModalGenerator,
  );
  yield takeLatest(PATCH_NICK_NAME_REQUEST, changeNickNameGenerator);
}
