import { AxiosResponse } from 'axios';
import { call, delay, put, takeLatest } from 'redux-saga/effects';
import { MypageService } from '../../service/api/mypage/MypageService';
import {
  getUserInfoInMypageRequest,
  getUserInfoInMypageSuccess,
  GET_USER_INFO_IN_MYPAGE_REQUEST,
  setReportConfirmModal,
  setReportModal,
  submitReportActions,
  SUBMIT_REPORT_REQUEST,
} from './actions';
import { MyPageUserInfoResponse } from './types';

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
    yield delay(1500);
    yield put(setReportConfirmModal(''));
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
}
