import { ApiService, CsrApiService } from '..';

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

  static async asyncSetNaeggeotalkItemBookmark(
    chatMainId: string,
    userId: string,
  ) {
    try {
      return CsrApiService.patchApi(
        `/chat-rooms/${chatMainId}/bookmarks/${userId}`,
        null,
      );
    } catch (err) {
      console.log(err);
    }
  }
}
