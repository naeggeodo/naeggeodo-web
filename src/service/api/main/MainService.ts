import { AxiosResponse } from 'axios';
import { ApiService } from '..';

export default class MainService {
  static async asyncGetCategories() {
    return ApiService.getApi('/categories');
  }

  static async asyncGetChatRooms() {
    const response: AxiosResponse = await ApiService.getApi(
      '/chat/rooms?buildingcode=서울',
    );
    return response;
  }
}
