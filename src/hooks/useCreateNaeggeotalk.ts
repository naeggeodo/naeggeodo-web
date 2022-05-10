import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import {
  addTag,
  minusMaxCount,
  plusMaxCount,
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

  return {
    storeName,
    storeLink,
    maxCount,
    tags,
    tagText,
    setTagText,
    dispatch,
    dispatchChangeStoreName,
    dispatchChangeStoreLink,
    dispatchPlusMaxCount,
    dispatchMinusMaxCount,
    dispatchAddTag,
  };
}
