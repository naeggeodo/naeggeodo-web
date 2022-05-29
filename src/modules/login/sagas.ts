import { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { TOKEN_NAME } from '../../constant/Login';
import { LoginService } from '../../service/api/login/LoginService';
import { getKakaoTokenSuccess, GET_KAKAO_TOKEN_REQUEST } from './actions';
import { getkakaoTokenRequestAction, KakaoLoginResponse } from './types';

function* KakaoLoginGenerator(action: getkakaoTokenRequestAction) {
  try {
    const response: AxiosResponse<KakaoLoginResponse> = yield call(
      LoginService.asyncGetKakaoToken,
      action.payload.kakaoCode,
    );
    console.log(response);

    localStorage.setItem(TOKEN_NAME.ACCESS_TOKEN, response.data.accessToken);
    localStorage.setItem(TOKEN_NAME.REFRESH_TOKEN, response.data.refreshToken);

    yield put(getKakaoTokenSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}

export function* kakaoLoginSaga() {
  yield takeLatest(GET_KAKAO_TOKEN_REQUEST, KakaoLoginGenerator);
}
