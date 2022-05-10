import { ChangeEvent, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import {
  minusMaxCount,
  plusMaxCount,
  typeStoreLink,
  typeStoreName,
} from '../modules/create/actions';

export function useCreateNaeggeotalk() {
  const dispatch = useDispatch();
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

  return {
    storeName,
    storeLink,
    maxCount,
    tags,
    dispatchChangeStoreName,
    dispatchChangeStoreLink,
    dispatchPlusMaxCount,
    dispatchMinusMaxCount,
  };
}
