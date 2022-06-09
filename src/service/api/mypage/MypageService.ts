import { ApiService, CsrApiService } from '..';
import { ReportRequestBody } from '../../../modules/mypage/types';

export class MypageService {
  static async asyncGetMypageUserInfo(userId) {
    return await ApiService.getApi(`/user/${userId}/mypage`);
  }
  static async asyncSubmitReport(body: ReportRequestBody) {
    return await CsrApiService.postApi('/report', body);
  }
}
