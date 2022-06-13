import { useSelector } from 'react-redux';
import { RootState } from '../../modules';

export function useSelectModalStates() {
  const loginModalIsClicked = useSelector(
    (state: RootState) => state.modalStates.loginModalIsClicked,
  );

  const completeModalIsOpen = useSelector(
    (state: RootState) => state.modalStates.completeModalIsOpen,
  );

  const copyCompleteModalIsOpen = useSelector(
    (state: RootState) => state.modalStates.copyCompleteModalIsOpen,
  );

  return {
    loginModalIsClicked,
    completeModalIsOpen,
    copyCompleteModalIsOpen,
  };
}
