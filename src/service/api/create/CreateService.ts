import { CsrApiService } from '..';
import { CreateStates } from '../../../modules/create/types';
export class CreateService {
  static async asyncCreateChatRoom(body: CreateStates) {
    return await CsrApiService.postApi('/chat-rooms', body);
  }
}
