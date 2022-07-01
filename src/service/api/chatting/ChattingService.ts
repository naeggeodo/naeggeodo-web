import axios from 'axios';
import { CsrApiService } from '..';

export default class ChattingService {
  static async asyncGetChattingRoomInfo(chattingRoomId: string) {
    return await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/chat-rooms/${chattingRoomId}`,
      {
        withCredentials: true,
      },
    );
  }

  static async asyncGetPreviousChattingList(
    chattingRoomId: string,
    userId: string,
  ) {
    return await CsrApiService.getApi(
      `/chat/messages/${chattingRoomId}/${userId}`,
    );
  }

  static async asyncGetCurrentChatUserList(chattingRoomId: string) {
    return await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/chat-rooms/${chattingRoomId}/users`,
      {
        withCredentials: true,
      },
    );
  }

  static async asyncGetUserNickname(userId: string) {
    return await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/user/${userId}/nickname`,
      {
        withCredentials: true,
      },
    );
  }
}
