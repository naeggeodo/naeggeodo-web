import { END } from 'redux-saga';

import NaeggeotalkTemplate from '../../components/naeggeotalk/NaeggeotalkTemplate';
import { wrapper } from '../../modules';
import { getNaeggeotalkListActions } from '../../modules/naeggeotalk/actions';
import { NaeggeotalkListResponse } from '../../modules/naeggeotalk/types';

const naeggeotalk = ({
  naeggeotalkList,
}: {
  naeggeotalkList: NaeggeotalkListResponse;
}) => {
  return <NaeggeotalkTemplate naeggeotalkList={naeggeotalkList} />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
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

export default naeggeotalk;
