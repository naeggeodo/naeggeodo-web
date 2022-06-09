import { useSelector } from 'react-redux';
import { RootState } from '../../modules';

export function useLoadLoginStates() {
  const accessToken = useSelector(
    (state: RootState) => state.loginState.accessToken,
  );
  const user_id = useSelector((state: RootState) => state.loginState.user_id);

  return { accessToken, user_id };
}
