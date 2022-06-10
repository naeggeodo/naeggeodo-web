import { NextRouter } from 'next/router';
import {
  ChangeEvent,
  FormEvent,
  PointerEvent,
  useCallback,
  useState,
} from 'react';
import { useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { RootState } from '../../modules';

export function useSearchChatRoom(dispatch: Dispatch, router: NextRouter) {
  const [searchValue, setSearchValue] = useState('');
  const tags = useSelector(
    (state: RootState) => state.searchPageState?.searchTagList?.tags,
  );
  const { searchResultList } = useSelector(
    (state: RootState) => state.searchPageState,
  );
  const selected = useSelector(
    (state: RootState) => state.searchPageState.selected,
  );

  const handleChangeSearchValue = useCallback<
    (e: ChangeEvent<HTMLInputElement>) => void
  >(
    (e) => {
      setSearchValue(e.target.value);
    },
    [searchValue],
  );

  const getSearchListByTag = useCallback<
    (e: PointerEvent<HTMLButtonElement>) => void
  >(
    (e) => {
      const target = e.target as HTMLButtonElement;
      const searchValue = target.getAttribute('data-value');

      router.push({
        pathname: '/search',
        query: {
          keyword: searchValue,
        },
      });
    },
    [dispatch],
  );

  const getSearchListByInput = useCallback<
    (e: FormEvent<HTMLFormElement>) => void
  >(
    (e) => {
      e.preventDefault();
      router.push({
        pathname: '/search/tag',
        query: {
          keyword: searchValue,
        },
      });
      // dispatch(getResultByInputActions.request(keyWord));
    },
    [dispatch, searchValue],
  );

  return {
    searchValue,
    handleChangeSearchValue,
    getSearchListByTag,
    getSearchListByInput,
    tags,
    searchResultList,
    selected,
  };
}
