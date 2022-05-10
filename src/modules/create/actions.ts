import { createAction } from 'typesafe-actions';

const namespace = 'create/';

export const SELECT_ORDER_TYPE = namespace + 'SELECT_ORDER_TYPE';
export const TYPE_STORE_NAME = namespace + 'TYPE_STORE_NAME';
export const TYPE_STORE_LINK = namespace + 'TYPE_STORE_LINK';
export const PLUS_MAX_COUNT = namespace + 'PLUS_MAX_COUNT';
export const MINUS_MAX_COUNT = namespace + 'MINUS_MAX_COUNT';
export const ADD_TAG = namespace + 'ADD_TAG';
export const REMOVE_TAG = namespace + 'REMOVE_TAG';

export const selectOrderType = createAction(
  SELECT_ORDER_TYPE,
  (data) => data,
)();

export const typeStoreName = createAction(TYPE_STORE_NAME, (data) => data)();
export const typeStoreLink = createAction(TYPE_STORE_LINK, (data) => data)();

export const plusMaxCount = createAction(PLUS_MAX_COUNT, () => ({}))();
export const minusMaxCount = createAction(MINUS_MAX_COUNT, () => ({}))();
export const addTag = createAction(ADD_TAG, (keyword) => keyword)();
export const removeTag = createAction(REMOVE_TAG, (index) => index)();
