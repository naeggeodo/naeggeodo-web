import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { TOKEN_NAME } from '../constant/Login';
import { openLoginModal } from '../modules/login/actions';

export function useCheckValidate() {
  const dispatch = useDispatch();

  const checkTokenAndRedirection = useCallback(() => {
    if (!localStorage.getItem(TOKEN_NAME.ACCESS_TOKEN)) {
      dispatch(openLoginModal());
    }
  }, [dispatch]);

  return { checkTokenAndRedirection };
}
