import { createReducer } from 'typesafe-actions';
import { SAVE_ADDRESS_WITH_BUILDING_CODE } from './actions';
import { PostCodeResponse, SaveAddresWithBuildingCode } from './types';

const initialPostCodeState: PostCodeResponse = {
  address: '',
  buildingName: '',
  buildingCode: '',
  apartment: '',
};

export const postCodeState = createReducer<PostCodeResponse>(
  initialPostCodeState,
  {
    [SAVE_ADDRESS_WITH_BUILDING_CODE]: (
      state,
      action: SaveAddresWithBuildingCode,
    ) => ({
      ...state,
      address: action.payload.address,
      buildingName: action.payload.buildingName,
      buildingCode: action.payload.buildingCode,
      apartment: action.payload.apartment,
    }),
  },
);
