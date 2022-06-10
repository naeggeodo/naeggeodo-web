import { CsrApiService } from '..';

export default class CheckDepositService {
  static async asyncDepositHandler(chattingRoomId: string, userId: string) {
    try {
      // const response = await CsrApiService.patchApi(
      //   `/chat-rooms/${chattingRoomId}/users/${userId}`,
      //   null,
      // );
      const response = axios.patch(
        `${process.env.NEXT_PUBLIC_API_URL}/chat-rooms/${chattingRoomId}/users/${userId}`,
        {},
        {},
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }

  static async asyncConvertToComplete(chattingRoomId: string) {
    try {
      const response = await CsrApiService.patchParamsApi(
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
