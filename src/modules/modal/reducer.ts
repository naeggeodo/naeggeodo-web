import { createReducer } from "typesafe-actions";
import {
  CLOSE_BAN_MODAL,
  CLOSE_COMPLETE_MODAL,
  CLOSE_COPY_COMPLETE_MODAL,
  CLOSE_EXIT_MODAL,
  CLOSE_LOGIN_MODAL,
  CLOSE_SEARCH_POST_CODE,
  OPEN_BAN_MODAL,
  OPEN_COMPLETE_MODAL,
  OPEN_COPY_COMPLETE_MODAL,
  OPEN_EXIT_MODAL,
  OPEN_LOGIN_MODAL,
  OPEN_SEARCH_POST_CODE,
} from "./actions";
import { ModalStates } from "./types";

const initialState: ModalStates = {
  loginModalIsClicked: false,
  searchPostCodeIsOpen: false,
  completeModalIsOpen: false,
  copyCompleteModalIsOpen: false,
  exitModalIsOpen: false,
  banModalIsOpen: false,
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
  [OPEN_COMPLETE_MODAL]: (state, _) => ({
    ...state,
    completeModalIsOpen: true,
  }),
  [CLOSE_COMPLETE_MODAL]: (state) => ({
    ...state,
    completeModalIsOpen: false,
  }),
  [OPEN_COPY_COMPLETE_MODAL]: (state) => ({
    ...state,
    copyCompleteModalIsOpen: true,
  }),
  [CLOSE_COPY_COMPLETE_MODAL]: (state) => ({
    ...state,
    copyCompleteModalIsOpen: false,
  }),

  [OPEN_EXIT_MODAL]: (state) => ({
    ...state,
    exitModalIsOpen: true,
  }),
  [CLOSE_EXIT_MODAL]: (state) => ({
    ...state,
    exitModalIsOpen: false,
  }),
  [OPEN_BAN_MODAL]: (state) => ({
    ...state,
    banModalIsOpen: true,
  }),
  [CLOSE_BAN_MODAL]: (state) => ({
    ...state,
    banModalIsOpen: false,
  }),
});
