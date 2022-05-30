import { Address } from 'react-daum-postcode';
import { createAction } from 'typesafe-actions';

const namespace = 'search-post-code/';

export const PATCH_BUILDING_CODE_REQUEST =
  namespace + 'PATCH_BUILDING_CODE_REQUEST';
export const PATCH_BUILDING_CODE_SUCCESS =
  namespace + 'PATCH_BUILDING_CODE_SUCCESS';

export const SAVE_ADDRESS_WITH_BUILDING_CODE =
  namespace + 'SAVE_ADDRESS_WITH_BUILDING_CODE';

export const saveAddresWithBuildingCode = createAction(
  SAVE_ADDRESS_WITH_BUILDING_CODE,
  (data: Address) => data,
)();

export const patchBuildingCodeRequest = createAction(
  PATCH_BUILDING_CODE_REQUEST,
  (userId, addressInfo) => ({ userId, addressInfo }),
)();

export const patchBuildingCodeSuccess = createAction(
  PATCH_BUILDING_CODE_SUCCESS,
  (response) => response,
)();
