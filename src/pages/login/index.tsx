import { END } from 'redux-saga';
import LoginTemplate from '../../components/login/LoginTemplate';
import { wrapper } from '../../modules';
import { saveCookies } from '../../utils/saveCookies';

const login = () => {
  return <LoginTemplate />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    saveCookies(store, context);
    const accessToken = store.getState().loginState.accessToken;

    store.dispatch(END);
    await store.sagaTask.toPromise();

    return {
      redirect: {
        permanent: false,
        destination: accessToken && '/',
      },
      props: {},
    };
  },
);

export default login;
