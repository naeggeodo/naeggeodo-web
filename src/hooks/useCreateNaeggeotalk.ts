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
    category,
    tag,
    changeTagText,
    // maxCount,
    tagText,
    dispatch,
    dispatchInsertTitle,
    dispatchInsertLink,
    dispatchRemoveTag,
    dispatchPlusMaxCount,
    dispatchMinusMaxCount,
    dispatchAddTag,
  };
}
