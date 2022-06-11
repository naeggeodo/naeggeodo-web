import cookies from 'next-cookies';
import { Store } from 'redux';
import {
  saveAccessToken,
  saveRefreshToken,
  saveUserInfo,
} from '../modules/login/actions';

export function saveCookies(store: Store, context) {
  if (context?.req?.headers?.cookie) {
    const allCookies = cookies(context);
    store.dispatch(saveAccessToken(allCookies.accessToken));

    store.dispatch(saveRefreshToken(allCookies.refreshToken));
    store.dispatch(saveUserInfo(allCookies.address, allCookies.user_id));
  }
}
