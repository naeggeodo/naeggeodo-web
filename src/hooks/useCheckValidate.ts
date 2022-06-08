import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../modules';
import { CategoriesResponse } from '../modules/main/types';
import {
  closeSearchPostCode,
  openLoginModal,
  openSearchPostCode,
} from '../modules/modal/actions';
import { useLoadLib } from './utils/useLoadLib';

export function useCheckValidate() {
  const { dispatch, router } = useLoadLib();
  const accessToken = useSelector(
    (state: RootState) => state.loginState.accessToken,
  );

  const checkTokenAndRedirection = useCallback(() => {
    if (!accessToken) {
      dispatch(openLoginModal());
    } else {
      router.replace('/create');
    }
  }, [dispatch]);

  const openWebView = useCallback(() => {
    if (!accessToken) {
      dispatch(openLoginModal());
    } else dispatch(openSearchPostCode());
  }, [dispatch]);

  const closeWebView = useCallback(() => {
    dispatch(closeSearchPostCode());
  }, [dispatch]);

  const routeToCategory = useCallback(
    (_, item: CategoriesResponse) => {
      if (!accessToken) {
        dispatch(openLoginModal());
      } else if (item.category === 'ALL') {
        router.push({
          pathname: '/chatRooms',
          query: {
            buildingCode: '서울',
          },
        });
      } else {
        router.push({
          pathname: '/chatRooms',
          query: {
            buildingCode: '서울',
            category: item.category.toLowerCase(),
          },
        });
      }
    },
    [dispatch],
  );

  return {
    checkTokenAndRedirection,
    accessToken,
    openWebView,
    closeWebView,
    routeToCategory,
    dispatch,
    router,
  };
}
