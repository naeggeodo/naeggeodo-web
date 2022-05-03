import { ApiService } from '..';

export default class MainService {
  static async asyncGetCategories() {
    return ApiService.getApi('/categories');
  }
}
