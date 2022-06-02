import { ApiService } from '..';

export default class NaeggeotalkService {
  static async asyncGetNaeggeotalkList(userId: string) {
    try {
      return ApiService.getParamsApi(`/chat-rooms/order-list/${userId}`, {
        state: 'END',
      });
    } catch (err) {
      console.log(err);
    }
  }
}
