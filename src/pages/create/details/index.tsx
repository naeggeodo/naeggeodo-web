import React from 'react';
import { END } from 'redux-saga';
import CreateDetails from '../../../components/create/CreateDetails';
// import CreateForm from '../../../components/create/CreateForm';
import TabMenu from '../../../components/main/TabMenu';
import { wrapper } from '../../../modules';
import { getNaeggeotalkListActions } from '../../../modules/naeggeotalk/actions';
import { saveCookies } from '../../../utils/saveCookies';

const Details = () => {
  return (
    <React.Fragment>
      <TabMenu />
      <CreateDetails />
    </React.Fragment>
  );
};

export default Details;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    saveCookies(store, context);

    store.dispatch(getNaeggeotalkListActions.request('1'));

    store.dispatch(END);

    await store.sagaTask.toPromise();

    return {
      props: {
        naeggeotalkList: store.getState().naeggeotalkState.naeggeotalkList,
      },
    };
  },
);
