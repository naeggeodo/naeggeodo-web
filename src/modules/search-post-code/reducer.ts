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
  id: '',
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
      id: action.payload.response.id,
      apartment: action.payload.apartment,
    }),
    [GET_BUILDING_CODE_SUCCESS]: (state, action) => ({
      ...state,
      address: action.payload.response.address,
      buildingCode: action.payload.response.buildingCode,
      zonecode: action.payload.response.zonecode,
      apartment: action.payload.apartment,
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
