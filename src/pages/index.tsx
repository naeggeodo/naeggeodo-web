import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { END } from 'redux-saga';
import MainTemplate from '../components/main/MainTemplate';
import { wrapper } from '../modules';
import { getFoodCategoriesActions } from '../modules/main/actions';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFoodCategoriesActions.request({}));
  }, [dispatch]);

  return <MainTemplate />;
};

// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) => async (context) => {
//     store.dispatch(getFoodCategoriesActions.request());

//     store.dispatch(END);
//     await store.sagaTask.toPromise();

//     return {
//       props: {},
//     };
//   },
// );
export default Home;
