import { createReducer } from 'typesafe-actions';
import { CLOSE_LOGIN_MODAL, OPEN_LOGIN_MODAL } from './actions';
import { ModalStates } from './types';

const initialState: ModalStates = {
  loginModalIsClicked: false,
};

export const modalStates = createReducer<ModalStates>(initialState, {
  [OPEN_LOGIN_MODAL]: (state, _) => ({
    ...state,
    loginModalIsClicked: true,
  }),
  [CLOSE_LOGIN_MODAL]: (state, _) => ({
    ...state,
    loginModalIsClicked: false,
  }),
});
