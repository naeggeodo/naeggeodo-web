import { END } from 'redux-saga';
import ProgressTemplate from '../../components/progress/ProgressTemplate';
import { RootState, wrapper } from '../../modules';
import { getProgressingActions } from '../../modules/progress/actions';
import { saveCookies } from '../../utils/saveCookies';

const Progress = () => {
  return <ProgressTemplate />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    saveCookies(store, context);
    const rootState: RootState = store.getState();

    const accessToken = rootState.loginState.accessToken;
    const user_id = rootState.loginState.user_id;

    store.dispatch(getProgressingActions.request(user_id));

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

export default Progress;
