import { END } from 'redux-saga';
import MainTemplate from '../components/main/MainTemplate';
import { wrapper } from '../modules';
import { getFoodCategoriesActions } from '../modules/main/actions';
import { CategoriesResponse } from '../modules/main/types';

const Home = ({ foodCategories }: { foodCategories: CategoriesResponse[] }) => {
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
