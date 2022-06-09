import axios, { Axios } from 'axios';
import { Cookies } from 'react-cookie';
import { TOKEN_NAME } from '../../constant/Login';
import { createCustomHeader } from '../../utils/createCustomHeader';

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const csrAxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// ** CSR 전용 API 서비스 코드
export class CsrApiService {
  static getApi(uri: string) {
    return csrAxiosInstance.get(uri);
  }
  static postApi(uri: string, data?: unknown) {
    return csrAxiosInstance.post(uri, data);
  }
  static patchApi(uri: string, data: unknown) {
    return csrAxiosInstance.patch(uri, data);
  }
  static patchParamsApi(uri: string, data: unknown) {
    return axiosInstance.patch(uri, {}, { params: data });
  }
}

csrAxiosInstance.interceptors.request.use(
  async function (config) {
    try {
      const cookies = new Cookies();

      const accessToken = cookies.get(TOKEN_NAME.ACCESS_TOKEN);
      const refreshToken = cookies.get(TOKEN_NAME.REFRESH_TOKEN);

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
