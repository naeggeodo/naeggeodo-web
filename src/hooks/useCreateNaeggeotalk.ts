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
    category,
    tag,
    tagText,
    changeTagText,
    maxCount,
    dispatchInsertTitle,
    dispatchInsertLink,
    dispatchRemoveTag,
    dispatchPlusMaxCount,
    dispatchMinusMaxCount,
    dispatchAddTag,
  };
}
