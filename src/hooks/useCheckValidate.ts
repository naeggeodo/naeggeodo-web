import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { TOKEN_NAME } from '../constant/Login';
import { openLoginModal } from '../modules/modal/actions';
import { useLoadLib } from './useLoadLib';

export function useCheckValidate() {
  const { dispatch, router } = useLoadLib();

  const checkTokenAndRedirection = useCallback(() => {
    if (!localStorage.getItem(TOKEN_NAME.ACCESS_TOKEN)) {
      dispatch(openLoginModal());
    }
    router.replace('/create');
  }, [dispatch]);

  return { checkTokenAndRedirection };
}
