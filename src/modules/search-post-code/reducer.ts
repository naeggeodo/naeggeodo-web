import { createReducer } from 'typesafe-actions';
import {
  GET_BUILDING_CODE_SUCCESS,
  PATCH_BUILDING_CODE_SUCCESS,
  SaveApartmentAddressAction,
  SAVE_APARTMENT_ADDRESS,
} from './actions';
import { PatchBuildingCodeResponse } from './types';

const initialPostCodeState: PatchBuildingCodeResponse = {
  address: '',
  buildingCode: '',
  user_id: '',
  zonecode: '',
  apartment: '',
};

export const postCodeState = createReducer<PatchBuildingCodeResponse>(
  initialPostCodeState,
  {
    [PATCH_BUILDING_CODE_SUCCESS]: (state, action) => ({
      ...state,
      address: action.payload.response.address,
      buildingCode: action.payload.response.buildingCode,
      zonecode: action.payload.response.zonecode,
      user_id: action.payload.response.user_id,
      apartment: action.payload.apartment,
    }),
    [GET_BUILDING_CODE_SUCCESS]: (state, action) => ({
      ...state,
      address: action.payload.response.address,
      buildingCode: action.payload.response.buildingCode,
      zonecode: action.payload.response.zonecode,
      apartment: action.payload.apartment,
      user_id: action.payload.user_id,
    }),
    [SAVE_APARTMENT_ADDRESS]: (state, action: SaveApartmentAddressAction) => ({
      ...state,
      address: '',
      buildingCode: '',
      zonecode: '',
      apartment: action.payload.apartment,
    }),
  },
);
