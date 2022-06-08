import { AxiosResponse } from 'axios';
import Router from 'next/router';
import { Cookies } from 'react-cookie';
import { call, put, takeLatest } from 'redux-saga/effects';
import { LoginService } from '../../service/api/login/LoginService';
import {
  endLoading,
  getKakaoTokenSuccess,
  getNaverTokenSuccess,
  GET_KAKAO_TOKEN_REQUEST,
  GET_NAVER_TOKEN_REQUEST,
  startLoading,
} from './actions';
import {
  getkakaoTokenRequestAction,
  getNaverTokenRequestAction,
  LoginResponse,
} from './types';

function* KakaoLoginGenerator(action: getkakaoTokenRequestAction) {
  try {
    const cookies = new Cookies();
    yield put(startLoading());

    const response: AxiosResponse<LoginResponse> = yield call(
      LoginService.asyncGetKakaoToken,
      action.payload,
    );
    yield put(getKakaoTokenSuccess(response.data));

    cookies.set('accessToken', response.data.accessToken, {
      path: '/',
    });
    cookies.set('refreshToken', response.data.refreshToken, {
      path: '/',
    });
    cookies.set('userId', response.data.userId, {
      path: '/',
    });
    cookies.set('addr', response.data.addr, {
      path: '/',
    });
    cookies.set('type', response.data.type, {
      path: '/',
    });

    yield put(endLoading());

    yield call(Router.replace, '/');
  } catch (error) {
    console.log(error);
  }
}

function* naverLoginGenerator(action: getNaverTokenRequestAction) {
  try {
    const cookies = new Cookies();

    yield put(startLoading());

    const response: AxiosResponse<LoginResponse> = yield call(
      LoginService.asyncGetNaverToken,
      action.payload,
    );
    yield put(getNaverTokenSuccess(response.data));

    cookies.set('accessToken', response.data.accessToken, {
      path: '/',
    });
    cookies.set('refreshToken', response.data.refreshToken, {
      path: '/',
    });
    cookies.set('userId', response.data.userId, {
      path: '/',
    });
    cookies.set('addr', response.data.addr, {
      path: '/',
    });
    cookies.set('type', response.data.type, {
      path: '/',
    });

    yield put(endLoading());

    yield call(Router.replace, '/');
  } catch (error) {
    console.log(error);
  }
}

export function* loginSaga() {
  yield takeLatest(GET_KAKAO_TOKEN_REQUEST, KakaoLoginGenerator);
  yield takeLatest(GET_NAVER_TOKEN_REQUEST, naverLoginGenerator);
}
