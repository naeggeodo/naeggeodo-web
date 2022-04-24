import { ApiService } from '..';

export default class ChattingService {
  static async asyncGetChattingRoomInfo(chattingRoomId: any) {
    try {
      const res = await ApiService.getApi(`/chat/rooms/${chattingRoomId}`);

      return res;
    } catch (err) {
      console.log(err);
    }
  }
}
