import axios from 'axios';
import { Cookies } from 'react-cookie';
import { TOKEN_NAME } from '../../constant/Login';

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

axiosInstance.interceptors.request.use(
  async function (config) {
    try {
      const cookies = new Cookies();

      const accessToken = cookies.get(TOKEN_NAME.ACCESS_TOKEN);
      const refreshToken = cookies.get(TOKEN_NAME.REFRESH_TOKEN);

      return config;
    } catch (error) {
      console.log(error);
    }
  },
  function (error) {
    return Promise.reject(error);
  },
);

const customHeader = (accessToken) => {
  return {
    Authorization: `Bearer ${accessToken}`,
  };
};

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

  static getMethod(accessToken, uri: string) {
    return axiosInstance.get(uri, {
      headers: customHeader(accessToken),
    });
  }
}
