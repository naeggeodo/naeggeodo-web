import { useSelector } from 'react-redux';
import { RootState } from '../../modules';

export function useSelectLoginStates() {
  const accessToken = useSelector(
    (state: RootState) => state.loginState.accessToken,
  );
  const user_id = useSelector((state: RootState) => state.loginState.user_id);
  const buildingCode = useSelector(
    (state: RootState) => state.loginState.buildingCode,
  );
  const address = useSelector((state: RootState) => state.loginState.address);

  return { accessToken, user_id, buildingCode, address };
}
