import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export class ApiService {
  static getApi(uri: string) {
    return axiosInstance.get(uri);
  }
  static postApi(uri: string, data?: unknown) {
    return axiosInstance.post(uri, data);
  }
  static patchApi(uri: string, data: unknown) {
    return axiosInstance.patch(uri, data);
  }
}
