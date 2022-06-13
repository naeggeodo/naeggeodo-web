import { END } from 'redux-saga';
import NaeggeotalkTemplate from '../../components/naeggeotalk/NaeggeotalkTemplate';
import { RootState, wrapper } from '../../modules';
import { saveCookies } from '../../utils/saveCookies';

const naeggeotalk = () => {
  return <NaeggeotalkTemplate />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    saveCookies(store, context);
    const rootState: RootState = store.getState();

    const accessToken = rootState.loginState.accessToken;

    store.dispatch(END);
    await store.sagaTask.toPromise();

    if (!accessToken) {
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      };
    }

    return {
      props: {},
    };
  },
);

export default naeggeotalk;
