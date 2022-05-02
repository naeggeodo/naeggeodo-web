import { ApiService } from '..';

export default class MainService {
  static async asyncGetCategories() {
    const res = ApiService.getApi('/categories');
    return res;
  }
}
