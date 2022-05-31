import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import {
  addTag,
  insertLink,
  insertTitle,
  minusMaxCount,
  plusMaxCount,
  removeTag,
} from '../modules/create/actions';

export function useCreateNaeggeotalk() {
  const dispatch = useDispatch();

  const [tagText, setTagText] = useState('');

  const title = useSelector((state: RootState) => state.createStates.title);
  const link = useSelector((state: RootState) => state.createStates.link);

  const dispatchInsertTitle = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(insertTitle(e.target.value));
    },
    [dispatch],
  );

  const dispatchInsertLink = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(insertLink(e.target.value));
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
    title,
    link,
    // maxCount,
    // tags,
    tagText,
    setTagText,
    dispatch,
    dispatchInsertTitle,
    dispatchInsertLink,
    dispatchRemoveTag,
    dispatchPlusMaxCount,
    dispatchMinusMaxCount,
    dispatchAddTag,
  };
}
