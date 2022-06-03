import { AxiosError } from 'axios';
import { createAsyncAction } from 'typesafe-actions';
import { CheckDepositRequest } from './types';

const namespace = 'checkDeposit/';
export const SET_CHECK_DEPOSIT_REQUEST =
  namespace + 'SET_CHECK_DEPOSIT_REQUEST';
export const SET_CHECK_DEPOSIT_SUCCESS =
  namespace + 'SET_CHECK_DEPOSIT_SUCCESS';
export const SET_CHECK_DEPOSIT_FAILURE =
  namespace + 'SET_CHECK_DEPOSIT_FAILURE';

export const setCheckDepositActions = createAsyncAction(
  SET_CHECK_DEPOSIT_REQUEST,
  SET_CHECK_DEPOSIT_SUCCESS,
  SET_CHECK_DEPOSIT_FAILURE,
)<CheckDepositRequest, string, AxiosError>();
