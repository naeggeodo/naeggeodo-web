import { ApiService, CsrApiService } from '..';

export default class SearchService {
  static async asyncGetSearchTags() {
    try {
      return ApiService.getApi('/chat-rooms/tag/most-wanted');
    } catch (err) {
      console.log(err);
    }
  }

  static async asyncGetSearchResultByTag(tag: string) {
    try {
      return CsrApiService.getApi(`/chat-rooms/tag/${tag}`);
    } catch (err) {
      console.log(err);
    }
  }

  static async asyncGetSearchResultByInput(keyWord: string) {
    try {
      return CsrApiService.getApi(`/chat-rooms/search/${keyWord}`);
    } catch (err) {
      console.log(err);
    }
  }
}
