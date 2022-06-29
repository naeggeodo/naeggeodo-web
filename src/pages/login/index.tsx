import { END } from "redux-saga";
import LoginTemplate from "../../components/login/LoginTemplate";
import { RootState, wrapper } from "../../modules";
import { saveCookies } from "../../utils/saveCookies";

const login = () => {
  return <LoginTemplate />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    saveCookies(store, context);

    const rootState: RootState = store.getState();
    const accessToken = rootState.loginState.accessToken;

    store.dispatch(END);
    await store.sagaTask.toPromise();

    if (accessToken) {
      return {
        props: {},
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }

    return {
      props: {},
    };
  }
);

export default login;
