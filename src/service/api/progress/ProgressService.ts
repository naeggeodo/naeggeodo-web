import axios from 'axios';
import { CsrApiService } from '..';
import { ProgressingChatRoomTitleRequest } from '../../../modules/progress/types';

export class ProgressService {
  static async asyncGetMypageUserInfo(user_id: string) {
    return await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/chat-rooms/progressing/user/${user_id}`,
      { withCredentials: true },
    );
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
