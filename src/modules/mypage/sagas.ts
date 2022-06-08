import { AxiosResponse } from 'axios';
import { Cookies } from 'react-cookie';
import { call, put, takeLatest } from 'redux-saga/effects';
import { MypageService } from '../../service/api/mypage/MypageService';
import {
  getUserInfoInMypageRequest,
  getUserInfoInMypageSuccess,
  GET_USER_INFO_IN_MYPAGE_REQUEST,
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

export function* getMypageInfoSaga() {
  yield takeLatest(
    GET_USER_INFO_IN_MYPAGE_REQUEST,
    getUserInfoInMypageGenerator,
  );
}
