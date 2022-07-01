import { CsrApiService } from '..';

export default class CheckDepositService {
  static async asyncDepositHandler(chattingRoomId: string, userId: string) {
    const response = await CsrApiService.patchApi(
      `/chat-rooms/${chattingRoomId}/users/${userId}`,
      {},
    );
    return response.data;
  }

  static async asyncConvertToComplete(chattingRoomId: string) {
    const response = await CsrApiService.patchParamsApi(
      `/chat-rooms/${chattingRoomId}`,
      {
        state: 'END',
      },
    );

    return response.data;
  }
}
