import { AxiosResponse } from 'axios';
import { Cookies } from 'react-cookie';
import { call, put, takeLatest } from 'redux-saga/effects';
import { LoginService } from '../../service/api/login/LoginService';
import { isTokenExpired } from '../../utils/isTokenExpired';
import {
  getKakaoTokenSuccess,
  getNaverTokenSuccess,
  GET_KAKAO_TOKEN_REQUEST,
  GET_NAVER_TOKEN_REQUEST,
} from './actions';
import {
  getkakaoTokenRequestAction,
  getNaverTokenRequestAction,
  LoginResponse,
} from './types';

function* KakaoLoginGenerator(action: getkakaoTokenRequestAction) {
  try {
    const cookies = new Cookies();

    const response: AxiosResponse<LoginResponse> = yield call(
      LoginService.asyncGetKakaoToken,
      action.payload,
    );
    yield put(getKakaoTokenSuccess(response.data));

    cookies.set('accessToken', response.data.accessToken, {
      path: '/',
      maxAge: 60 * 60 * 24 * 2,
    });

    cookies.set('buildingCode', response.data.buildingCode, {
      path: '/',
      maxAge: 60 * 60 * 24 * 8,
    });
    cookies.set('user_id', response.data.user_id, {
      path: '/',
      maxAge: 60 * 60 * 24 * 8,
    });
    cookies.set('address', response.data.address, {
      path: '/',
      maxAge: 60 * 60 * 24 * 8,
    });

    window.location.href = '/';
  } catch (error) {
    console.log(error);
  }
}

function* naverLoginGenerator(action: getNaverTokenRequestAction) {
  try {
    const cookies = new Cookies();

    const response: AxiosResponse<LoginResponse> = yield call(
      LoginService.asyncGetNaverToken,
      action.payload,
    );
    console.log(response.headers);

    isTokenExpired(response.data.accessToken);

    yield put(getNaverTokenSuccess(response.data));

    cookies.set('accessToken', response.data.accessToken, {
      path: '/',
      maxAge: 60 * 60 * 24 * 2,
    });

    cookies.set('buildingCode', response.data.buildingCode, {
      path: '/',
      maxAge: 60 * 60 * 24 * 8,
    });
    cookies.set('user_id', response.data.user_id, {
      path: '/',
      maxAge: 60 * 60 * 24 * 8,
    });
    cookies.set('address', response.data.address, {
      path: '/',
      maxAge: 60 * 60 * 24 * 8,
    });
    // window.location.href = '/';
  } catch (error) {
    console.log(error);
  }
}

export function* loginSaga() {
  yield takeLatest(GET_KAKAO_TOKEN_REQUEST, KakaoLoginGenerator);
  yield takeLatest(GET_NAVER_TOKEN_REQUEST, naverLoginGenerator);
}
