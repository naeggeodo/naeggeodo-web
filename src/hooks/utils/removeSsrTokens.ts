import { removeCookies } from 'cookies-next';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import cookies from 'next-cookies';
import { saveAccessToken } from '../../modules/login/actions';

export const removeSsrTokens = (context, store) => {
  const allCookies = cookies(context);
  const accessToken = allCookies.accessToken;

  if (accessToken) {
    const decoded: JwtPayload = jwtDecode(accessToken);
    const exp = Number(decoded.exp) * 1000;
    const nowTime = new Date().getTime() / 1000; // 초
    const expiredTime = new Date(exp).getTime() / 1000; // 초
    const betweenTime = Math.floor(expiredTime - nowTime);

    if (betweenTime <= 20) {
      removeCookies('accessToken', {
        req: context.req,
        res: context.res,
      });
      removeCookies('address', {
        req: context.req,
        res: context.res,
      });
      removeCookies('buildingCode', {
        req: context.req,
        res: context.res,
      });
      removeCookies('user_id', {
        req: context.req,
        res: context.res,
      });
    }

    return {
      redirect: {
        permanent: false,
        destination: '/login',
      },
    };
  }
};
