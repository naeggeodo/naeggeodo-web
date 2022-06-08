import React from 'react';
import { END } from 'redux-saga';
import MypageTemplate from '../../components/mypage/MypageTemplate';
import { wrapper } from '../../modules';
import { saveCookies } from '../../utils/saveCookies';

const Mypage = () => {
  return <MypageTemplate />;
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

export default Mypage;
