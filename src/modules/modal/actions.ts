import { createAction } from 'typesafe-actions';

const namespace = 'modalStates/';

export const OPEN_LOGIN_MODAL = namespace + 'OPEN_LOGIN_MODAL';
export const CLOSE_LOGIN_MODAL = namespace + 'CLOSE_LOGIN_MODAL';

export const OPEN_SEARCH_POST_CODE = namespace + 'OPEN_SEARCH_POST_CODE';
export const CLOSE_SEARCH_POST_CODE = namespace + 'CLOSE_SEARCH_POST_CODE';

export const OPEN_COMPLETE_MODAL = namespace + 'OPEN_COMPLETE_MODAL';
export const CLOSE_COMPLETE_MODAL = namespace + 'CLOSE_COMPLETE_MODAL';

export const OPEN_COPY_COMPLETE_MODAL = namespace + 'OPEN_COPY_COMPLETE_MODAL';
export const CLOSE_COPY_COMPLETE_MODAL =
  namespace + 'CLOSE_COPY_COMPLETE_MODAL';

export const OPEN_EXIT_MODAL = namespace + 'OPEN_EXIT_MODAL';
export const CLOSE_EXIT_MODAL = namespace + 'CLOSE_EXIT_MODAL';

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

export const openCompleteModal = createAction(
  OPEN_COMPLETE_MODAL,
  () => ({}),
)();
export const closeCompleteModal = createAction(
  CLOSE_COMPLETE_MODAL,
  () => ({}),
)();

export const openCopyCompleteModal = createAction(
  OPEN_COPY_COMPLETE_MODAL,
  () => ({}),
)();
export const closeCopyCompleteModal = createAction(
  CLOSE_COPY_COMPLETE_MODAL,
  () => ({}),
)();

export const openExitModal = createAction(OPEN_EXIT_MODAL, () => ({}))();
export const closeExitModal = createAction(CLOSE_EXIT_MODAL, () => ({}))();
