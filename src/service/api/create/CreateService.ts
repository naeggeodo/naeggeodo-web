import axios from 'axios';
import { CsrApiService } from '..';
import { OrderTimeType } from '../../../modules/common/types';

export class CreateService {
  static async asyncCreateChatRoom(body: any) {
    return await CsrApiService.postApi('/chat-rooms', body);
  }

  static async asyncGetPrevCreatedList(userId: string) {
    return axios.get(`${process.env.NEXT_PUBLIC_API_URL}/${userId}`, {
      params: { state: 'END' },
      withCredentials: true,
    });
  }

  static async asyncCsrGetPrevCreatedList(userId: string) {
    return CsrApiService.getParamsApi(`/chat-rooms/order-list/${userId}`, {
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

  static async asyncPatchPrevChatRoomBookmark(
    chatMainId: number,
    userId: string,
  ) {
    return CsrApiService.patchApi(
      `/chat-rooms/${chatMainId}/bookmarks/${userId}`,
      null,
    );
  }

  static async asyncDeletePrevCreatedChatRoom(chatMainId: number) {
    return CsrApiService.deleteApi(`/chat-rooms/${chatMainId}`);
  }
}
