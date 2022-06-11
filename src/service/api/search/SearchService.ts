import { ApiService } from '..';

export default class SearchService {
  static async asyncGetSearchTags() {
    return ApiService.getApi('/chat-rooms/tag/most-wanted');
  }

  static async asyncGetSearchResultByTag(tag: string) {
    return ApiService.getApi(`/chat-rooms/tag?keyWord=${encodeURI(tag)}`);
  }

  static async asyncGetSearchResultByInput(keyWord: string) {
    return ApiService.getApi(`/chat-rooms/search?keyWord=${keyWord}`);
  }
}
