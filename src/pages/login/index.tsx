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

    store.dispatch(END);
    await store.sagaTask.toPromise();

    return {
      props: {},
    };
  },
);

export default login;
