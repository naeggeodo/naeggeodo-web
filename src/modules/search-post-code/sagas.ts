import { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { SearchPostCodeService } from '../../service/api/search-post-code/SearchPostCodeService';
import {
  GetBuildingCodeRequestAction,
  getBuildingCodeSuccess,
  GET_BUILDING_CODE_REQUEST,
  PatchBuildingCodeRequestAction,
  patchBuildingCodeSuccess,
  PATCH_BUILDING_CODE_REQUEST,
} from './actions';
import {
  PatchBuildingCodeRequestData,
  PatchBuildingCodeResponse,
} from './types';

function* searchPostCodeGenerator(action: PatchBuildingCodeRequestAction) {
  try {
    const response: AxiosResponse<PatchBuildingCodeResponse> = yield call(
      SearchPostCodeService.asyncPatchBuildingCode,
      action.payload.userId,
      action.payload.addressInfo,
    );

    yield put(patchBuildingCodeSuccess(response.data, 'Y'));
  } catch (error) {
    console.log(error);
  }
}

function* getUserAddressGenerator(action: GetBuildingCodeRequestAction) {
  try {
    const response: AxiosResponse<PatchBuildingCodeRequestData> = yield call(
      SearchPostCodeService.asyncGetBuildingCode,
      action.payload.userId,
    );
    yield put(getBuildingCodeSuccess(response.data, 'Y'));
  } catch (err) {
    console.log(err);
  }
}

export function* searchPostCodeSaga() {
  yield* [
    takeLatest(GET_BUILDING_CODE_REQUEST, getUserAddressGenerator),
    takeLatest(PATCH_BUILDING_CODE_REQUEST, searchPostCodeGenerator),
  ];
}
