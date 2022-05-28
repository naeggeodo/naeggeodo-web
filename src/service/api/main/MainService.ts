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
      return ApiService.getApi(encodeURI('/chat-rooms?buildingCode=서울'));
    } catch (err) {
      console.log(err);
    }
  }
}
