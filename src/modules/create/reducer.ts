import { createReducer } from 'typesafe-actions';
import {
  ADD_TAG,
  MINUS_MAX_COUNT,
  PLUS_MAX_COUNT,
  REMOVE_TAG,
  SelectOrderTimeTypeAction,
  SELECT_ORDER_TIME_TYPE,
  TYPE_STORE_LINK,
  TYPE_STORE_NAME,
} from './actions';
import { CreateStates } from './types';

const initialCreateStates: CreateStates = {
  addr: '',
  category: 'ALL',
  link: 'http://',
  place: '',
  title: '',
  user_id: '',
  tags: [],
  orderTimeType: 'ONE_HOUR',
};

export const createStates = createReducer<CreateStates>(initialCreateStates, {
  [SELECT_ORDER_TIME_TYPE]: (state, action: SelectOrderTimeTypeAction) => ({
    ...state,
    orderTimeType: action.payload.orderTimeType,
  }),
  // [TYPE_STORE_NAME]: (state, action) => ({
  //   ...state,
  //   storeName: action.payload,
  // }),
  // [TYPE_STORE_LINK]: (state, action) => ({
  //   ...state,
  //   storeLink: action.payload,
  // }),
  // [ADD_TAG]: (state, action) => {
  //   if (state.tags.length >= 5) return state;
  //   else {
  //     return {
  //       ...state,
  //       tags: [...state.tags, action.payload],
  //     };
  //   }
  // },
  // [REMOVE_TAG]: (state, action) => ({
  //   ...state,
  //   tags: state.tags.filter((_, index) => index !== action.payload),
  // }),
  // [PLUS_MAX_COUNT]: (state, _) => {
  //   if (state.maxCount >= 5) {
  //     return state;
  //   } else {
  //     return {
  //       ...state,
  //       maxCount: state.maxCount + 1,
  //     };
  //   }
  // },
  // [MINUS_MAX_COUNT]: (state, _) => {
  //   if (state.maxCount <= 1) {
  //     return state;
  //   } else {
  //     return {
  //       ...state,
  //       maxCount: state.maxCount - 1,
  //     };
  //   }
  // },
});
