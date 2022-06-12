import { createReducer } from 'typesafe-actions';
import { NaeggeotalkListResponse } from './types';

type NaeggeotalkState = {
  naeggeotalkList: NaeggeotalkListResponse | null;
};

const initialNaeggeotalkState: NaeggeotalkState = {
  naeggeotalkList: null,
};

export const naeggeotalkState = createReducer<NaeggeotalkState>(
  initialNaeggeotalkState,
  {},
);
