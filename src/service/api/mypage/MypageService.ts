import { ApiService } from '..';

export class MypageService {
  static async asyncGetMypageUserInfo(userId) {
    return await ApiService.getApi(`/user/${userId}/mypage`);
  }
}
