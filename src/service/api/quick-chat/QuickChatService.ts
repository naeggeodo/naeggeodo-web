import { ApiService } from '..';

export default class QuickChatService {
  static async asyncGetQuickChattingList(userId: string) {
    return await ApiService.getApi(`/user/${userId}/quick-chatting`);
  }
}
