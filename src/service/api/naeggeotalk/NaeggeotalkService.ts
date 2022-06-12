import { ApiService, CsrApiService } from '..';

export default class NaeggeotalkService {
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
