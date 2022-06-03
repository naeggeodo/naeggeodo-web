import { createReducer } from 'typesafe-actions';
import { SET_CHECK_DEPOSIT_SUCCESS } from './actions';

type CheckDepositState = {
  depositState: 'Y' | null;
};

const initialCheckDepositState: CheckDepositState = {
  depositState: null,
};

export const checkDepositState = createReducer<CheckDepositState>(
  initialCheckDepositState,
  {
    [SET_CHECK_DEPOSIT_SUCCESS]: (state, action) => ({
      ...state,
      depositState: action.payload,
    }),
  },
);
