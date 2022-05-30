import { createReducer } from 'typesafe-actions';
import {
  GET_BUILDING_CODE_SUCCESS,
  PATCH_BUILDING_CODE_SUCCESS,
} from './actions';
import { PatchBuildingCodeResponse } from './types';

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
    [GET_BUILDING_CODE_SUCCESS]: (state, action) => ({
      ...state,
      address: action.payload.address,
      buildingCode: action.payload.buildingCode,
      zonecode: action.payload.zonecode,
    }),
  },
);
