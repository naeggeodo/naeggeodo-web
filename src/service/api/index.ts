import axios, { AxiosError } from 'axios';
import { Cookies } from 'react-cookie';
import { TOKEN_NAME } from '../../constant/Login';
import { createCustomHeader } from '../../utils/createCustomHeader';

export function toLoginPage() {
  const cookies = new Cookies();
  cookies.remove('accessToken');
  cookies.remove('user_id');
  cookies.remove('buildingCode');
  cookies.remove('address');

  window.location.replace('/login');
}

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

export const csrAxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

// ** CSR 전용 API 서비스 코드
export class CsrApiService {
  static getApi(uri: string) {
    return csrAxiosInstance.get(uri);
  }
  static postApi(uri: string, data?: unknown) {
    return csrAxiosInstance.post(uri, data);
  }
  static postParamsApi(uri: string, data?: unknown) {
    return csrAxiosInstance.post(uri, {}, { params: data });
  }
  static patchApi(uri: string, data: unknown) {
    return csrAxiosInstance.patch(uri, data);
  }
  static patchParamsApi(uri: string, data: unknown) {
    return csrAxiosInstance.patch(uri, {}, { params: data });
  }
  static deleteApi(uri: string) {
    return csrAxiosInstance.delete(uri);
  }
  static getParamsApi(uri: string, data: unknown) {
    return csrAxiosInstance.get(uri, { params: data });
  }
}

csrAxiosInstance.interceptors.request.use(
  async function (config) {
    try {
      const cookies = new Cookies();

      const accessToken = cookies.get(TOKEN_NAME.ACCESS_TOKEN);

      config.headers = createCustomHeader(accessToken);
      return config;
    } catch (error) {
      console.log(error);
    }
  },
  function (error) {
    return Promise.reject(error);
  },
);

csrAxiosInstance.interceptors.response.use(
  async function (config) {
    try {
      return config;
    } catch (error) {
      console.log(error);
    }
  },
  async function (error: AxiosError) {
    if (error.response.status === 498) {
      try {
        const cookie = new Cookies();
        const response = await CsrApiService.postApi('/refreshtoken', null);

        cookie.set('accessToken', response.data.accessToken);
      } catch (error) {
        if (error.response.status === 403) {
          window.alert('토큰 유효기간이 종료되었습니다. 다시 로그인 해주세요.');
          toLoginPage();
        }
      }
    }
    return Promise.reject(error);
  },
);

// ** SSR 전용 API 서비스 코드
export class ApiService {
  static getApi(uri: string) {
    return axiosInstance.get(uri);
  }
  static getParamsApi(uri: string, data: unknown) {
    return axiosInstance.get(uri, { params: data });
  }
  static postApi(uri: string, data?: unknown) {
    return axiosInstance.post(uri, data);
  }
  static patchApi(uri: string, data: unknown) {
    return axiosInstance.patch(uri, data);
  }
  static patchParamsApi(uri: string, data: unknown) {
    return axiosInstance.patch(uri, {}, { params: data });
  }
}
