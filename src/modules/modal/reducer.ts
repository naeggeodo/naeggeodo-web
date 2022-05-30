import { createReducer } from 'typesafe-actions';
import {
  CLOSE_LOGIN_MODAL,
  CLOSE_SEARCH_POST_CODE,
  OPEN_LOGIN_MODAL,
  OPEN_SEARCH_POST_CODE,
} from './actions';
import { ModalStates } from './types';

const initialState: ModalStates = {
  loginModalIsClicked: false,
  searchPostCodeIsOpen: false,
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

  [OPEN_SEARCH_POST_CODE]: (state, _) => ({
    ...state,
    searchPostCodeIsOpen: true,
  }),
  [CLOSE_SEARCH_POST_CODE]: (state, _) => ({
    ...state,
    searchPostCodeIsOpen: false,
  }),
});
