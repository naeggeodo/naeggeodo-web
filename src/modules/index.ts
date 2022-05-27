import createSagaMiddleware from '@redux-saga/core';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { combineReducers, applyMiddleware, createStore } from 'redux';
import { all, fork } from 'redux-saga/effects';
import { composeWithDevTools } from 'redux-devtools-extension';

import { mainPageState } from './main/reducer';
import { chattingRoomState } from './chatting/reducer';
import { postCodeState } from './search-post-code/reducer';
import { getChattingRoomInfoSaga } from './chatting/sagas';
import { getMainPageInfoSaga } from './main/sagas';
import { createStates } from './create/reducer';
import { searchPageState } from './search/reducer';
import { getSearchPageInfoSaga } from './search/sagas';

//** RootReducer */
export const rootReducer = combineReducers({
  chattingRoomState,
  postCodeState,
  mainPageState,
  createStates,
  searchPageState,
});

//** RootSaga */
export function* rootSaga() {
  yield all([
    fork(getChattingRoomInfoSaga),
    fork(getMainPageInfoSaga),
    fork(getSearchPageInfoSaga),
  ]);
}

//** Hydrate */
const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  }
  return rootReducer(state, action);
};

//** RootReducer Types */
export type RootState = ReturnType<typeof rootReducer>;

export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const enhancer = composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(reducer, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};
export const wrapper = createWrapper(configureStore, { debug: true });
