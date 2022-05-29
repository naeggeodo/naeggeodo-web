import { NextRouter, useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { END } from 'redux-saga';
import MainTemplate from '../../components/main/MainTemplate';
import { RootState, wrapper } from '../../modules';
import {
  getAllChatRoomsListRequest,
  getChatRoomListWithCategoryRequest,
  getFoodCategoriesActions,
} from '../../modules/main/actions';
import { CategoriesResponse } from '../../modules/main/types';

const ChatRooms = ({
  foodCategories,
}: {
  foodCategories: CategoriesResponse[];
}) => {
  const router: NextRouter = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const { query } = router;
    if (!query.buildingCode) return;
    else if (query.buildingCode && !query.category) {
      dispatch(getAllChatRoomsListRequest(query.buildingCode));
    } else if (query.buildingCode && query.category) {
      dispatch(
        getChatRoomListWithCategoryRequest(query.buildingCode, query.category),
      );
    }
  }, [router, dispatch]);

  return <MainTemplate foodCategories={foodCategories} />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const rootState: RootState = store.getState();
    if (rootState.mainPageState.categories.length > 0) return;

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
export default ChatRooms;
