import { Cookies } from 'react-cookie';
import { ApiService } from '..';
import { TOKEN_NAME } from '../../../constant/Login';

export class MypageService {
  static async asyncGetMypageUserInfo(userId) {
    const cookies = new Cookies();

    return await ApiService.getApi(`/user/${userId}/mypage`);
  }
}
