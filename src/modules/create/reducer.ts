import { createReducer } from 'typesafe-actions';
import {
  MINUS_MAX_COUNT,
  PLUS_MAX_COUNT,
  SELECT_ORDER_TYPE,
  TYPE_STORE_LINK,
  TYPE_STORE_NAME,
} from './actions';
import { CreateStates } from './types';

const initialCreateStates: CreateStates = {
  orderType: '',
  storeName: '',
  storeLink: 'http://',
  tags: [
    '떡볶이',
    '햄버거123123123123',
    '벅거꺼거',
    '버거걱',
    '버버버버버버버버버버버버버버버버버버버버버버버버버버버버',
  ],
  maxCount: 1,
};

export const createStates = createReducer<CreateStates>(initialCreateStates, {
  [SELECT_ORDER_TYPE]: (state, action) => ({
    ...state,
    orderType: action.payload,
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
