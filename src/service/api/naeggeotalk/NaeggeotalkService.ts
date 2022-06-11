import { ApiService, CsrApiService } from '..';

export default class NaeggeotalkService {
  static async asyncGetNaeggeotalkList(userId: string) {
    return ApiService.getParamsApi(`/chat-rooms/order-list/${userId}`, {
      state: 'END',
    });
  }

  static async asyncSetNaeggeotalkItemBookmark(
    chatMainId: string,
    userId: string,
  ) {
    return CsrApiService.patchApi(
      `/chat-rooms/${chatMainId}/bookmarks/${userId}`,
      null,
    );
  }
}
