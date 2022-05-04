import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { END } from 'redux-saga';
import MainTemplate from '../components/main/MainTemplate';
import { wrapper } from '../modules';
import {
  getChatRoomsListActions,
  getFoodCategoriesActions,
} from '../modules/main/actions';
import {
  CategoriesResponse,
  ChatRoomItemResponse,
} from '../modules/main/types';

const Home = ({
  foodCategories,
  chatRooms,
}: {
  foodCategories: CategoriesResponse[];
  chatRooms: ChatRoomItemResponse[];
}) => {
  return <MainTemplate chatRooms={chatRooms} foodCategories={foodCategories} />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    store.dispatch(getFoodCategoriesActions.request());
    store.dispatch(getChatRoomsListActions.request());

    store.dispatch(END);
    await store.sagaTask.toPromise();

    return {
      props: {
        foodCategories: store.getState().mainPageState.categories,
        chatRooms: store.getState().mainPageState.chatRooms,
      },
    };
  },
);
export default Home;
