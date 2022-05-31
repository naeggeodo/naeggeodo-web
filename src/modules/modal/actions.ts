import { createAction } from 'typesafe-actions';

const namespace = '/modalStates';

export const OPEN_LOGIN_MODAL = namespace + 'OPEN_LOGIN_MODAL';
export const CLOSE_LOGIN_MODAL = namespace + 'CLOSE_LOGIN_MODAL';

export const OPEN_SEARCH_POST_CODE = namespace + 'OPEN_SEARCH_POST_CODE';
export const CLOSE_SEARCH_POST_CODE = namespace + 'CLOSE_SEARCH_POST_CODE';

export const openLoginModal = createAction(OPEN_LOGIN_MODAL, () => ({}))();
export const closeLoginModal = createAction(CLOSE_LOGIN_MODAL, () => ({}))();

export const openSearchPostCode = createAction(
  OPEN_SEARCH_POST_CODE,
  () => ({}),
)();
export const closeSearchPostCode = createAction(
  CLOSE_SEARCH_POST_CODE,
  () => ({}),
)();
