import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import {
  addTag,
  minusMaxCount,
  plusMaxCount,
  removeTag,
  typeStoreLink,
  typeStoreName,
} from '../modules/create/actions';

export function useCreateNaeggeotalk() {
  const dispatch = useDispatch();

  const [tagText, setTagText] = useState('');

  const { storeName, storeLink, maxCount, tags } = useSelector(
    (state: RootState) => state.createStates,
  );

  const dispatchChangeStoreName = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(typeStoreName(e.target.value));
    },
    [dispatch],
  );

  const dispatchChangeStoreLink = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(typeStoreLink(e.target.value));
    },
    [dispatch],
  );

  const dispatchPlusMaxCount = useCallback(
    (_) => {
      dispatch(plusMaxCount());
    },
    [dispatch],
  );

  const dispatchMinusMaxCount = useCallback(
    (_) => {
      dispatch(minusMaxCount());
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
      dispatch(removeTag(+e.currentTarget.dataset.id));
    },
    [dispatch],
  );

  return {
    storeName,
    storeLink,
    maxCount,
    tags,
    tagText,
    setTagText,
    dispatch,
    dispatchChangeStoreName,
    dispatchRemoveTag,
    dispatchChangeStoreLink,
    dispatchPlusMaxCount,
    dispatchMinusMaxCount,
    dispatchAddTag,
  };
}
