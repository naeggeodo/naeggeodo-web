import createSagaMiddleware from '@redux-saga/core';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { combineReducers, applyMiddleware, createStore } from 'redux';
import { all, fork } from 'redux-saga/effects';
import { composeWithDevTools } from 'redux-devtools-extension';

import counter from './counter';

//** RootReducer */
export const rootReducer = combineReducers({ counter });

//** RootSaga */
export function* rootSaga() {
  yield all([]);
}

//** RootReducer Types */
export type RootState = ReturnType<typeof rootReducer>;

// Hydrate
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

// 스토어 타입
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
