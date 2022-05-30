import { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { SearchPostCodeService } from '../../service/api/search-post-code/SearchPostCodeService';
import {
  patchBuildingCodeSuccess,
  PATCH_BUILDING_CODE_REQUEST,
} from './actions';
import { PatchBuildingCodeResponse } from './types';

function* searchPostCodeGenerator(action) {
  try {
    const response: AxiosResponse<PatchBuildingCodeResponse> = yield call(
      SearchPostCodeService.asyncPatchBuildingCode,
      action.payload.userId,
      action.payload.addressInfo,
    );

    yield put(patchBuildingCodeSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}

export function* searchPostCodeSaga() {
  yield takeLatest(PATCH_BUILDING_CODE_REQUEST, searchPostCodeGenerator);
}
