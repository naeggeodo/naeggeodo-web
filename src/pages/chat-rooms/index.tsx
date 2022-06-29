import jwtDecode, { JwtPayload } from "jwt-decode";
import { END } from "redux-saga";
import MainTemplate from "../../components/main/MainTemplate";
import { RootState, wrapper } from "../../modules";
import { CategoriesResponse } from "../../modules/common/types";
import {
  getAllChatRoomsListRequest,
  getChatRoomListWithCategoryRequest,
  getFoodCategoriesActions,
} from "../../modules/main/actions";
import { removeTokens } from "../../service/api";
import { saveCookies } from "../../utils/saveCookies";
import cookies from "next-cookies";
import { removeCookies } from "cookies-next";
import { removeCookiesServerside } from "../../utils/removeCookiesServerside";

const ChatRooms = ({
  foodCategories,
}: {
  foodCategories: CategoriesResponse[];
}) => {
  return <MainTemplate foodCategories={foodCategories} />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    saveCookies(store, context);

    const { dispatch } = store;
    const { query } = context;
    const rootState: RootState = store.getState();

    if (rootState.mainPageState.categories.length > 0) return;
    else dispatch(getFoodCategoriesActions.request());

    if (query.buildingCode && !query.category) {
      dispatch(getAllChatRoomsListRequest(query.buildingCode));
    } else if (query.buildingCode && query.category) {
      dispatch(
        getChatRoomListWithCategoryRequest(query.buildingCode, query.category)
      );
    }

    store.dispatch(END);
    await store.sagaTask.toPromise();

    return {
      props: {
        foodCategories: store.getState().mainPageState.categories,
      },
    };
  }
);
export default ChatRooms;
