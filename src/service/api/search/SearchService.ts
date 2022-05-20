import { ApiService } from '..';

export default class SearchService {
  static async asyncGetSearchTags() {
    try {
      return ApiService.getApi('/chat-rooms/tag/most-wanted');
    } catch (err) {
      console.log(err);
    }
  }
}
