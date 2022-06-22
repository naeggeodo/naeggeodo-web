import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../modules';
import { CategoriesResponse } from '../modules/common/types';
import {
  closeSearchPostCode,
  openLoginModal,
  openSearchPostCode,
} from '../modules/modal/actions';
import { useSelectLoginStates } from './select/useSelectLoginStates';
import { useLoadLib } from './utils/useLoadLib';

export function useCheckValidate() {
  const { dispatch, router } = useLoadLib();

  const { accessToken } = useSelectLoginStates();
  const buildingCode = useSelector(
    (state: RootState) => state.postCodeState.buildingCode,
  );

  const checkTokenAndRedirection = useCallback(() => {
    if (!accessToken) {
      dispatch(openLoginModal());
    } else {
      router.replace('/create');
    }
  }, [dispatch]);

  const openWebView = () => {
    if (!accessToken) {
      dispatch(openLoginModal());
    } else dispatch(openSearchPostCode());
  };

  const closeWebView = useCallback(() => {
    dispatch(closeSearchPostCode());
  }, [dispatch, accessToken]);

  const routeToCategory = useCallback(
    (_, item: CategoriesResponse) => {
      if (!accessToken) {
        dispatch(openLoginModal());
      } else if (item.category === 'ALL') {
        router.push({
          pathname: '/chat-rooms',
          query: {
            buildingCode: buildingCode,
          },
        });
      } else {
        router.push({
          pathname: '/chat-rooms',
          query: {
            buildingCode: buildingCode,
            category: item.category.toLowerCase(),
          },
        });
      }
    },
    [dispatch, router, accessToken, buildingCode],
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
