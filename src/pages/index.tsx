import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { END } from 'redux-saga';
import MainTemplate from '../components/main/MainTemplate';
import { wrapper } from '../modules';
import {
  getChatRoomsListActions,
  getFoodCategoriesActions,
} from '../modules/main/actions';
import { CategoriesResponse } from '../modules/main/types';
import MainService from '../service/api/main/MainService';

const Home = ({ foodCategories }: { foodCategories: CategoriesResponse[] }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChatRoomsListActions.request());
  }, []);

  return <MainTemplate foodCategories={foodCategories} />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    store.dispatch(getFoodCategoriesActions.request());

    store.dispatch(END);
    await store.sagaTask.toPromise();

    return {
      props: {
        foodCategories: store.getState().mainPageState.categories,
      },
    };
  },
);
export default Home;
