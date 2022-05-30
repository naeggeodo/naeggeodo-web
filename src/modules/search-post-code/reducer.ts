import { createReducer } from 'typesafe-actions';
import {
  PATCH_BUILDING_CODE_SUCCESS,
  SAVE_ADDRESS_WITH_BUILDING_CODE,
} from './actions';
import { PatchBuildingCodeResponse, SaveAddresWithBuildingCode } from './types';

const initialPostCodeState: PatchBuildingCodeResponse = {
  address: '',
  buildingCode: '',
  id: '',
  zonecode: '',
};

export const postCodeState = createReducer<PatchBuildingCodeResponse>(
  initialPostCodeState,
  {
    [PATCH_BUILDING_CODE_SUCCESS]: (state, action) => ({
      ...state,
      address: action.payload.address,
      buildingCode: action.payload.buildingCode,
      id: action.payload.id,
      zonecode: action.payload.zonecode,
    }),
  },
);
