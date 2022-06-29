import axios, { AxiosError } from "axios";
import jwtDecode, { JwtPayload } from "jwt-decode";
import { Cookies } from "react-cookie";
import { TOKEN_NAME } from "../../constant/Login";
import { createCustomHeader } from "../../utils/createCustomHeader";

export function removeTokens() {
  const cookies = new Cookies();
  cookies.remove("accessToken");
  cookies.remove("user_id");
  cookies.remove("buildingCode");
  cookies.remove("address");
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
      if (!accessToken) return config;
      const decoded: JwtPayload = jwtDecode(accessToken);
      const exp = Number(decoded.exp) * 1000;
      const nowTime = new Date().getTime() / 1000; // 초
      const expiredTime = new Date(exp).getTime() / 1000; // 초
      const betweenTime = Math.floor(expiredTime - nowTime);
      if (betweenTime <= 20) {
        try {
          const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/refreshtoken`,
            null,
            { withCredentials: true }
          );
          const updatedAccessToken = response.data.accessToken;
          cookies.set(TOKEN_NAME.ACCESS_TOKEN, updatedAccessToken, {
            path: "/",
            maxAge: 60 * 60 * 24 * 2,
          });

          config.headers = createCustomHeader(updatedAccessToken);
          return config;
        } catch (error) {
          console.log(error);
          removeTokens();
          window.alert("토큰이 만료되었습니다. 다시 로그인 해주세요.");
          window.location.replace("/login");
        }
      }
      config.headers = createCustomHeader(accessToken);
      return config;
    } catch (error) {
      console.log(error);
    }
  },
  function (error) {
    return Promise.reject(error);
  }
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
    if (
      error.response &&
      error.response.status &&
      [400, 401].includes(error.response.status)
    ) {
      removeTokens();
      alert("잘못된 요청입니다. 다시 로그인 해주세요.");
      window.location.replace("/login");
    } else if (
      error.response &&
      error.response.status &&
      error.response.status === 415
    ) {
      alert("지원하지 않는 파일 형식입니다.");
    }
    return Promise.reject(error);
  }
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
