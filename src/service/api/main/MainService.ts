import { ApiService } from '..';
import { Category, ChatRoomRequestPayload } from '../../../modules/main/types';

export default class MainService {
  static async asyncGetCategories() {
    try {
      return ApiService.getApi('/categories');
    } catch (err) {
      console.log(err);
    }
  }

  static async asyncGetAllChatRooms(buildingCode: string) {
    try {
      return ApiService.getApi(
        encodeURI(`/chat-rooms?buildingCode=${buildingCode}`),
      );
    } catch (err) {
      console.log(err);
    }
  }

  static async asyncGetChatRoomsWithCategory(
    buildingCode: string,
    category: Category,
  ) {
    try {
      return ApiService.getApi(
        encodeURI(
          `/chat-rooms?category=${category}&buildingCode=${buildingCode}`,
        ),
      );
    } catch (err) {
      console.log(err);
    }
  }
}
