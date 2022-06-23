import { ApiService, CsrApiService } from '..';
import { ProgressingChatRoomTitleRequest } from '../../../modules/progress/types';

export class ProgressService {
  static async asyncGetMypageUserInfo(user_id: string) {
    return await ApiService.getApi(`/chat-rooms/progressing/user/${user_id}`);
  }

  static async asyncSetProgressingChatRoomTitle(
    info: ProgressingChatRoomTitleRequest,
  ) {
    return await CsrApiService.patchApi(
      `/chat-rooms/${info.chatMain_id}?title=${info.title}`,
      null,
    );
  }
}
