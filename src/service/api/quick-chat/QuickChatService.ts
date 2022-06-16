import { ApiService } from '..';

interface UpdateData {
  quickChat: string[];
}

export default class QuickChatService {
  static async asyncGetQuickChattingList(userId: string) {
    return await ApiService.getApi(`/user/${userId}/quick-chatting`);
  }

  static async asyncPatchQuickChattingList(
    userId: string,
    updateData: UpdateData,
  ) {
    return await ApiService.patchApi(
      `/user/${userId}/quick-chatting`,
      updateData,
    );
  }
}
