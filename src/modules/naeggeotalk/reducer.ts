import { createReducer } from 'typesafe-actions';
import { GET_NAEGGEOTALK_LIST_SUCCESS } from './actions';
import { NaeggeotalkListResponse } from './types';

type NaeggeotalkState = {
  naeggeotalkList: NaeggeotalkListResponse | null;
};

const initialNaeggeotalkState: NaeggeotalkState = {
  naeggeotalkList: null,
};

export const naeggeotalkState = createReducer<NaeggeotalkState>(
  initialNaeggeotalkState,
  {
    [GET_NAEGGEOTALK_LIST_SUCCESS]: (state, action) => ({
      ...state,
      naeggeotalkList: action.payload,
    }),
  },
);
