import { Address } from 'react-daum-postcode';
import { createAction } from 'typesafe-actions';

const namespace = 'search-post-code/';

export const SAVE_ADDRESS_WITH_BUILDING_CODE =
  namespace + 'SAVE_ADDRESS_WITH_BUILDING_CODE';

export const saveAddresWithBuildingCode = createAction(
  SAVE_ADDRESS_WITH_BUILDING_CODE,
  (data: Address) => data,
)();
