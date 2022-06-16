import { AxiosResponse } from 'axios';
import Router from 'next/router';
import { Cookies } from 'react-cookie';
import { call, put, takeLatest } from 'redux-saga/effects';
import { SearchPostCodeService } from '../../service/api/search-post-code/SearchPostCodeService';
import { saveAddress } from '../login/actions';
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
    const cookies = new Cookies();

    const response: AxiosResponse<PatchBuildingCodeResponse> = yield call(
      SearchPostCodeService.asyncPatchBuildingCode,
      action.payload.userId,
      action.payload.addressInfo,
    );

    cookies.set('buildingCode', response.data.buildingCode, {
      path: '/',
    });

    cookies.set('address', response.data.address, {
      path: '/',
    });

    yield put(patchBuildingCodeSuccess(response.data, 'Y'));
    yield put(saveAddress(response.data));
    yield call(
      Router.push,
      `/chat-rooms?buildingCode=${response.data.buildingCode}`,
    );
  } catch (error) {
    console.log(error);
  }
}

function* getUserAddressGenerator(action: GetBuildingCodeRequestAction) {
  try {
    const response: AxiosResponse<PatchBuildingCodeRequestData> = yield call(
      SearchPostCodeService.asyncGetBuildingCode,
      action.payload.user_id,
    );
    console.log(response);
    yield put(getBuildingCodeSuccess(response.data, 'Y'));
    yield put(saveAddress(response.data));
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
