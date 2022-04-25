import { ApiService } from '..';

export default class ChattingService {
  static async asyncGetChattingRoomInfo(chattingRoomId: number) {
    try {
      const res = await ApiService.getApi(`/chat/rooms/${chattingRoomId}`);
      return res;
    } catch (err) {
      console.log(err);
    }
  }

  static async asyncGetPreviousChattingList(
    chattingRoomId: number,
    userId: number,
  ) {
    try {
      return await ApiService.getApi(
        `/chat/messages/${chattingRoomId}/${userId}`,
      );
    } catch (err) {
      console.log(err);
    }
  }
}
