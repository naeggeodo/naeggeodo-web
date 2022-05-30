import { createAction } from 'typesafe-actions';

const namespace = '/modalStates';

export const OPEN_LOGIN_MODAL = namespace + 'OPEN_LOGIN_MODAL';
export const CLOSE_LOGIN_MODAL = namespace + 'CLOSE_LOGIN_MODAL';

export const openLoginModal = createAction(OPEN_LOGIN_MODAL, () => ({}))();
export const closeLoginModal = createAction(CLOSE_LOGIN_MODAL, () => ({}))();
