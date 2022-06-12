import React from 'react';
import { END } from 'redux-saga';
import CreateTemplate from '../../components/create/CreateTemplate';
import { RootState, wrapper } from '../../modules';
import {
  getPrevCreatedListActions,
  saveBuildingCode,
  saveUserId,
} from '../../modules/create/actions';
import { saveCookies } from '../../utils/saveCookies';

const create = () => {
  return <CreateTemplate />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    saveCookies(store, context);

    const rootState: RootState = store.getState();
    const accessToken = rootState.loginState.accessToken;
    const user_id = rootState.loginState.user_id;

    if (accessToken) {
      store.dispatch(getPrevCreatedListActions.request('1'));
      store.dispatch(saveUserId(rootState.loginState.user_id));
      store.dispatch(saveBuildingCode(rootState.loginState.buildingCode));

      store.dispatch(END);

      await store.sagaTask.toPromise();

      return {
        props: {},
      };
    } else {
      return {
        props: {},
        redirect: {
          permanent: false,
          destination: '/login',
        },
      };
    }
  },
);

export default create;
