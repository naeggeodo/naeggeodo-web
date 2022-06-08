import { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { MypageService } from '../../service/api/mypage/MypageService';
import {
  getUserInfoInMypageActions,
  GET_USER_INFO_IN_MYPAGE_REQUEST,
} from './actions';
import { MyPageUserInfoResponse } from './types';

function* getUserInfoInMypageGenerator(
  action: ReturnType<typeof getUserInfoInMypageActions.request>,
) {
  const response: AxiosResponse<MyPageUserInfoResponse> = yield call(
    MypageService.asyncGetMypageUserInfo,
    action.payload,
  );
}

export function* getMypageInfoSaga() {
  yield* [
    takeLatest(GET_USER_INFO_IN_MYPAGE_REQUEST, getUserInfoInMypageGenerator),
  ];
}
