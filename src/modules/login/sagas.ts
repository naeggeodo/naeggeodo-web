import { AxiosResponse } from 'axios';
import Router from 'next/router';
import { call, put, takeLatest } from 'redux-saga/effects';
import { TOKEN_NAME } from '../../constant/Login';
import { LoginService } from '../../service/api/login/LoginService';
import {
  endLoading,
  getKakaoTokenSuccess,
  GET_KAKAO_TOKEN_REQUEST,
  startLoading,
} from './actions';
import { getkakaoTokenRequestAction, KakaoLoginResponse } from './types';

function* KakaoLoginGenerator(action: getkakaoTokenRequestAction) {
  try {
    yield put(startLoading());

    const response: AxiosResponse<KakaoLoginResponse> = yield call(
      LoginService.asyncGetKakaoToken,
      action.payload,
    );
    yield console.log(response);

    localStorage.setItem(TOKEN_NAME.ACCESS_TOKEN, response.data.accessToken);
    localStorage.setItem(TOKEN_NAME.REFRESH_TOKEN, response.data.refreshToken);
    localStorage.setItem('user', JSON.stringify(response.data.user));

    yield put(getKakaoTokenSuccess(response.data));
    yield put(endLoading());

    yield call(Router.push, '/');
  } catch (error) {
    console.log(error);
  }
}

export function* kakaoLoginSaga() {
  yield takeLatest(GET_KAKAO_TOKEN_REQUEST, KakaoLoginGenerator);
}
