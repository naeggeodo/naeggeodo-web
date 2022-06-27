import axios from "axios";
import jwtDecode, { JwtPayload } from "jwt-decode";
import Router from "next/router";
import { END } from "redux-saga";
import { Cookies } from "react-cookie";
import MainTemplate from "../../components/main/MainTemplate";
import { TOKEN_NAME } from "../../constant/Login";
import { RootState, wrapper } from "../../modules";
import { CategoriesResponse } from "../../modules/common/types";
import {
  getAllChatRoomsListRequest,
  getChatRoomListWithCategoryRequest,
  getFoodCategoriesActions,
} from "../../modules/main/actions";
import { axiosInstance, removeTokens } from "../../service/api";
import { createCustomHeader } from "../../utils/createCustomHeader";
import { saveCookies } from "../../utils/saveCookies";
import cookies from "next-cookies";

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
    // const accessToken = rootState.loginState.accessToken;
    const allCookies = cookies(context);
    const reactCookies = new Cookies();

    axiosInstance.interceptors.request.use(
      async function (config) {
        try {
          const accessToken = allCookies.accessToken;
          const decoded: JwtPayload = jwtDecode(accessToken);
          const exp = Number(decoded.exp) * 1000;
          const nowTime = new Date().getTime() / 1000; // 초
          const expiredTime = new Date(exp).getTime() / 1000; // 초
          const betweenTime = Math.floor(expiredTime - nowTime);

          if (betweenTime <= 20) {
            try {
              const response = await axios.post(
                `${process.env.NEXT_PUBLIC_API_URL}/refreshtoken`,
                {},
                { withCredentials: true }
              );
              const updatedAccessToken = response.data.accessToken;
              reactCookies.set(TOKEN_NAME.ACCESS_TOKEN, updatedAccessToken, {
                path: "/",
                maxAge: 60 * 60 * 24 * 2,
              });
              config.headers = createCustomHeader(updatedAccessToken);
              return config;
            } catch (error) {
              console.log(error);
              removeTokens();
              Router.replace("/login");
            }
          }
          console.log("토쿤", accessToken);
          config.headers = createCustomHeader(accessToken);
          return config;
        } catch (error) {
          console.log(error);
        }
      },
      function (error) {
        return Promise.reject(error);
      }
    );

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
