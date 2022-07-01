import axios from 'axios';
import { CsrApiService } from '..';
import { ReportRequestBody } from '../../../modules/mypage/types';

export class MypageService {
  static async asyncGetMypageUserInfo(userId: string) {
    return await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/user/${userId}/mypage`,
      { withCredentials: true },
    );
  }
  static async asyncPatchNickName(userId: string, value: string) {
    return await CsrApiService.patchApi(
      `/user/${userId}/nickname?value=${value}`,
      {},
    );
  }
  static async asyncSubmitReport(body: ReportRequestBody) {
    return await CsrApiService.postApi('/report', body);
  }
}
