import axios from 'axios';
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

    const user_id = rootState.loginState.user_id;
    const accessToken = rootState.loginState.accessToken;

    axios.defaults.headers['Authorization'] = '';
    if (context.req && context.req.headers.cookie) {
      axios.defaults.headers['Authorization'] = `Bearer ${accessToken}`;
    }

    if (!accessToken) {
      return {
        redirect: {
          permanent: false,
          destination: '/login',
        },
      };
    }

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
