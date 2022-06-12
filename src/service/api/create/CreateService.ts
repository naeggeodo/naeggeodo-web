import { CsrApiService } from '..';

export class CreateService {
  static async asyncCreateChatRoom(body: any) {
    return await CsrApiService.postApi('/chat-rooms', body);
  }
}
