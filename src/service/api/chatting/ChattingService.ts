import { ApiService } from '..';

export default class ChattingService {
  static async asyncGetChattingRoomInfo(chattingRoomId: string) {
    try {
      return await ApiService.getApi(`/chat-rooms/${chattingRoomId}`);
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

  static async asyncGetQuickChattingList(userId: string) {
    try {
      return await ApiService.getApi(`/user/${userId}/quick-chatting`);
    } catch (err) {
      console.log(err);
    }
  }

  static async asyncGetCurrentChatUserList(chattingRoomId: string) {
    try {
      return await ApiService.getApi(`/chat-rooms/${chattingRoomId}/users`);
    } catch (err) {
      console.log(err);
    }
  }
}
