import { CsrApiService } from '..';
import { CreateChatRoomRequest } from '../../../modules/create/types';

export class CreateService {
  static async asyncCreateChatRoom(body: CreateChatRoomRequest) {
    return await CsrApiService.postApi('/chat-rooms', body);
  }
}
