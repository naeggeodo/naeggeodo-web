import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import {
  addTag,
  insertLink,
  insertPlace,
  insertTitle,
  minusMaxCount,
  plusMaxCount,
  removeTag,
} from '../modules/create/actions';

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

  const title = useSelector((state: RootState) => state.createStates.title);
  const link = useSelector((state: RootState) => state.createStates.link);

  const category = useSelector(
    (state: RootState) => state.createStates.category,
  );
  const tag = useSelector((state: RootState) => state.createStates.tag);
  const maxCount = useSelector(
    (state: RootState) => state.createStates.maxCount,
  );
  const place = useSelector((state: RootState) => state.createStates.place);
  const orderTimeType = useSelector(
    (state: RootState) => state.createStates.orderTimeType,
  );
  const buildingCode = useSelector(
    (state: RootState) => state.loginState.buildingCode,
  );
  const user_id = useSelector((state: RootState) => state.loginState.user_id);

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

  return {
    dispatch,
    title,
    link,
    place,
    category,
    buildingCode,
    user_id,
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
  };
}
