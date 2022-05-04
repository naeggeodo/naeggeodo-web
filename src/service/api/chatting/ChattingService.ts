import { ApiService } from '..';

export default class ChattingService {
  static async asyncGetChattingRoomInfo(chattingRoomId: string) {
    try {
      return await ApiService.getApi(`/chat/rooms/${chattingRoomId}`);
    } catch (err) {
      console.log(err);
    }
  }

  static async asyncGetPreviousChattingList(
    chattingRoomId: string,
    userId: string,
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
