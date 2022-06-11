import React from 'react';
import { END } from 'redux-saga';
import CreateTemplate from '../../components/create/CreateTemplate';
import { RootState, wrapper } from '../../modules';
import { saveAddress, saveUserId } from '../../modules/create/actions';
import { getNaeggeotalkListActions } from '../../modules/naeggeotalk/actions';
import { saveCookies } from '../../utils/saveCookies';

const create = () => {
  return <CreateTemplate />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    saveCookies(store, context);

    const rootState: RootState = store.getState();
    store.dispatch(getNaeggeotalkListActions.request('1'));
    store.dispatch(saveUserId(rootState.loginState.user_id));
    store.dispatch(saveAddress(rootState.loginState.address));

    store.dispatch(END);

    await store.sagaTask.toPromise();

    return {
      props: {
        naeggeotalkList: store.getState().naeggeotalkState.naeggeotalkList,
      },
    };
  },
);

export default create;
