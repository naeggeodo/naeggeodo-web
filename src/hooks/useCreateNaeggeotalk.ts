import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import {
  addTag,
  createChatRoomActions,
  insertLink,
  insertPlace,
  insertTitle,
  minusMaxCount,
  plusMaxCount,
  removeTag,
} from '../modules/create/actions';
import { openCompleteModal } from '../modules/modal/actions';

type InputActionType = 'title' | 'place' | 'link';

export function useCreateNaeggeotalk() {
  const dispatch = useDispatch();
  const [tagText, setTagText] = useState('');

  const changeTagText = useCallback<(e: ChangeEvent<HTMLInputElement>) => void>(
    (e) => {
      setTagText(e.target.value);
    },
    [tagText],
  );

  const title = useSelector(
    (state: RootState) => state.createStates.createData.title,
  );
  const link = useSelector(
    (state: RootState) => state.createStates.createData.link,
  );

  const category = useSelector(
    (state: RootState) => state.createStates.createData.category,
  );
  const tag = useSelector(
    (state: RootState) => state.createStates.createData.tag,
  );
  const maxCount = useSelector(
    (state: RootState) => state.createStates.createData.maxCount,
  );
  const place = useSelector(
    (state: RootState) => state.createStates.createData.place,
  );
  const orderTimeType = useSelector(
    (state: RootState) => state.createStates.createData.orderTimeType,
  );

  const dispatchInputAction = useCallback<
    (e: ChangeEvent<HTMLInputElement>, inputctionsType: InputActionType) => void
  >(
    (e, inputActionType) => {
      const value = e.target.value;

      if (inputActionType === 'title') {
        dispatch(insertTitle(value));
      } else if (inputActionType === 'link') {
        dispatch(insertLink(value));
      } else if (inputActionType === 'place') {
        dispatch(insertPlace(value));
      }
    },
    [dispatch],
  );

  const dispatchAddTag = useCallback<(e: FormEvent<HTMLFormElement>) => void>(
    (e) => {
      e.preventDefault();
      if (tagText === '') return;
      else {
        dispatch(addTag(tagText));
        setTagText('');
      }
    },
    [dispatch, tagText],
  );

  const dispatchRemoveTag = useCallback<
    (e: React.MouseEvent<HTMLButtonElement>) => void
  >(
    (e) => {
      const dataValue = e.currentTarget.getAttribute('data-value');
      dispatch(removeTag(+dataValue));
    },
    [dispatch],
  );

  const dispatchPlusMaxCount = useCallback(
    (_) => {
      if (maxCount === 5) return;
      dispatch(plusMaxCount());
    },
    [dispatch, maxCount],
  );

  const dispatchMinusMaxCount = useCallback(
    (_) => {
      if (maxCount === 1) return;
      dispatch(minusMaxCount());
    },
    [dispatch, maxCount],
  );

  const dispatchOpenCompleteModal = useCallback(() => {
    dispatch(openCompleteModal());
  }, [dispatch]);

  const dispatchCreateChatRoom = useCallback(
    (formData: FormData) => {
      dispatch(createChatRoomActions.request(formData));
    },
    [dispatch],
  );

  return {
    dispatch,
    title,
    link,
    place,
    category,
    tag,
    tagText,
    orderTimeType,
    changeTagText,
    maxCount,
    dispatchInputAction,
    dispatchRemoveTag,
    dispatchPlusMaxCount,
    dispatchMinusMaxCount,
    dispatchAddTag,
    dispatchOpenCompleteModal,
    dispatchCreateChatRoom,
  };
}
