import axios from 'axios';

export default class ChattingService {
  static async asyncGetChattingRoomInfo(chattingRoomId: any) {
    try {
      const res = await axios.get(
        `http://15.165.248.39:9090/chat/rooms/${chattingRoomId}`,
      );

      return res;
    } catch (err) {
      console.log(err);
    }
  }
}
