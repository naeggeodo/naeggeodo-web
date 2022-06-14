import { ApiService } from '..';

export class ProgressService {
  static async asyncGetMypageUserInfo(user_id: string) {
    return await ApiService.getApi(`/chat-rooms/progressing/user/${user_id}`);
  }
}
