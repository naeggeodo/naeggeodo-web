import { ApiService, CsrApiService } from '..';
import { OrderTimeType } from '../../../modules/create/types';

export class CreateService {
  static async asyncCreateChatRoom(body: any) {
    return await CsrApiService.postApi('/chat-rooms', body);
  }

  static async asyncGetPrevCreatedList(userId: string) {
    return ApiService.getParamsApi(`/chat-rooms/order-list/${userId}`, {
      state: 'END',
    });
  }

  static async asyncCopyPrevCreatedData(
    chatMain_id: number,
    orderTimeType: OrderTimeType | '',
  ) {
    return await CsrApiService.postParamsApi(
      `/chat-rooms/${chatMain_id}/copy`,
      {
        orderTimeType,
      },
    );
  }
}
