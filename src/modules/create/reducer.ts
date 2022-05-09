import { createReducer } from 'typesafe-actions';
import {
  MINUS_MAX_COUNT,
  PLUS_MAX_COUNT,
  SELECT_ORDER_TIME,
  TYPE_STORE_LINK,
  TYPE_STORE_NAME,
} from './actions';
import { CreateStates } from './types';

const initialCreateStates: CreateStates = {
  orderTime: '',
  storeName: '',
  storeLink: 'http://',
  tags: [],
  maxCount: 1,
};

export const createStates = createReducer<CreateStates>(initialCreateStates, {
  [SELECT_ORDER_TIME]: (state, action) => ({
    ...state,
    orderTime: action.payload,
  }),
  [TYPE_STORE_NAME]: (state, action) => ({
    ...state,
    storeName: action.payload,
  }),
  [TYPE_STORE_LINK]: (state, action) => ({
    ...state,
    storeLink: action.payload,
  }),
  [PLUS_MAX_COUNT]: (state, _) => {
    if (state.maxCount >= 5) {
      return state;
    } else {
      return {
        ...state,
        maxCount: state.maxCount + 1,
      };
    }
  },
  [MINUS_MAX_COUNT]: (state, _) => {
    if (state.maxCount <= 1) {
      return state;
    } else {
      return {
        ...state,
        maxCount: state.maxCount - 1,
      };
    }
  },
});
