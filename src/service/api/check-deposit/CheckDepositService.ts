import { ApiService } from '..';

export default class CheckDepositService {
  static async asyncDepositHandler(chattingRoomId: string, userId: string) {
    try {
      const response = await ApiService.patchApi(
        `/chat-rooms/${chattingRoomId}/users/${userId}`,
        null,
      );

      return response.data;
    } catch (err) {
      console.log(err);
    }
  }

  static async asyncConvertToComplete(chattingRoomId: string) {
    try {
      const response = await ApiService.patchParamsApi(
        `/chat-rooms/${chattingRoomId}`,
        {
          state: 'END',
        },
      );

      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
}
