import { AxiosResponse } from 'axios';
import Router from 'next/router';
import { Cookies } from 'react-cookie';
import { call, put, takeLatest } from 'redux-saga/effects';
import { TOKEN_NAME } from '../../constant/Login';
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
    const response = {
      data: {
        accessToken: '021093u01ulkjasdlkaj',
        addr: '서울기 강동구 강일동',
        refreshToken: '10923091uiojdojd',
        type: 'Bearer',
        userId: '간지개발자',
      },
    };

    // const response: AxiosResponse<LoginResponse> = yield call(
    //   LoginService.asyncGetKakaoToken,
    //   action.payload,
    // );
    // yield console.log(response);

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

    // yield put(getKakaoTokenSuccess(response.data));
    yield put(endLoading());

    yield call(Router.push, '/');
  } catch (error) {
    console.log(error);
  }
}

function* naverLoginGenerator(action: getNaverTokenRequestAction) {
  try {
    yield put(startLoading());

    const response: AxiosResponse<LoginResponse> = yield call(
      LoginService.asyncGetNaverToken,
      action.payload,
    );
    yield console.log(response);

    // localStorage.setItem(TOKEN_NAME.ACCESS_TOKEN, response.data.accessToken);
    // localStorage.setItem(TOKEN_NAME.REFRESH_TOKEN, response.data.refreshToken);
    // localStorage.setItem('user', JSON.stringify(response.data.user));

    yield put(getNaverTokenSuccess(response.data));
    yield put(endLoading());

    yield call(Router.push, '/');
  } catch (error) {
    console.log(error);
  }
}

export function* loginSaga() {
  yield takeLatest(GET_KAKAO_TOKEN_REQUEST, KakaoLoginGenerator);
  yield takeLatest(GET_NAVER_TOKEN_REQUEST, naverLoginGenerator);
}
