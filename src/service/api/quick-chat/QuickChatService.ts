import axios from 'axios';
import { CsrApiService } from '..';
import { QuickChattingListRequest } from '../../../modules/quick-chatting/types';

export default class QuickChatService {
  static async asyncGetQuickChattingList(userId: string) {
    return await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/user/${userId}/quick-chatting`,
    );
  }

  static async asyncPatchQuickChattingList(data: QuickChattingListRequest) {
    return await CsrApiService.patchApi(
      `/user/${data.user_id}/quick-chatting`,
      { quickChat: data.quickChat },
    );
  }
}
