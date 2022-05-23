import { ApiService } from '..';

export default class MainService {
  static async asyncGetCategories() {
    try {
      return ApiService.getApi('/categories');
    } catch (err) {
      console.log(err);
    }
  }

  static async asyncGetChatRooms() {
    try {
      return ApiService.getApi(
        encodeURI('/chat-rooms?buildingcode=122352362341'),
      );
    } catch (err) {
      console.log(err);
    }
  }
}
