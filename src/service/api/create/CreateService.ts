import { ApiService, CsrApiService } from '..';

export class CreateService {
  static async asyncCreateChatRoom(body: any) {
    return await CsrApiService.postApi('/chat-rooms', body);
  }

  static async asyncGetPrevCreatedList(userId: string) {
    return ApiService.getParamsApi(`/chat-rooms/order-list/${userId}`, {
      state: 'END',
    });
  }
}
