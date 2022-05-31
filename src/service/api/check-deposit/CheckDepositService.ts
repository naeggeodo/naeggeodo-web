import { ApiService } from '..';
export default class CheckDepositService {
  static async asyncDepositHandler(chattingRoomId: string, userId: string) {
    try {
      const response = await ApiService.patchApi(
        `/chat-rooms/${chattingRoomId}/users/${userId}`,
        null,
      );
      const data = await response.data;
      return data;
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
      const data = await response.data;
      return data;
    } catch (err) {
      console.log(err);
    }
  }
}
