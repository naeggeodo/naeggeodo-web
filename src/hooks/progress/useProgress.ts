import {
  FormEvent,
  MouseEvent,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { setProgressingChatRoomTitleActions } from '../../modules/progress/actions';
import { useSelectLoginStates } from '../select/useSelectLoginStates';
import { useLoadLib } from '../utils/useLoadLib';

export function useProgress(initialTitle: string, id: string) {
  const { dispatch } = useLoadLib();
  const [elementId, setElementId] = useState<string>(null);
  const [chatTitle, setChatTitle] = useState(initialTitle);

  const inputRefs = useRef([]);

  const myId = useSelectLoginStates().user_id;

  const handleModifyButtonClick = useCallback<
    (e: React.MouseEvent<HTMLButtonElement>) => void
  >(
    (e) => {
      e.stopPropagation();
      const id = e.currentTarget.getAttribute('data-id');
      setElementId(id);
    },
    [elementId],
  );

  useLayoutEffect(() => {
    inputRefs.current.map((input, _) => {
      if (input.id === elementId) {
        input.disabled = false;
        input.focus();
      } else {
        input.disabled = true;
      }
    });
  }, [elementId]);

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChatTitle(e.target.value);
  };

  const onSaveTitle = (
    e: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>,
  ) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(
      setProgressingChatRoomTitleActions.request({
        chatMain_id: String(id),
        title: chatTitle,
      }),
    );
    inputRefs.current.map((input, _) => {
      if (input.id === elementId) {
        input.disabled = true;
        input.blur();
        setElementId(null);
      }
    });
  };

  return {
    handleModifyButtonClick,
    onChangeTitle,
    onSaveTitle,
    myId,
    chatTitle,
    inputRefs,
    elementId,
  };
}
