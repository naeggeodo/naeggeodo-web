import { ApiService } from '..';

export class MypageService {
  static async asyncGetMypageUserInfo(userId: string) {
    return await ApiService.getApi(`/user/${userId}/mypage`);
  }
}
