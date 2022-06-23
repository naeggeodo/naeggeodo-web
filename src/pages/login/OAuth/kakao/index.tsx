import React from 'react';
import { END } from 'redux-saga';
import styled from 'styled-components';
import Loading from '../../../../components/common/Loading';
import { useAuth } from '../../../../hooks/auth/useAuth';
import { RootState, wrapper } from '../../../../modules';
import { saveCookies } from '../../../../utils/saveCookies';

const kakao = () => {
  useAuth('kakao');

  return (
    <Container>
      <Loading />
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

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
          destination: '/',
          permanent: false,
        },
      };
    }

    return {
      props: {},
    };
  },
);

export default kakao;
