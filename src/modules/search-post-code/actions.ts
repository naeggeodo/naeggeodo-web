import { createAction } from 'typesafe-actions';

const namespace = 'search-post-code/';

export const PATCH_BUILDING_CODE_REQUEST =
  namespace + 'PATCH_BUILDING_CODE_REQUEST';
export const PATCH_BUILDING_CODE_SUCCESS =
  namespace + 'PATCH_BUILDING_CODE_SUCCESS';

export const GET_BUILDING_CODE_REQUEST =
  namespace + 'GET_BUILDING_CODE_REQUEST';
export const GET_BUILDING_CODE_SUCCESS =
  namespace + 'GET_BUILDING_CODE_SUCCESS';

export const SAVE_APARTMENT_ADDRESS = namespace + 'SAVE_APARTMENT_ADDRESS';

export const patchBuildingCodeRequest = createAction(
  PATCH_BUILDING_CODE_REQUEST,
  (userId, addressInfo) => ({ userId, addressInfo }),
)();

export const patchBuildingCodeSuccess = createAction(
  PATCH_BUILDING_CODE_SUCCESS,
  (response, apartment) => ({ response, apartment }),
)();

export const getBuildingCodeRequest = createAction(
  GET_BUILDING_CODE_REQUEST,
  (userId) => ({ userId }),
)();

export const getBuildingCodeSuccess = createAction(
  GET_BUILDING_CODE_SUCCESS,
  (response, apartment) => ({ response, apartment }),
)();

export const saveApartmentAddress = createAction(
  SAVE_APARTMENT_ADDRESS,
  (apartment) => ({ apartment }),
)();

export type PatchBuildingCodeRequestAction = ReturnType<
  typeof patchBuildingCodeRequest
>;

export type GetBuildingCodeRequestAction = ReturnType<
  typeof getBuildingCodeRequest
>;

export type SaveApartmentAddressAction = ReturnType<
  typeof saveApartmentAddress
>;
