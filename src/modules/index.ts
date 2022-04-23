import createSagaMiddleware from '@redux-saga/core';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { combineReducers, applyMiddleware, createStore } from 'redux';
import { all, fork } from 'redux-saga/effects';
import { composeWithDevTools } from 'redux-devtools-extension';

import counter from './counter';
import chatting from './chatting';

//** RootReducer */
export const rootReducer = combineReducers({ counter, chatting });

//** RootSaga */
export function* rootSaga() {
  yield all([]);
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
