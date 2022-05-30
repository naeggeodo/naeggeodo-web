import { ApiService } from '..';
import { PatchBuildingCodeRequestData } from '../../../modules/search-post-code/types';

export class SearchPostCodeService {
  static async asyncPatchBuildingCode(
    userId: string,
    data: PatchBuildingCodeRequestData,
  ) {
    return await ApiService.patchApi(`/user/${userId}/address`, data);
  }
}
